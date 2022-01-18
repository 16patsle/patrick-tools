import React, { type FunctionComponent } from 'react'

export const ErrorNotice: FunctionComponent = ({ children }) => {
  return (
    <div className="shadow-md shadow-red-300 bg-red-100 text-red-900 border-red-400 border-2 rounded-md p-2 my-3">
      {children}
    </div>
  )
}
