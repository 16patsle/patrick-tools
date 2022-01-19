import { ChangeEvent, ReactNode } from 'react'

type CheckboxProps = {
  /**
   * Contents of the wrapper label
   */
  children: ReactNode
  /**
   * Toggle state for the input element
   */
  checked: any
  /**
   * Callback when content changes
   */
  onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void
  /**
   * Additional classes
   */
  className?: string
}

/**
 * A styled checkbox element, wrapped in a label
 * @param props
 */
const Checkbox = ({
  children,
  checked,
  onChange,
  className = '',
}: CheckboxProps) => {
  return (
    <label className="label-grid radio-checkbox w-max h-9 grid my-2 gap-x-2 items-center">
      <div className="text-gray-500 uppercase text-sm font-semibold">
        {children}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange && (e => onChange(e.target.checked, e))}
        className={`w-6 h-6 shadow-md checked:shadow-yellow-500 bg-gray-50 hover:bg-gray-100 text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 focus:border-gray-200 border-2 rounded-md p-1${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}

export default Checkbox
