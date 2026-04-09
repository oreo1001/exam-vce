"""
AI Engineer Associate PDF → English questions.json (no translation needed)
"""
import re
import json
import pdfplumber

PDF_PATH = r'c:\project\exam-vce\pdf\Databricks-Generative-AI-Engineer-Associate V12.95.pdf'
OUT_PATH = r'c:\project\exam-vce\data\aie-questions.json'

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
    num_match = re.match(r'QUESTION NO:\s*(\d+)', block)
    if not num_match:
        return None
    num = int(num_match.group(1))

    block = block[num_match.end():].strip()

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
        'question': question_text,
        'choices': choices,
        'correct': ''.join(correct_list),
        'correct_list': correct_list,
        'explanation': explanation_part,
        'question_images': [],
    }


def main():
    print("PDF 파싱 중...")
    full_text = extract_full_text()
    blocks = split_questions(full_text)
    print(f"문제 블록 {len(blocks)}개 발견")

    results = []
    for block in blocks:
        q = parse_question_block(block)
        if q:
            results.append(q)

    print(f"파싱 완료: {len(results)}문제")

    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"완료! {OUT_PATH} 에 {len(results)}문제 저장됨")


if __name__ == '__main__':
    main()
