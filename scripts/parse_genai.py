"""
GenAI Engineer Associate PDF → Korean questions.json
"""
import re
import json
import time
import pdfplumber
import anthropic

PDF_PATH = r'C:\docs\exam-vce\pdf\Databricks-Generative-AI-Engineer-Associate V12.65.pdf'
OUT_PATH = r'C:\docs\exam-vce\data\genai-questions.json'

HEADER_JUNK = r'IT Certification Guaranteed, The Easy Way!\s*'


def extract_full_text():
    with pdfplumber.open(PDF_PATH) as pdf:
        pages = []
        for page in pdf.pages:
            t = page.extract_text()
            if t:
                t = re.sub(HEADER_JUNK, '', t)
                pages.append(t)
    return '\n'.join(pages)


def split_questions(text):
    parts = re.split(r'(?=QUESTION NO:\s*\d+)', text)
    questions = [p.strip() for p in parts if re.match(r'QUESTION NO:\s*\d+', p.strip())]
    return questions


def parse_question_block(block):
    """Parse a single question block into structured dict."""
    # Question number
    num_match = re.match(r'QUESTION NO:\s*(\d+)', block)
    if not num_match:
        return None
    num = int(num_match.group(1))

    # Remove question number line
    block = block[num_match.end():].strip()

    # Find answer line
    answer_match = re.search(r'\nAnswer:\s*([A-Z,\s]+)\n', block)
    if not answer_match:
        answer_match = re.search(r'\nAnswer:\s*([A-Z,\s]+)$', block, re.MULTILINE)

    if answer_match:
        answer_raw = answer_match.group(1).strip().replace(',', '').replace(' ', '')
        correct_list = list(answer_raw)
        content_before_answer = block[:answer_match.start()].strip()
        explanation_part = block[answer_match.end():].strip()
        if explanation_part.startswith('Explanation:'):
            explanation_part = explanation_part[len('Explanation:'):].strip()
    else:
        correct_list = []
        content_before_answer = block.strip()
        explanation_part = ''

    # Split choices from question text
    # Choices start with a single letter followed by period or dot
    choice_pattern = re.compile(r'\n([A-E])\.\s')
    choice_matches = list(choice_pattern.finditer(content_before_answer))

    if choice_matches:
        question_text = content_before_answer[:choice_matches[0].start()].strip()
        choices = []
        for i, m in enumerate(choice_matches):
            letter = m.group(1)
            start = m.end()
            end = choice_matches[i+1].start() if i+1 < len(choice_matches) else len(content_before_answer)
            choice_text = content_before_answer[start:end].strip()
            choices.append({'letter': letter, 'text': choice_text})
    else:
        question_text = content_before_answer
        choices = []

    return {
        'num': num,
        'question_en': question_text,
        'choices_en': choices,
        'correct': ''.join(correct_list),
        'correct_list': correct_list,
        'explanation_en': explanation_part,
    }


def translate_question(client, q):
    """Translate a parsed question dict to Korean using Claude."""
    choices_text = '\n'.join(f"{c['letter']}. {c['text']}" for c in q['choices_en'])

    prompt = f"""다음 Databricks Generative AI Engineer 시험 문제를 한국어로 번역해주세요.
자연스러운 한국어로 번역하되, Databricks/AI 기술 용어(RAG, LLM, Vector Search, MLflow 등)는 영어 원문 그대로 유지하세요.

[문제]
{q['question_en']}

[선택지]
{choices_text}

[해설]
{q['explanation_en']}

다음 JSON 형식으로 응답하세요 (다른 텍스트 없이 JSON만):
{{
  "question": "번역된 문제",
  "choices": [
    {{"letter": "A", "text": "번역된 선택지"}},
    ...
  ],
  "explanation": "번역된 해설"
}}"""

    response = client.messages.create(
        model='claude-opus-4-6',
        max_tokens=2000,
        messages=[{'role': 'user', 'content': prompt}]
    )

    text = response.content[0].text.strip()
    # Extract JSON
    json_match = re.search(r'\{[\s\S]*\}', text)
    if json_match:
        return json.loads(json_match.group())
    raise ValueError(f"No JSON in response: {text[:200]}")


def main():
    print("PDF 파싱 중...")
    full_text = extract_full_text()
    blocks = split_questions(full_text)
    print(f"문제 블록 {len(blocks)}개 발견")

    parsed = []
    for block in blocks:
        q = parse_question_block(block)
        if q:
            parsed.append(q)
    print(f"파싱 완료: {len(parsed)}문제")

    client = anthropic.Anthropic()

    results = []
    for i, q in enumerate(parsed):
        print(f"[{i+1}/{len(parsed)}] Q{q['num']} 번역 중...")
        try:
            translated = translate_question(client, q)
            result = {
                'num': q['num'],
                'question': translated['question'],
                'choices': translated['choices'],
                'correct': q['correct'],
                'correct_list': q['correct_list'],
                'explanation': translated['explanation'],
                'question_images': [],
            }
            results.append(result)
        except Exception as e:
            print(f"  오류 (Q{q['num']}): {e}")
            # Fallback: keep English
            result = {
                'num': q['num'],
                'question': q['question_en'],
                'choices': q['choices_en'],
                'correct': q['correct'],
                'correct_list': q['correct_list'],
                'explanation': q['explanation_en'],
                'question_images': [],
            }
            results.append(result)

        # Rate limit 방지
        if (i + 1) % 10 == 0:
            print("  잠시 대기...")
            time.sleep(2)

    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n완료! {OUT_PATH} 에 {len(results)}문제 저장됨")


if __name__ == '__main__':
    main()
