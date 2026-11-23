import * as React from 'react'
import { Link, Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  // The portfolio is a standalone page with its own navigation.
  if (pathname.startsWith('/portfolio')) return <Outlet />

  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/portfolio"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Portfolio
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}

