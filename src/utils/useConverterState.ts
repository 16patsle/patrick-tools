import { useCallback } from "react"
import { useDebouncedCallback } from "./useDebounceCallback"
import { useNonFalseState } from "./useNonFalseState"

export const useConverterState = (initialState, callback) => {
  const [value, setValue] = useNonFalseState(initialState)
  const debouncedCallback = useDebouncedCallback(callback)

  const setAndRecalculate = useCallback((value, ...args) => {
    setValue(value)
    debouncedCallback(value, ...args)
  }, [setValue])

  return [value, setValue, setAndRecalculate]
}
