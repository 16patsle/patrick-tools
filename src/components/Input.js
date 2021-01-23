import React from 'react'

/**
 * @callback InputChangeCallback
 * @param {string} value - The new value
 * @param {React.ChangeEvent<HTMLInputElement>} event - The synthetic React event
 */

/**
 * @callback InputKeyPressCallback
 * @param {React.KeyboardEvent<HTMLInputElement>} event - The synthetic React event
 */

/**
 * @typedef {object} InputProps
 * @property {any} children - Contents of the wrapper label
 * @property {'text'|'number'} [type] - Input element type
 * @property {string} [pattern] - Pattern for input validation
 * @property {any} value - Value for the input element
 * @property {InputChangeCallback} onChange - Callback when content changes
 * @property {InputKeyPressCallback} [onKeyPress] - Callback for key press, for input filtering
 * @property {string} [className] - Additional classes
 */

/**
 * A styled input element, wrapped in a label
 * @param {InputProps} props
 */
const Input = ({
  children,
  type = 'text',
  pattern,
  value,
  onChange,
  onKeyPress,
  className = '',
}) => {
  return (
    <label className="block my-2">
      {children}
      <input
        type={type}
        pattern={pattern}
        value={value}
        onChange={onChange && (e => onChange(e.target.value, e))}
        onKeyPress={onKeyPress}
        className={`shadow-md bg-gray-50 border-gray-200 border-2 rounded-md mx-2 p-1${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}

export default Input
