import React from 'react'

type TextAreaProps = {
  /**
   * Contents of the wrapper label
   */
  children: any
  /**
   * Value for the input element
   */
  value: any
  /**
   * Callback when content changes
   */
  onChange: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  /**
   * Callback for key press, for input filtering
   */
  onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  /**
   * Additional classes
   */
  className?: string
}

/**
 * A styled input element, wrapped in a label
 * @param {TextAreaProps} props
 */
const TextArea = ({
  children,
  value,
  onChange,
  onKeyPress,
  className = '',
}: TextAreaProps) => {
  return (
    <label className="label-grid grid my-2 gap-x-2 items-center">
      <div className="col-span-1 text-gray-500 uppercase text-sm font-semibold">
        {children}
      </div>
      <textarea
        rows={10}
        value={value}
        onChange={onChange && (e => onChange(e.target.value, e))}
        onKeyPress={onKeyPress}
        className={`w-full shadow-md bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 focus:border-gray-200 border-2 rounded-md p-1${
          className ? ` ${className}` : ''
        }`}
      ></textarea>
    </label>
  )
}

export default TextArea
