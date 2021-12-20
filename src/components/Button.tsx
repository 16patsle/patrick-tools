import React, { type FunctionComponent } from 'react'

type ButtonProps = {
  /**
   * Callback on button click
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  /**
   * Is the button disabled
   */
  disabled?: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="w-full h-9 shadow-md active:shadow-lg active:shadow-yellow-500 bg-gray-50 active:bg-yellow-500 uppercase text-sm font-semibold text-gray-500 active:text-gray-50 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 active:border-yellow-500 border-2 rounded-md p-1 my-3"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
