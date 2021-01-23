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
const Checkbox = ({
  children,
  checked,
  onChange,
  className = '',
}) => {
  return (
    <label className="block my-2">
      {children}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange && (e => onChange(e.target.checked, e))}
        className={`shadow-md bg-gray-50 border-gray-200 border-2 rounded-md mx-2 p-1${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}

export default Checkbox
