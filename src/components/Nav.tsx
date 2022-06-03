import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({
  children,
  href,
  external,
}: {
  children?: ReactNode
  href: string
  external?: boolean
}) => {
  const className =
    'active:shadow-lg active:shadow-yellow-500 active:bg-yellow-500 hover:bg-gray-100 uppercase text-center font-semibold text-gray-500 active:text-gray-50 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-transparent hover:border-gray-200 active:border-yellow-500 border-2 rounded-md p-1 px-2'
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
  <nav className="flex flex-col justify-between flex-wrap font-semibold text-l border-gray-200 border-b-2 pl-2 pb-1 gap-1">
    <ul className="flex gap-2">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/all">All tools</NavLink>
      <NavLink href="https://patricksletvold.com" external>
        My website
      </NavLink>
    </ul>
    <ul className="flex gap-2">
      <span className="uppercase text-center font-semibold text-gray-400 border-transparent border-2 rounded-md p-1 px-2">
        Units:
      </span>
      <NavLink href="/units/weight">Weight</NavLink>
      <NavLink href="/units/length">Length</NavLink>
      <NavLink href="/units/temperature">Temperature</NavLink>
      <NavLink href="/units/angle">Angle</NavLink>
    </ul>
  </nav>
)
