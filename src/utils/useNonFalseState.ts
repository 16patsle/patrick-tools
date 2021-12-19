import { useCallback, useState } from "react"

export const useNonFalseState = (initialState) => {
  const [value, setValue] = useState(initialState)
  const newSetValue = useCallback((value) => {
    if (value !== false) {
      setValue(value)
    }
  }, [setValue])

  return [value, newSetValue]
}
