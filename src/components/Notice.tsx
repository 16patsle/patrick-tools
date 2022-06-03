import type { FunctionComponent } from 'react'

export const ErrorNotice: FunctionComponent = ({ children }) => {
  return (
    <div className="my-3 rounded-md border-2 border-red-400 bg-red-100 p-2 text-red-900 shadow-md shadow-red-300">
      {children}
    </div>
  )
}
