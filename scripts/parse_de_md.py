"""
DE v15.65 MD → de-v1565-questions.json
"""
import re
import json

Q_PATH = r'c:\project\exam-vce\md\Databricks-Certified-Data-Engineer-Associate V15.65 (KR_Questions).md'
A_PATH = r'c:\project\exam-vce\md\Databricks-Certified-Data-Engineer-Associate V15.65 (KR_Answers).md'
OUT_PATH = r'c:\project\exam-vce\data\de-v1565-questions.json'


def parse_questions(text):
    blocks = re.split(r'\n---\n', text)
    questions = {}
    for block in blocks:
        m = re.match(r'\s*## NO\.(\d+)\s*\n([\s\S]+)', block.strip())
        if not m:
            continue
        num = int(m.group(1))
        body = m.group(2).strip()

        # 선택지 파싱
        choice_pattern = re.compile(r'\n([A-F])\.\s')
        choice_matches = list(choice_pattern.finditer(body))

        if choice_matches:
            question_text = body[:choice_matches[0].start()].strip()
            choices = []
            for i, cm in enumerate(choice_matches):
                letter = cm.group(1)
                start = cm.end()
                end = choice_matches[i+1].start() if i+1 < len(choice_matches) else len(body)
                choice_text = body[start:end].strip()
                choices.append({'letter': letter, 'text': choice_text})
        else:
            question_text = body
            choices = []

        questions[num] = {'num': num, 'question': question_text, 'choices': choices}
    return questions


def parse_answers(text):
    answers = {}
    for m in re.finditer(r'\|\s*(\d+)\s*\|\s*\*\*([A-F,\s]+)\*\*\s*\|\s*([^|]+)\|', text):
        num = int(m.group(1))
        raw = m.group(2).strip().replace(',', '').replace(' ', '')
        correct_list = list(raw)
        explanation = m.group(3).strip()
        answers[num] = {'correct': ''.join(correct_list), 'correct_list': correct_list, 'explanation': explanation}
    return answers


def main():
    with open(Q_PATH, encoding='utf-8') as f:
        q_text = f.read()
    with open(A_PATH, encoding='utf-8') as f:
        a_text = f.read()

    questions = parse_questions(q_text)
    answers = parse_answers(a_text)

    results = []
    for num in sorted(questions.keys()):
        q = questions[num]
        a = answers.get(num, {'correct': '', 'correct_list': [], 'explanation': ''})
        results.append({
            'num': num,
            'question': q['question'],
            'choices': q['choices'],
            'correct': a['correct'],
            'correct_list': a['correct_list'],
            'explanation': a['explanation'],
            'question_images': [],
        })

    with open(OUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f'완료: {len(results)}문제 → {OUT_PATH}')
    missing = [n for n in questions if n not in answers]
    if missing:
        print(f'답 없는 문제: {missing[:10]}')


if __name__ == '__main__':
    main()
