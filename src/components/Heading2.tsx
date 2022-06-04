import type { ReactNode } from 'react'

export const Heading2 = ({ children }: { children?: ReactNode }) => (
  <h2 className="mt-2 mb-3 text-2xl text-gray-800">{children}</h2>
)
