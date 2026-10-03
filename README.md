# Exam VCE

Databricks · AWS 자격증 시험 문제를 VCE처럼 웹에서 풀 수 있는 학습 도구입니다.

- 운영: https://vce.sapie.ai (= https://exam-vce.vercel.app)
- 첫 화면에서 플랫폼(Databricks / AWS)을 고르고, 과목을 선택합니다.
- **AWS 영역은 비밀번호로 잠겨 있습니다.** → [docs/aws-lock.md](docs/aws-lock.md)

## 주요 기능

- **학습 모드** — 문제별로 정답과 해설을 바로 확인 (선택만 해도 푼 문제로 기록)
- **시험 모드** — 타이머와 함께 실전처럼 풀고 VCE 스타일 성적표 확인
- **오답 노트** — 틀린 문제만 모아서 다시 풀기
- **구글 로그인** — 학습 기록/오답노트를 Supabase에 저장해 기기 간 동기화

## 과목

| 플랫폼 | 과목 | 경로 | 데이터 | 문제 수 |
| --- | --- | --- | --- | --- |
| Databricks | DE Associate v15.65 (한/영) | `/de-new` | `de-v1565-q-ko.json`, `de-v1565-q-en.json` | 227 (한) / 228 (영) |
| Databricks | DE Associate v14.95 | `/de` | `de-v1495-q-ko.json` | 156 |
| Databricks | GenAI Associate v12.95 (한/영) | `/aie` | `genai-v1295-q-ko.json`, `genai-v1295-q-en.json` | 75 |
| Databricks | GenAI Associate v12.65 | `/genai` | `genai-v1265-q-ko.json` | 63 |
| Databricks | DE Professional v12.65 | `/dep` | `dep-v1265-q-en.json` | 250 |
| AWS 🔒 | DevOps Engineer Professional (DOP-C02) | `/aws/dop` | `aws-dop-c02-q-ko.json` | 505 |

## 시작하기

```bash
npm install
npm run dev
```

`.env.local` 에 아래 값이 필요합니다 (git 에 올라가지 않음).

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
AWS_ACCESS_PASSWORD=...   # AWS 영역 비밀번호
```

환경변수는 서버 시작 시에만 읽으므로 바꾼 뒤에는 dev 서버를 재시작하세요.

## 프로젝트 구조

```
app/
  page.tsx            # 플랫폼 선택 (Databricks / AWS)
  databricks/         # Databricks 과목 목록
  de, de-new, aie, genai, dep, ...   # Databricks 과목별 홈/학습/시험/오답/결과
  aws/
    page.tsx          # AWS 과목 목록 (+ 다시 잠그기)
    login/            # 비밀번호 입력 페이지 + Server Action
    dop/              # DOP-C02 홈/학습/시험/오답/결과
components/           # StudyClient, TestClient, WrongClient, ResultsClient, QuestionCard 등 공용 UI
lib/
  questions.ts        # Databricks 문제 데이터 (클라이언트 import 가능)
  awsQuestions.ts     # AWS 문제 데이터 (server-only)
  awsAuth.ts          # AWS 잠금 토큰 생성/검증
  storage.ts          # 과목별 localStorage + Supabase 저장
proxy.ts              # /aws 하위 접근 제어 (Next 16 의 middleware)
data/                 # 문제 JSON
scripts/              # PDF → JSON 변환 스크립트
```

## 새 시험 추가하기

1. `pdf/` 에 원본 PDF를 넣는다 (`pdf/` 는 git 에 올라가지 않음).
2. `scripts/` 에 파서를 만들어 `data/<과목>-q-<언어>.json` 생성.
   형식은 `lib/questions.ts` 의 `Question` 타입 (`num`, `question`, `choices`, `correct_list`, `explanation`, `question_images`).
   예: `python scripts/parse_dop.py` ([변환 기록](docs/aws-dop-c02.md))
3. `lib/storage.ts` 에 `createSubjectStorage('<prefix>')` 추가, 기기 간 동기화가 필요하면 `lib/dbStorage.ts` 의 `syncDbToLocal` subjects 에도 추가.
4. 페이지 추가
   - Databricks(공개): `app/<과목>/` 에 기존 과목 폴더를 복사해 수정, `app/databricks/page.tsx` 에 카드 추가.
   - AWS(잠금): `app/aws/<과목>/` 에 `app/aws/dop/` 구조를 복사. **문제 데이터는 서버 컴포넌트에서만 import** 하고 props 로 넘길 것 ([이유](docs/aws-lock.md#문제-데이터를-서버에서만-다루는-이유)). `app/aws/page.tsx` 에 카드 추가.
5. 필요하면 `components/ThemeProvider.tsx` 의 Nav 에 과목 메뉴 추가.

## 배포

GitHub `main` 에 push 하면 Vercel 이 자동으로 프로덕션 배포합니다. 자세한 내용은 [docs/deploy.md](docs/deploy.md).

## 기술 스택

- Next.js 16 (App Router, `proxy.ts`)
- TypeScript, Tailwind CSS v4
- Supabase (Google OAuth, 학습 기록 저장)
- Vercel
