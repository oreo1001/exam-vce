import { DopTest } from '../clients'
import { awsDopC02QuestionsKo } from '@/lib/awsQuestions'

export default function AwsDopTestPage() {
  return <DopTest questions={awsDopC02QuestionsKo} />
}
