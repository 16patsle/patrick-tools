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
  onChange: (value: File | null, event: ChangeEvent<HTMLInputElement>) => void
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
    <label className="label-grid my-2 grid items-center gap-x-2">
      <div className="col-span-1 text-sm font-semibold uppercase text-gray-500">
        {children}
      </div>
      <input
        type="file"
        accept={accept}
        onChange={e => onChange(e.target.files?.[0] ?? null, e)}
        className={`-mx-1 h-auto w-full rounded-md p-1 text-sm font-semibold uppercase text-gray-500 file:h-9 file:rounded-md file:border-2 file:border-solid file:border-gray-200 file:bg-gray-50 file:py-1 file:px-2 file:font-semibold file:uppercase file:text-gray-500 file:shadow-md hover:file:bg-gray-100 focus:outline-none focus:file:ring-2 focus:file:ring-yellow-500 focus:file:ring-offset-2 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 active:file:border-yellow-500 active:file:bg-yellow-500 active:file:text-gray-50 active:file:shadow-lg active:file:shadow-yellow-500 file:mr-2${
          className ? ` ${className}` : ''
        }`}
      />
    </label>
  )
}
