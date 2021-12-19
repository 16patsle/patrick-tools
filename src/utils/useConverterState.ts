import { useCallback, type Dispatch, type SetStateAction } from 'react'
import { useDebouncedCallback } from './useDebounceCallback'
import { useNonFalseState } from './useNonFalseState'

export type UseConverterStateReturn<T> = [T, Dispatch<SetStateAction<T | false>>, (value: T, ...args: any[]) => void]

export const useConverterState = <T>(
  initialState: T,
  callback: (value: T, ...args: any[]) => void
): UseConverterStateReturn<T> => {
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
