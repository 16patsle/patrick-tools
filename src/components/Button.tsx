import type { MouseEvent, ReactNode } from 'react'

type ButtonProps = {
  children?: ReactNode
  /**
   * Callback on button click
   */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  /**
   * Is the button disabled
   */
  disabled?: boolean
}

type AnchorButtonProps = {
  children?: ReactNode
  /**
   * Output a element with href instead of button
   */
  href?: string
  /**
   * Callback on button click
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  /**
   * Prompt for download on click
   */
  download?: boolean
}

const className =
  'my-3 h-9 w-full rounded-md border-2 border-gray-200 bg-gray-50 p-1 text-center text-sm font-semibold uppercase text-gray-500 shadow-md hover:bg-gray-100 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 active:border-yellow-500 active:bg-yellow-500 active:text-gray-50 active:shadow-lg active:shadow-yellow-500 disabled:bg-gray-100 disabled:text-gray-400'

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export const AnchorButton = ({
  children,
  href,
  onClick,
  download = false,
}: AnchorButtonProps) => {
  return (
    <a className={className} href={href} onClick={onClick} download={download}>
      {children}
    </a>
  )
}
