import { ChangeEvent } from 'react'

/**
 * @callback RadioChangeCallback
 * @param {string} value - The new value
 * @param {ChangeEvent<HTMLInputElement>} event - The synthetic React event
 */

/**
 * @typedef {object} RadioProps
 * @property {any} children - Contents of the wrapper label
 * @property {string} name - The name of this radio group
 * @property {string} value - Value for the input element
 * @property {string} checkedValue - The current checked value for this radio group
 * @property {RadioChangeCallback} onChange - Callback when content changes
 * @property {string} [className] - Additional classes
 */

/**
 * A styled radio element, wrapped in a label
 * @param {RadioProps} props
 */
const Radio = ({ children, value, checkedValue, onChange, className = '' }) => {
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
