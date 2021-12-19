import { useCallback } from 'react'
import debounce from 'lodash.debounce'

export const useDebouncedCallback = (callback: (...args: any[]) => any) =>
  useCallback(debounce(callback, 200), [])
