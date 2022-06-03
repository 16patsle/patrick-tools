import type { ReactNode } from 'react'
import { Link, useMatch } from 'react-router-dom'

const NavLink = ({
  children,
  href,
  external,
}: {
  children?: ReactNode
  href: string
  external?: boolean
}) => {
  const match = useMatch(href)
  const className =
    'rounded-md border-2 border-transparent p-1 px-2 text-center font-semibold uppercase text-gray-500 hover:border-gray-200 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 active:border-yellow-500 active:bg-yellow-500 active:text-gray-50 active:shadow-lg active:shadow-yellow-500' +
    (match ? ' border-b-gray-200 font-bold text-gray-600' : '')

  return external ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    <Link className={className} to={href}>
      {children}
    </Link>
  )
}

export const Nav = () => (
  <nav className="text-l flex flex-col flex-wrap justify-between gap-1 border-b-2 border-gray-200 pl-2 pb-1 font-semibold">
    <ul className="flex gap-2">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/all">All tools</NavLink>
      <NavLink href="https://patricksletvold.com" external>
        My website
      </NavLink>
    </ul>
    <ul className="flex gap-2">
      <span className="rounded-md border-2 border-transparent p-1 px-2 text-center font-semibold uppercase text-gray-400">
        Units:
      </span>
      <NavLink href="/units/weight">Weight</NavLink>
      <NavLink href="/units/length">Length</NavLink>
      <NavLink href="/units/temperature">Temperature</NavLink>
      <NavLink href="/units/angle">Angle</NavLink>
    </ul>
  </nav>
)
