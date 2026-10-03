import { DopStudy } from '../clients'
import { awsDopC02QuestionsKo } from '@/lib/awsQuestions'

export default function AwsDopStudyPage() {
  return <DopStudy questions={awsDopC02QuestionsKo} />
}
