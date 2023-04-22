import { searchUser } from '../service'
import { useCallback, useRef, useState } from 'react'

export function useGetUsers ({ search }) {
  const [data, setData] = useState([])
  const [defaultUser, setdefaultUser] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const gettingUser = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      let newData = await searchUser({ search })
      if (search === 'octocat') setdefaultUser(newData)
      if (newData.message === 'Not Found') {
        newData = defaultUser
      }
      setData(newData)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(true)
    }
  }, [])
  return { data, gettingUser, loading, error }
}
