import LoginForm from './LoginForm'
import { safeAwsNext } from '@/lib/awsAuth'

export default async function AwsLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  const { next } = await searchParams
  return <LoginForm next={safeAwsNext(next)} />
}
