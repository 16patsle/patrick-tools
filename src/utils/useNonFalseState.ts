import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'

export const useNonFalseState = <T>(
  initialState: T
): [T, Dispatch<SetStateAction<T | false>>] => {
  const [value, setValue] = useState(initialState)
  const newSetValue = useCallback(
    value => {
      if (value !== false) {
        setValue(value)
      }
    },
    [setValue]
  )

  return [value, newSetValue]
}
