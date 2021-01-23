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
    <label
      className="grid my-2 gap-x-2 items-center"
      style={{ gridTemplateColumns: '6.5rem minmax(0, 1fr)' }}
    >
      <div className="col-span-1 text-gray-500 uppercase text-sm font-semibold">
        {children}
      </div>
      <input
          type={type}
          pattern={pattern}
          value={value}
          onChange={onChange && (e => onChange(e.target.value, e))}
          onKeyPress={onKeyPress}
          className={`w-full h-9 shadow-md bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 focus:border-gray-200 border-2 rounded-md p-1${
            className ? ` ${className}` : ''
          }`}
        />
    </label>
  )
}

export default Input
