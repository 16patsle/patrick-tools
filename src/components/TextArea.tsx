import type { ChangeEvent, KeyboardEvent } from 'react'

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
  onChange: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void
  /**
   * Callback for key press, for input filtering
   */
  onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
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
    <label className="label-grid my-2 grid items-center gap-x-2">
      <div className="col-span-1 text-sm font-semibold uppercase text-gray-500">
        {children}
      </div>
      <textarea
        rows={10}
        value={value}
        onChange={onChange && (e => onChange(e.target.value, e))}
        onKeyPress={onKeyPress}
        className={`w-full rounded-md border-2 border-gray-200 bg-gray-50 caret-yellow-500 shadow-md hover:bg-gray-100 focus:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 p-2${
          className ? ` ${className}` : ''
        }`}
      ></textarea>
    </label>
  )
}

export default TextArea
