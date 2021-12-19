import { useRef, useEffect } from 'react'

// Based on https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
export default function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
