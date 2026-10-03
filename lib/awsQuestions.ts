// AWS 문제 데이터 — 서버 컴포넌트(app/aws/**/page.tsx)에서만 import 할 것.
// 클라이언트 번들(/_next/static)에 들어가면 proxy 잠금과 무관하게 누구나 받을 수 있으므로
// 서버에서 props 로만 넘긴다 (RSC 응답은 proxy 를 거친다).
import 'server-only'
import type { Question } from './questions'
import awsDopC02DataKo from '@/data/aws-dop-c02-q-ko.json'

export const awsDopC02QuestionsKo: Question[] = awsDopC02DataKo as Question[]
