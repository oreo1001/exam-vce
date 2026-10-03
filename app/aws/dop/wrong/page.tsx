import { DopWrong } from '../clients'
import { awsDopC02QuestionsKo } from '@/lib/awsQuestions'

export default function AwsDopWrongPage() {
  return <DopWrong questions={awsDopC02QuestionsKo} />
}
