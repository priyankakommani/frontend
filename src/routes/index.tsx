import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Portfolio from '../components/portfolio'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="w-full h-full">
      <Portfolio />
    </div>
  )
}
