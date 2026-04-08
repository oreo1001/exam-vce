# Databricks Exam VCE

Databricks 시험 문제를 VCE처럼 웹에서 풀 수 있는 학습 도구입니다.

## 주요 기능

- **시험 모드** — 실제 시험처럼 타이머와 함께 문제 풀기
- **학습 모드** — 문제별로 정답과 해설을 바로 확인하며 공부
- **오답 노트** — 틀린 문제만 모아서 다시 풀기
- **결과 분석** — 시험 후 점수 및 정답률 확인

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 프로젝트 구조

```
app/
  page.tsx        # 홈 (시험 시작)
  test/           # 시험 모드
  study/          # 학습 모드
  results/        # 결과 화면
  wrong/          # 오답 노트
components/
  QuestionCard    # 문제 카드 컴포넌트
  Timer           # 타이머
  ThemeProvider   # 다크/라이트 모드
data/
  questions.json  # 문제 데이터
```

## 기술 스택

- Next.js (App Router)
- TypeScript
- Tailwind CSS
