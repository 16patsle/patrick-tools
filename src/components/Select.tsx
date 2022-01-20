import type { ChangeEvent, ReactNode } from 'react'

type SelectProps = {
  /**
   * Contents of the wrapper label
   */
  children: ReactNode
  /**
   * Value for the select element
   */
  value: any
  /**
   * Callback when content changes
   */
  onChange: (value: string, event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({ children, value, onChange }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={onChange && (e => onChange(e.target.value, e))}
      className="shadow-md bg-gray-50 hover:bg-gray-100 caret-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 focus:border-gray-200 border-2 rounded-md"
    >
      {children}
    </select>
  )
}
