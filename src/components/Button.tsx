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

type AnchorButtonProps = {
  /**
   * Output a element with href instead of button
   */
  href?: string
  /**
   * Callback on button click
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
  /**
   * Prompt for download on click
   */
  download?: boolean
}

const className = "w-full h-9 shadow-md active:shadow-lg active:shadow-yellow-500 bg-gray-50 active:bg-yellow-500 hover:bg-gray-100 uppercase text-sm text-center font-semibold text-gray-500 active:text-gray-50 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 active:border-yellow-500 border-2 rounded-md p-1 my-3"

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const AnchorButton: FunctionComponent<AnchorButtonProps> = ({
  children,
  href,
  onClick,
  download = false,
}) => {
  return (<a
    className={className}
    href={href}
    onClick={onClick}
    download={download}
  >
    {children}
  </a>)
}
