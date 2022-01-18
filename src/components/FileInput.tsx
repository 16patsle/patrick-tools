import type { ChangeEvent, ReactNode } from 'react'

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
  onChange: (
    value: File | null,
    event: ChangeEvent<HTMLInputElement>
  ) => void
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
        className={`w-full h-auto file:h-9 file:shadow-md active:file:shadow-lg active:file:shadow-yellow-500 file:bg-gray-50 active:file:bg-yellow-500 hover:file:bg-gray-100 uppercase file:uppercase text-sm font-semibold file:font-semibold text-gray-500 file:text-gray-500 active:file:text-gray-50 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus:file:ring-2 focus:file:ring-yellow-500 focus:file:ring-offset-2 focus:outline-none file:border-gray-200 active:file:border-yellow-500 file:border-solid file:border-2 rounded-md file:rounded-md p-1 file:py-1 file:px-2 -mx-1 file:mr-2${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}
