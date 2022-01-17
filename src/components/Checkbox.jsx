import React from 'react'

/**
 * @callback CheckboxChangeCallback
 * @param {boolean} checked - The new checked state
 * @param {React.ChangeEvent<HTMLInputElement>} event - The synthetic React event
 */

/**
 * @typedef {object} CheckboxProps
 * @property {any} children - Contents of the wrapper label
 * @property {any} checked - Toggle state for the input element
 * @property {CheckboxChangeCallback} onChange - Callback when content changes
 * @property {string} [className] - Additional classes
 */

/**
 * A styled checkbox element, wrapped in a label
 * @param {CheckboxProps} props
 */
const Checkbox = ({ children, checked, onChange, className = '' }) => {
  return (
    <label
      className="label-grid radio-checkbox w-max h-9 grid my-2 gap-x-2 items-center"
    >
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
