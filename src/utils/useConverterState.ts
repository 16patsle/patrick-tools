import { useCallback, type Dispatch, type SetStateAction } from 'react'
import { useDebouncedCallback } from './useDebounceCallback'
import { useNonFalseState } from './useNonFalseState'

export const useConverterState = <T>(
  initialState: T,
  callback: (value: T, ...args: any[]) => void
): [T, Dispatch<SetStateAction<T>>, (value: T, ...args: any[]) => void] => {
  const [value, setValue] = useNonFalseState(initialState)
  const debouncedCallback = useDebouncedCallback(callback)

  const setAndRecalculate = useCallback(
    (value: T, ...args) => {
      setValue(value)
      debouncedCallback(value, ...args)
    },
    [setValue]
  )

  return [value, setValue, setAndRecalculate]
}
