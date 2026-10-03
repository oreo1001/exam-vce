# 배포 (Vercel)

| 항목 | 값 |
| --- | --- |
| Vercel 프로젝트 | `oreo1001s-projects/exam-vce` |
| 운영 도메인 | https://vce.sapie.ai, https://exam-vce.vercel.app |
| 저장소 | https://github.com/oreo1001/exam-vce (`main`) |

## 자동 배포

GitHub 연동이 되어 있어서 `main` 에 push 하면 Vercel 이 자동으로 빌드하고 프로덕션에 배포합니다 (빌드 약 50초). 커밋을 연달아 push 하면 중간 커밋은 건너뛰고 최신 커밋만 배포될 수 있습니다.

배포 상태 확인:

- Vercel 대시보드 → Deployments
- 또는 GitHub 커밋 옆 체크 표시 (Vercel 상태)
- CLI: `npx vercel ls --prod`

## 환경변수

| 이름 | 환경 | 설명 |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Development, Preview, Production | Supabase 프로젝트 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Development, Preview, Production | Supabase anon key |
| `AWS_ACCESS_PASSWORD` | Production (Sensitive) | AWS 영역 비밀번호 ([aws-lock.md](aws-lock.md)) |

`AWS_ACCESS_PASSWORD` 는 Production 에만 있으므로 **Preview 배포(PR/브랜치)에서는 AWS 영역에 들어갈 수 없습니다.** 필요하면 Preview 에도 추가하세요.

환경변수는 **추가·수정 후 재배포해야 적용**됩니다.

### CLI 로 관리하기

```bash
npx vercel login                       # 최초 1회 (브라우저 승인)
npx vercel link --yes --project exam-vce --scope oreo1001s-projects   # 최초 1회
npx vercel env ls                      # 목록
npx vercel env rm AWS_ACCESS_PASSWORD production
printf '새비밀번호' | npx vercel env add AWS_ACCESS_PASSWORD production --sensitive
```

`printf` 를 쓰는 이유: `echo` 는 끝에 줄바꿈을 붙여서 비밀번호에 개행이 섞입니다.

`vercel link` 는 `.vercel/` 폴더를 만들고 `.env.local` 끝에 `VERCEL_OIDC_TOKEN` 을 추가합니다. 둘 다 `.gitignore` 대상이라 커밋되지 않습니다.

### 재배포

코드 변경 없이 환경변수만 바꿨다면:

```bash
npx vercel ls --prod                   # 최신 프로덕션 배포 URL 확인
npx vercel redeploy <배포 URL> --target production
```

또는 대시보드 → Deployments → 최신 배포 `⋯` → Redeploy.

## 배포 후 점검

- `/` 플랫폼 선택 화면이 뜨는지
- `/aws/dop` 접속 시 `/aws/login` 으로 이동하는지
- 비밀번호 입력 후 DOP 학습 화면이 열리는지
- 로그인 화면에 "환경변수가 설정되지 않았습니다"가 뜨면 `AWS_ACCESS_PASSWORD` 누락 또는 재배포 안 됨
