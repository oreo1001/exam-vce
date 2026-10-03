"""
AWS DOP-C02 (Korean, 505 questions) PDF → data/aws-dop-c02-q-ko.json

PDF 구조:
  문제 #N
  <문제 본문>
  A. ...  B. ...
  정답: A, C
  <해설>
이미지는 워터마크뿐이라 텍스트만 추출한다.
"""
import json
import re
import sys
from pathlib import Path

import fitz  # PyMuPDF

ROOT = Path(__file__).resolve().parent.parent
PDF_PATH = next((ROOT / 'pdf').glob('*DOP-C02*.pdf'))
OUT_PATH = ROOT / 'data' / 'aws-dop-c02-q-ko.json'

PAGE_FOOTER = re.compile(r'^\s*-\s*\d+\s*/\s*\d+\s*-\s*$')
# PDF 추출 시 영문/숫자와 조사 사이에 공백이 끼는 현상 보정 ("ALB 는" → "ALB는")
PARTICLE_GAP = re.compile(
    r'([A-Za-z0-9)\]`%])\s+(은|는|이|가|을|를|의|에|에서|에게|로|으로|와|과|도|만|이며|이고|이다|입니다|이라는|라는|처럼|까지|부터|보다)(?=[\s,.)]|$)'
)


def extract_lines():
    doc = fitz.open(PDF_PATH)
    lines = []
    for page in doc:
        for line in page.get_text().split('\n'):
            if PAGE_FOOTER.match(line):
                continue
            lines.append(line.rstrip())
    return lines


def join_lines(lines):
    text = ' '.join(l.strip() for l in lines if l.strip())
    text = re.sub(r'\s{2,}', ' ', text).strip()
    return PARTICLE_GAP.sub(r'\1\2', text)


def parse_block(num, lines):
    choice_re = re.compile(r'^([A-H])\.\s?(.*)$')
    answer_re = re.compile(r'^정답:\s*(.*)$')

    q_lines, choices, expl_lines = [], [], []
    correct_list = []
    state = 'q'
    for line in lines:
        s = line.strip()
        if state in ('q', 'c'):
            m_ans = answer_re.match(s)
            if m_ans:
                # "A, B (또는 B, D)" 처럼 괄호 안 메모는 정답에서 빼고 해설 앞에 남긴다
                raw = m_ans.group(1)
                head, paren, note = raw.partition('(')
                correct_list = re.findall(r'[A-H]', head)
                if paren:
                    expl_lines.append('(' + note)
                state = 'e'
                continue
            m = choice_re.match(s)
            expected = chr(ord('A') + len(choices))
            if m and m.group(1) == expected:
                choices.append({'letter': m.group(1), 'lines': [m.group(2)]})
                state = 'c'
                continue
            if state == 'q':
                q_lines.append(line)
            else:
                choices[-1]['lines'].append(line)
        else:
            expl_lines.append(line)

    return {
        'num': num,
        'question': join_lines(q_lines),
        'choices': [{'letter': c['letter'], 'text': join_lines(c['lines'])} for c in choices],
        'correct': ''.join(correct_list),
        'correct_list': correct_list,
        'explanation': join_lines(expl_lines),
        'question_images': [],
    }


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    lines = extract_lines()
    header_re = re.compile(r'^\s*문제 #(\d+)\s*$')

    blocks = []
    for line in lines:
        m = header_re.match(line)
        if m:
            blocks.append((int(m.group(1)), []))
        elif blocks:
            blocks[-1][1].append(line)

    questions = [parse_block(num, ls) for num, ls in blocks]

    problems = []
    for i, q in enumerate(questions):
        if q['num'] != i + 1:
            problems.append(f"#{q['num']}: 번호 순서 이상")
        if len(q['choices']) < 2:
            problems.append(f"#{q['num']}: 선택지 {len(q['choices'])}개")
        if not q['correct_list']:
            problems.append(f"#{q['num']}: 정답 없음")
        letters = {c['letter'] for c in q['choices']}
        if not set(q['correct_list']) <= letters:
            problems.append(f"#{q['num']}: 정답 {q['correct']}가 선택지에 없음")

    OUT_PATH.write_text(json.dumps(questions, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'{len(questions)} questions → {OUT_PATH}')
    for p in problems:
        print('WARN', p)


if __name__ == '__main__':
    main()
