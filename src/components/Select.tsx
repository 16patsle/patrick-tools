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
      className="rounded-md border-2 border-gray-200 bg-gray-50 caret-yellow-500 shadow-md hover:bg-gray-100 focus:border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
    >
      {children}
    </select>
  )
}
