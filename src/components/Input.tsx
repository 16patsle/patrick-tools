import type { ChangeEvent, KeyboardEvent, ReactNode } from 'react'
import { Label } from './Label'

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
    <Label text={children}>
      <input
        type={type}
        pattern={pattern}
        min={min}
        value={value}
        onChange={onChange && (e => onChange(e.target.value, e))}
        onKeyPress={onKeyPress}
        className={`h-9 w-full rounded-md border-2 border-gray-200 bg-gray-50 caret-yellow-500 shadow-md hover:bg-gray-100 focus:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 p-2${
          className ? ` ${className}` : ''
        }`}
        disabled={disabled}
      />
    </Label>
  )
}

export default Input
