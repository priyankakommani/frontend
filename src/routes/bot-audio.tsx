import { createFileRoute } from '@tanstack/react-router'
import InterviewBot from '../components/bot'


export const Route = createFileRoute('/bot-audio')({
  component: InterviewBot,
})


