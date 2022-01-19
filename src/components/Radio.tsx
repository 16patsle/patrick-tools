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
    <label className="label-grid radio-checkbox w-max h-9 grid my-2 gap-x-2 items-center">
      <div className="text-gray-500 uppercase text-sm font-semibold">
        {children}
      </div>
      <input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={onChange && (e => onChange(e.target.value, e))}
        className={`w-6 h-6 shadow-md checked:shadow-yellow-500 bg-gray-50 hover:bg-gray-100 text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 focus:border-gray-200 border-2 rounded-full p-1${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}

export default Radio
