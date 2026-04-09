"""
AIE 영어 문제 JSON → 한글 번역 → PDF 생성
사용법: python scripts/generate_aie_ko_pdf.py
환경변수: ANTHROPIC_API_KEY 필요
"""

import json
import os
import re
import time
from pathlib import Path

import anthropic
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image as RLImage, HRFlowable, PageBreak
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors

# ── 경로 설정 ─────────────────────────────────────────────────────────────────

BASE_DIR = Path(__file__).parent.parent
DATA_DIR = BASE_DIR / 'data'
IMAGES_DIR = BASE_DIR / 'public' / 'images' / 'aie-images'
OUT_PDF = BASE_DIR / 'pdf' / 'Databricks-AIE-Associate-V12.95-KO.pdf'
CACHE_JSON = DATA_DIR / 'aie-questions-ko.json'

SRC_JSON = DATA_DIR / 'aie-questions.json'

# ── 한글 폰트 등록 ────────────────────────────────────────────────────────────

FONT_PATH = r'C:\Windows\Fonts\malgun.ttf'
FONT_BOLD_PATH = r'C:\Windows\Fonts\malgunbd.ttf'

pdfmetrics.registerFont(TTFont('Malgun', FONT_PATH))
pdfmetrics.registerFont(TTFont('MalgunBold', FONT_BOLD_PATH))

# ── 스타일 ────────────────────────────────────────────────────────────────────

def make_styles():
    base = dict(fontName='Malgun', fontSize=10, leading=16, spaceAfter=4)
    return {
        'q_num': ParagraphStyle('q_num', fontName='MalgunBold', fontSize=12,
                                 leading=18, textColor=colors.HexColor('#cc2200'),
                                 spaceAfter=6),
        'question': ParagraphStyle('question', leading=18, spaceAfter=8, **{**base, 'fontSize': 11}),
        'choice': ParagraphStyle('choice', leftIndent=12, **base),
        'answer': ParagraphStyle('answer', fontName='MalgunBold', fontSize=10,
                                  leading=16, textColor=colors.HexColor('#1a7a1a'), spaceAfter=4),
        'explanation': ParagraphStyle('explanation', leftIndent=10,
                                       textColor=colors.HexColor('#444444'), **base),
        'label': ParagraphStyle('label', fontName='MalgunBold', fontSize=10,
                                 leading=16, spaceAfter=2),
    }

# ── 번역 ─────────────────────────────────────────────────────────────────────

def translate_batch(client: anthropic.Anthropic, questions: list[dict]) -> list[dict]:
    """5개 문제씩 묶어서 번역"""
    payload = json.dumps([
        {
            'num': q['num'],
            'question': q['question'],
            'choices': q['choices'],
            'explanation': q['explanation'],
        }
        for q in questions
    ], ensure_ascii=False)

    prompt = f"""다음은 Databricks Generative AI Engineer Associate 시험 문제입니다.
question, choices[].text, explanation 필드를 자연스러운 한국어로 번역하세요.
num, letter, correct, correct_list, question_images 필드는 그대로 유지하세요.
반드시 동일한 JSON 배열 형식으로만 응답하세요. 설명 없이 JSON만 출력하세요.

{payload}"""

    response = client.messages.create(
        model='claude-opus-4-6',
        max_tokens=4096,
        messages=[{'role': 'user', 'content': prompt}],
    )
    text = response.content[0].text.strip()

    # JSON 추출 (```json ... ``` 래핑 제거)
    m = re.search(r'\[.*\]', text, re.DOTALL)
    if m:
        text = m.group(0)

    translated = json.loads(text)

    # 번역 안 된 필드 원본으로 보완
    orig_map = {q['num']: q for q in questions}
    result = []
    for t in translated:
        orig = orig_map[t['num']]
        result.append({
            **orig,
            'question': t.get('question', orig['question']),
            'choices': t.get('choices', orig['choices']),
            'explanation': t.get('explanation', orig['explanation']),
        })
    return result


