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
    <label className="label-grid radio-checkbox my-2 grid h-9 w-max items-center gap-x-2">
      <div className="text-sm font-semibold uppercase text-gray-500">
        {children}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange && (e => onChange(e.target.checked, e))}
        className={`h-6 w-6 rounded-md border-2 border-gray-200 bg-gray-50 text-yellow-500 shadow-md checked:shadow-yellow-500 hover:bg-gray-100 focus:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 p-1${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}

export default Checkbox
