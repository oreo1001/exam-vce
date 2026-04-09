"""
DE V15.65 Ko PDF → de-v1565-questions.json + public/images/de-v1565-images/ 이미지 추출
pdfplumber doctop 기반으로 이미지를 정확히 문제에 할당
"""
import re
import json
import os
import fitz
import pdfplumber
from bisect import bisect_right

PDF_PATH = r'c:\project\exam-vce\pdf\Databricks-Certified-Data-Engineer-Associate V15.65 ko.pdf'
OUT_JSON  = r'c:\project\exam-vce\data\de-v1565-questions.json'
IMG_DIR   = r'c:\project\exam-vce\public\images\de-v1565-images'
os.makedirs(IMG_DIR, exist_ok=True)

doc_fitz = fitz.open(PDF_PATH)

# ── 1. PDF 전체 텍스트 추출 ──────────────────────────────────────────────────
full_text = ''
for i, page in enumerate(doc_fitz):
    full_text += f'\n=== PAGE {i+1} ===\n' + page.get_text()

# ── 2. 텍스트 파싱 ───────────────────────────────────────────────────────────
def parse_pdf_text(full_text):
    text = re.sub(r'=== PAGE \d+ ===\n', '', full_text)
    blocks = re.split(r'\nNO\.(\d+)\n', text)
    questions = {}
    i = 1
    while i < len(blocks) - 1:
        num = int(blocks[i])
        body = blocks[i + 1]

        ans_match = re.search(r'\n정답:\s*([A-F,\s]+?)(?:\n|$)', body)
        correct_raw = ''
        correct_list = []
        if ans_match:
            raw = ans_match.group(1).strip()
            correct_list = re.findall(r'[A-F]', raw)
            correct_raw = ''.join(correct_list)

        explanation = ''
        if ans_match:
            after_ans = body[ans_match.end():]
            expl_match = re.search(r'해설:\n?([\s\S]+)', after_ans)
            if expl_match:
                explanation = expl_match.group(1).strip()
            if not explanation:
                pre_expl = re.search(r'해설:\n?([\s\S]+?)(?=\n정답:)', body)
                if pre_expl:
                    explanation = pre_expl.group(1).strip()

        body_q = body[:ans_match.start()] if ans_match else body

        choice_pattern = re.compile(r'\n([A-F])\.')
        choice_matches = list(choice_pattern.finditer(body_q))

        if choice_matches:
            question_text = body_q[:choice_matches[0].start()].strip()
            choices = []
            for ci, cm in enumerate(choice_matches):
                letter = cm.group(1)
                start = cm.end()
                end = choice_matches[ci + 1].start() if ci + 1 < len(choice_matches) else len(body_q)
                choice_text = body_q[start:end].strip()
                choices.append({'letter': letter, 'text': choice_text})
        else:
            question_text = body_q.strip()
            choices = []

        question_text = re.sub(r'\nNO\.\d+.*', '', question_text, flags=re.DOTALL).strip()

        questions[num] = {
            'num': num,
            'question': question_text,
            'choices': choices,
            'correct': correct_raw,
            'correct_list': correct_list,
            'explanation': explanation,
            'question_images': [],
        }
        i += 2
    return questions

questions = parse_pdf_text(full_text)
print(f'총 {len(questions)}문제 파싱됨')

# ── 3. pdfplumber doctop 기반 이미지-문제 매핑 ────────────────────────────────
def get_content_images(plumb_page):
    """콘텐츠 이미지 반환 (중첩 제거, doctop 오름차순 정렬)"""
    all_imgs = [img for img in plumb_page.images
                if img.get('width', 0) > 100 and img.get('height', 0) > 15]
    if not all_imgs:
        return []
    def is_inside(a, b):
        return (b['x0'] <= a['x0'] and a['x1'] <= b['x1'] and
                b['y0'] <= a['y0'] and a['y1'] <= b['y1'])
    filtered = [img for img in all_imgs
                if not any(other is not img and is_inside(img, other) for other in all_imgs)]
    # doctop 오름차순 (문서 위에서 아래로)
    filtered.sort(key=lambda x: x.get('doctop', 0))
    return filtered

