import { createFileRoute } from '@tanstack/react-router'
import Portfolio from '../components/portfolio'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})


