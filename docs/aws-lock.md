# AWS 영역 비밀번호 잠금

`/aws` 하위 페이지는 비밀번호를 아는 사람만 볼 수 있습니다. 비밀번호 값은 코드나 문서에 적지 않고 환경변수 `AWS_ACCESS_PASSWORD` 로만 관리합니다.

## 동작 방식

```
브라우저 ──▶ proxy.ts ──(쿠키 OK)──▶ /aws/... 페이지
               │
               └─(쿠키 없음/틀림)──▶ 307 /aws/login?next=<원래 경로>
                                          │ 비밀번호 제출 (Server Action)
                                          ▼
                                   맞으면 쿠키 발급 후 next 로 303 이동
```

- **proxy.ts** (Next 16 에서 `middleware` 가 `proxy` 로 이름이 바뀜): matcher `/aws`, `/aws/:path*`. `/aws/login` 만 통과시키고 나머지는 쿠키를 검사합니다. 페이지 HTML뿐 아니라 클라이언트 내비게이션용 RSC 요청도 같은 경로라 함께 막힙니다.
- **쿠키** `aws_unlock`: 비밀번호 자체가 아니라 `HMAC-SHA256(key=비밀번호, "exam-vce:aws-unlock")` 값입니다. `httpOnly`, `sameSite=lax`, 프로덕션에서 `secure`, 유효기간 1년.
- **비밀번호 변경 = 전체 로그아웃**: 비밀번호가 바뀌면 HMAC 값이 달라지므로 기존 쿠키는 모두 무효가 됩니다.
- **로그인** (`app/aws/login/actions.ts`): 틀리면 0.8초 지연 후 에러 메시지. 로그인 후 이동할 `next` 는 `/aws` 하위 경로만 허용합니다 (외부 URL·제어문자 차단, `lib/awsAuth.ts` 의 `safeAwsNext`).
- **다시 잠그기**: `/aws` 화면 우측 상단 버튼 → 쿠키 삭제 후 `/` 로 이동.
- 환경변수가 없으면 아무도 들어갈 수 없고, 로그인 화면에 "환경변수가 설정되지 않았습니다"가 표시됩니다.

## 문제 데이터를 서버에서만 다루는 이유

`'use client'` 페이지에서 JSON 을 import 하면 문제 데이터가 `/_next/static/chunks/*.js` 에 들어갑니다. 정적 파일은 proxy 잠금과 상관없이 누구나 받을 수 있습니다.

그래서 AWS 페이지는 다음처럼 나눕니다.

- `app/aws/dop/{study,test,wrong}/page.tsx`: **서버 컴포넌트**. `lib/awsQuestions.ts`(`import 'server-only'`)에서 데이터를 읽어 props 로 넘김
- `app/aws/dop/clients.tsx`: `'use client'`. 공용 `StudyClient` 등에 `awsDopStorage` 와 링크만 연결

빌드 결과 `.next/static` 에 AWS 문제 문장이 없는 것을 확인했습니다. 새 AWS 과목도 같은 패턴을 따라야 합니다.

> ⚠️ **GitHub 저장소가 public 이면 이 잠금은 사이트에만 적용됩니다.** `data/aws-dop-c02-q-ko.json` 은 저장소에서 바로 받을 수 있습니다. 데이터까지 숨기려면 저장소를 private 으로 바꾸세요 (Vercel 자동 배포는 private 저장소에서도 그대로 동작합니다).

## 구글 로그인과의 관계

둘은 서로 독립적입니다.

| | 비밀번호 | 구글 로그인 |
| --- | --- | --- |
| 역할 | `/aws` 접근 허용 | 학습 기록·오답노트를 Supabase 에 저장/동기화 |
| 범위 | 기기(브라우저)별 1회, 1년 유지 | 전체 사이트 |

AWS 페이지에서도 상단 바의 구글 로그인을 쓸 수 있습니다. 로그인 후 보던 페이지로 돌아오려면 Supabase → Authentication → URL Configuration → Redirect URLs 에 운영 도메인(`https://vce.sapie.ai/**`, `https://exam-vce.vercel.app/**`)이 등록되어 있어야 합니다. 없으면 Site URL(홈)로 돌아옵니다.

## 비밀번호 바꾸기

1. 로컬: `.env.local` 의 `AWS_ACCESS_PASSWORD` 수정 후 dev 서버 재시작
2. Vercel: 기존 값 삭제 후 다시 추가하고 재배포 ([deploy.md](deploy.md#환경변수))
3. 모든 기기에서 새 비밀번호를 다시 입력해야 합니다.