with pdfplumber.open(PDF_PATH) as pdf:
    # NO.X 텍스트 위치 수집 (doctop 기준)
    no_positions = []  # [(doctop, qnum)]

    for pi, page in enumerate(pdf.pages):
        for w in page.extract_words():
            if re.match(r'NO\.\d+$', w['text'].strip()):
                qnum = int(w['text'].split('.')[1])
                no_positions.append((w['doctop'], qnum))

    no_positions.sort()
    no_doctops = [x[0] for x in no_positions]
    no_qnums   = [x[1] for x in no_positions]

    def find_owner(img_doctop):
        """이미지 doctop보다 작거나 같은 마지막 NO.X의 문제 번호"""
        idx = bisect_right(no_doctops, img_doctop) - 1
        if idx < 0:
            return None
        return no_qnums[idx]

    # 콘텐츠 이미지 수집 (doctop 순서)
    doc_images = []  # [(doctop, qnum, img_dict)]
    for pi, page in enumerate(pdf.pages):
        for img in get_content_images(page):
            img_doctop = img.get('doctop', 0)
            qnum = find_owner(img_doctop)
            if qnum is None:
                print(f'  경고: Page {pi+1} 이미지({img.get("name","?")}) 문제 불명')
                continue
            doc_images.append((img_doctop, qnum, img))

doc_images.sort(key=lambda x: x[0])

print(f'전체 콘텐츠 이미지: {len(doc_images)}개')

# 문제별 이미지 수
from collections import defaultdict
q_to_imgs = defaultdict(list)
for _, qn, img in doc_images:
    q_to_imgs[qn].append(img)

print('이미지 선택지 문제 목록:')
for qn in sorted(q_to_imgs.keys()):
    q = questions.get(qn)
    if not q:
        continue
    empty = sum(1 for c in q['choices'] if not c['text'].strip())
    if empty > 0:
        print(f'  Q{qn}: 이미지 {len(q_to_imgs[qn])}개, 빈 선택지 {empty}개')

# ── 4. 이미지 추출 및 저장 ──────────────────────────────────────────────────
def extract_image_by_name(img_name):
    m = re.match(r'Im(\d+)', img_name or '')
    if not m:
        return None, 'jpeg'
    xref = int(m.group(1))
    try:
        base = doc_fitz.extract_image(xref)
        return base['image'], base.get('ext', 'jpeg')
    except Exception as e:
        print(f'  추출 오류 {img_name}: {e}')
        return None, 'jpeg'

for qn in sorted(q_to_imgs.keys()):
    img_list = q_to_imgs[qn]
    q = questions.get(qn)
    if not q:
        continue

    empty_choices = [c for c in q['choices'] if not c['text'].strip()]

    for ci, img_info in enumerate(img_list):
        name = img_info.get('name', '')
        data, ext = extract_image_by_name(name)
        if data is None:
            continue

        if ci < len(empty_choices):
            letter = empty_choices[ci]['letter']
            fname = f'q{qn}_q{ci}.{ext}'
            fpath = os.path.join(IMG_DIR, fname)
            with open(fpath, 'wb') as f:
                f.write(data)
            empty_choices[ci]['image'] = f'/images/de-v1565-images/{fname}'
            print(f'  Q{qn} 선택지 {letter} → {fname}')
        else:
            idx2 = len(q['question_images'])
            fname = f'q{qn}_img{idx2}.{ext}'
            fpath = os.path.join(IMG_DIR, fname)
            with open(fpath, 'wb') as f:
                f.write(data)
            q['question_images'].append(f'/images/de-v1565-images/{fname}')
            print(f'  Q{qn} 질문 이미지 → {fname}')

# ── 5. JSON 저장 ─────────────────────────────────────────────────────────────
results = [questions[n] for n in sorted(questions.keys())]
with open(OUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f'\n완료: {len(results)}문제 → {OUT_JSON}')

missing = []
for q in results:
    for c in q['choices']:
        if not c['text'].strip() and 'image' not in c:
            missing.append((q['num'], c['letter']))
if missing:
    print(f'선택지 이미지 누락: {missing}')

img_files = [f for f in os.listdir(IMG_DIR) if f.startswith('q')]
print(f'추출된 이미지: {len(img_files)}개')
