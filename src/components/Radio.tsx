import { ChangeEvent, ReactNode } from 'react'

type RadioProps = {
  /**
   * Contents of the wrapper label
   */
  children: ReactNode
  /**
   * The name of this radio group
   */
  name: string
  /**
   * Value for the input element
   */
  value: any
  /**
   * The current checked value for this radio group
   */
  checkedValue: string
  /**
   * Callback when content changes
   */
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void
  /**
   * Additional classes
   */
  className?: string
}

/**
 * A styled radio element, wrapped in a label
 * @param props
 */
const Radio = ({
  children,
  value,
  checkedValue,
  onChange,
  className = '',
}: RadioProps) => {
  return (
    <label className="label-grid radio-checkbox my-2 grid h-9 w-max items-center gap-x-2">
      <div className="text-sm font-semibold uppercase text-gray-500">
        {children}
      </div>
      <input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={onChange && (e => onChange(e.target.value, e))}
        className={`h-6 w-6 rounded-full border-2 border-gray-200 bg-gray-50 text-yellow-500 shadow-md checked:shadow-yellow-500 hover:bg-gray-100 focus:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 p-1${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}

export default Radio
