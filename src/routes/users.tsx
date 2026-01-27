import { createFileRoute } from '@tanstack/react-router'
import { User } from '../components/Users'

export const Route = createFileRoute('/users')({
  component: User,
})