def translate_all(questions: list[dict]) -> list[dict]:
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        raise ValueError('ANTHROPIC_API_KEY 환경변수를 설정하세요.')

    client = anthropic.Anthropic(api_key=api_key)
    batch_size = 5
    translated = []

    for i in range(0, len(questions), batch_size):
        batch = questions[i:i + batch_size]
        nums = [q['num'] for q in batch]
        print(f'  번역 중 Q{nums[0]}~Q{nums[-1]}...')
        try:
            result = translate_batch(client, batch)
            translated.extend(result)
        except Exception as e:
            print(f'  오류 발생 (Q{nums}): {e}, 원본 유지')
            translated.extend(batch)
        time.sleep(0.5)

    return translated

# ── PDF 생성 ──────────────────────────────────────────────────────────────────

def escape(text: str) -> str:
    """reportlab XML 이스케이프"""
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))


def build_pdf(questions: list[dict]):
    styles = make_styles()
    doc = SimpleDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=20 * mm,
        bottomMargin=20 * mm,
    )
    story = []
    page_width = A4[0] - 40 * mm  # 사용 가능 너비

    for q in questions:
        # 문제 번호
        story.append(Paragraph(f'QUESTION {q["num"]}', styles['q_num']))

        # 문제 이미지 (문제 텍스트 앞)
        for img_path in q.get('question_images', []):
            fname = Path(img_path).name
            full_path = IMAGES_DIR / fname
            if full_path.exists():
                try:
                    img = RLImage(str(full_path), width=page_width * 0.8, height=None)
                    story.append(img)
                    story.append(Spacer(1, 4 * mm))
                except Exception:
                    pass

        # 문제 텍스트
        story.append(Paragraph(escape(q['question']), styles['question']))

        # 선택지
        for c in q.get('choices', []):
            story.append(Paragraph(
                f'<b>{c["letter"]}.</b> {escape(c["text"])}',
                styles['choice']
            ))
        story.append(Spacer(1, 4 * mm))

        # 정답
        story.append(Paragraph(f'정답: {q["correct"]}', styles['answer']))

        # 해설
        if q.get('explanation'):
            story.append(Paragraph('<b>해설</b>', styles['label']))
            story.append(Paragraph(escape(q['explanation']), styles['explanation']))

        story.append(HRFlowable(width='100%', thickness=0.5,
                                 color=colors.HexColor('#cccccc'), spaceAfter=8))
        story.append(Spacer(1, 4 * mm))

    doc.build(story)


# ── 메인 ─────────────────────────────────────────────────────────────────────

def main():
    with open(SRC_JSON, encoding='utf-8') as f:
        questions = json.load(f)
    print(f'원본 {len(questions)}문제 로드')

    # 번역 캐시 확인
    if CACHE_JSON.exists():
        print(f'번역 캐시 발견: {CACHE_JSON}')
        ans = input('캐시를 사용할까요? (y/n): ').strip().lower()
        if ans == 'y':
            with open(CACHE_JSON, encoding='utf-8') as f:
                questions = json.load(f)
            print('캐시 로드 완료')
        else:
            print('재번역 시작...')
            questions = translate_all(questions)
            with open(CACHE_JSON, 'w', encoding='utf-8') as f:
                json.dump(questions, f, ensure_ascii=False, indent=2)
            print(f'번역 완료 → {CACHE_JSON}')
    else:
        print('번역 시작...')
        questions = translate_all(questions)
        with open(CACHE_JSON, 'w', encoding='utf-8') as f:
            json.dump(questions, f, ensure_ascii=False, indent=2)
        print(f'번역 완료 → {CACHE_JSON}')

    print('PDF 생성 중...')
    build_pdf(questions)
    print(f'완료! → {OUT_PDF}')


if __name__ == '__main__':
    main()
