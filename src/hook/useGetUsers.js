import { searchUser } from '../service'
import { useCallback, useRef, useState } from 'react'

export function useGetUsers ({ search }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const gettingUser = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newData = await searchUser({ search })
      setData(newData)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(true)
    }
  }, [])
  return { data, gettingUser, loading, error }
}
