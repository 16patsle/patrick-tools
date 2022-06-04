import { useCallback } from 'react'
import debounce from 'just-debounce-it'

export const useDebouncedCallback = (callback: (...args: any[]) => any) =>
  useCallback(debounce(callback, 200), [])
