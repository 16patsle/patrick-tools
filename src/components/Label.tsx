import type { ReactNode } from 'react'

type LabelProps = {
  /**
   * Description of the label
   */
  text: ReactNode
  /**
   * Contents of the label
   */
  children: ReactNode
}

export const Label = ({ text, children }: LabelProps) => {
  return (
    <label className="label-grid my-2 grid items-center gap-x-2">
      <div className="col-span-1 text-sm font-semibold uppercase text-gray-500">
        {text}
      </div>
      {children}
    </label>
  )
}
