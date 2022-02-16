import type { ChangeEvent, KeyboardEvent, ReactNode } from 'react'

type InputProps = {
  /**
   * Contents of the wrapper label
   */
  children: ReactNode
  /**
   * Input element type
   */
  type?: 'text' | 'number'
  /**
   * Pattern for input validation
   */
  pattern?: string
  /**
   * Minimum value allowed for number inputs
   */
  min?: string | number
  /**
   * Value for the input element
   */
  value: any
  /**
   * Callback when content changes
   */
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
  /**
   * Callback for key press, for input filtering
   */
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
  /**
   * Additional classes
   */
  className?: string
  /**
   * Disabled input
   */
  disabled?: boolean
}

/**
 * A styled input element, wrapped in a label
 * @param props
 */
const Input = ({
  children,
  type = 'text',
  pattern,
  min,
  value,
  onChange,
  onKeyPress,
  className = '',
  disabled = false,
}: InputProps) => {
  return (
    <label className="label-grid grid my-2 gap-x-2 items-center">
      <div className="col-span-1 text-gray-500 uppercase text-sm font-semibold">
        {children}
      </div>
      <input
        type={type}
        pattern={pattern}
        min={min}
        value={value}
        onChange={onChange && (e => onChange(e.target.value, e))}
        onKeyPress={onKeyPress}
        className={`w-full h-9 shadow-md bg-gray-50 hover:bg-gray-100 caret-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 focus:border-gray-200 border-2 rounded-md p-2${
          className ? ` ${className}` : ''
        }`}
        disabled={disabled}
      />
    </label>
  )
}

export default Input
