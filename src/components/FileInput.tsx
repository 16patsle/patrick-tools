import React, { type ReactNode } from 'react'

type FileInputProps = {
  /**
   * Contents of the wrapper label
   */
  children: ReactNode
  /**
   * File type(s) to accept
   */
  accept: string
  /**
   * Callback when content changes
   */
  onChange: (value: File | null, event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Additional classes
   */
  className?: string
}

export const FileInput = ({
  children,
  accept,
  onChange,
  className = '',
}: FileInputProps) => {
  return (
    <label className="label-grid grid my-2 gap-x-2 items-center">
      <div className="col-span-1 text-gray-500 uppercase text-sm font-semibold">
        {children}
      </div>
      <input
        type="file"
        accept={accept}
        onChange={e => onChange(e.target.files?.[0] ?? null, e)}
        className={`w-full h-9 shadow-md bg-gray-50 caret-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 border-gray-200 focus:border-gray-200 border-2 rounded-md p-2${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}
