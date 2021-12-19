import { useCallback } from 'react'
import debounce from 'lodash.debounce'

export const useDebouncedCallback = callback =>
  useCallback(debounce(callback, 200), [])
