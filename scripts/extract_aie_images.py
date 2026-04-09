"""
AIE PDF 이미지 추출 → public/images/aie-images/ + aie-questions.json 업데이트
"""
import fitz
import pdfplumber
import re
import json
import os
from collections import Counter

PDF_PATH = r'c:\project\exam-vce\pdf\Databricks-Generative-AI-Engineer-Associate V12.95.pdf'
JSON_PATH = r'c:\project\exam-vce\data\aie-questions.json'
OUT_DIR   = r'c:\project\exam-vce\public\images\aie-images'
HEADER_JUNK = r'IT Certification Guaranteed, The Easy Way!\s*'

os.makedirs(OUT_DIR, exist_ok=True)

# ── 1. 공유(장식용) xref 찾기 ──────────────────────────────────────────────────
doc = fitz.open(PDF_PATH)
xref_counter = Counter()
for page in doc:
    for img in page.get_images():
        xref_counter[img[0]] += 1
shared_xrefs = {xref for xref, cnt in xref_counter.items() if cnt > 1}

# ── 2. 페이지별 이미지 수집 ────────────────────────────────────────────────────
# 구조 파악 결과:
#  Page 19  → Q23  : 질문 이미지 1개 (에러 메시지)
#  Page 41  → Q49  : 질문 이미지 1개 (RAG 다이어그램)
#  Page 50  → Q59  : 질문 이미지 1개
#  Page 57  → Q68  : 질문 코드 이미지 1개
#  Page 58  → Q68  : 선택지 이미지 4개 (A,B,C,D)
#  Page 62  → Q73  : 질문 이미지 1개

QUESTION_IMG_PAGES  = {19: 23, 41: 49, 50: 59, 57: 68, 62: 73}   # page→qnum
CHOICE_IMG_PAGE     = 58   # Q68 선택지 이미지 페이지 (0-indexed: 57)
CHOICE_LETTERS      = ['A', 'B', 'C', 'D']

def extract_unique_images(page_idx):
    """0-indexed 페이지의 콘텐츠 이미지(비공유) 추출."""
    fitz_page = doc[page_idx]
    result = []
    for img in fitz_page.get_images():
        if img[0] not in shared_xrefs:
            base = doc.extract_image(img[0])
            result.append(base)
    return result

image_map = {}  # qnum → {'question_images': [...], 'choices': {letter: path}}

# 질문 이미지 페이지
for page_num, qnum in QUESTION_IMG_PAGES.items():
    imgs = extract_unique_images(page_num - 1)
    if not imgs:
        print(f'  경고: Page {page_num} Q{qnum} 이미지 없음')
        continue
    paths = []
    for i, img in enumerate(imgs):
        fname = f'q{qnum}_img{i}.{img["ext"]}'
        fpath = os.path.join(OUT_DIR, fname)
        with open(fpath, 'wb') as f:
            f.write(img['image'])
        web_path = f'/images/aie-images/{fname}'
        paths.append(web_path)
        print(f'  저장: {fname} ({img["width"]}x{img["height"]})')
    if qnum not in image_map:
        image_map[qnum] = {'question_images': [], 'choices': {}}
    image_map[qnum]['question_images'] = paths

# Q68 선택지 이미지
imgs = extract_unique_images(CHOICE_IMG_PAGE - 1)
if imgs:
    if 68 not in image_map:
        image_map[68] = {'question_images': [], 'choices': {}}
    for i, img in enumerate(imgs):
        letter = CHOICE_LETTERS[i] if i < len(CHOICE_LETTERS) else f'X{i}'
        fname = f'q68_choice_{letter.lower()}.{img["ext"]}'
        fpath = os.path.join(OUT_DIR, fname)
        with open(fpath, 'wb') as f:
            f.write(img['image'])
        image_map[68]['choices'][letter] = f'/images/aie-images/{fname}'
        print(f'  저장(선택지): {fname} ({img["width"]}x{img["height"]})')

# ── 3. aie-questions.json 업데이트 ────────────────────────────────────────────
with open(JSON_PATH, encoding='utf-8') as f:
    data = json.load(f)

for q in data:
    qnum = q['num']
    if qnum not in image_map:
        continue
    info = image_map[qnum]

    # 질문 이미지
    if info['question_images']:
        q['question_images'] = info['question_images']

    # 선택지 이미지 (choices가 이미지로 대체)
    if info['choices']:
        for choice in q['choices']:
            letter = choice['letter']
            if letter in info['choices']:
                choice['image'] = info['choices'][letter]
                choice['text'] = ''   # 이미지 선택지는 텍스트 비움

with open(JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f'\n완료! {len(image_map)}개 문제에 이미지 연결됨')
for qnum, info in sorted(image_map.items()):
    print(f'  Q{qnum}: q_imgs={len(info["question_images"])} choice_imgs={len(info["choices"])}')
