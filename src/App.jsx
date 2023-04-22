import './App.css'
import { useCallback, useEffect } from 'react'
import { Container } from '@mui/material'
import { Searcher } from './components/Searcher'
import { useSearch } from './hook/useSearch'
import { useGetUsers } from './hook/useGetUsers'
import debounce from 'just-debounce-it'

function App () {
  const { search, updateSearch, error } = useSearch()
  const { data, gettingUser, loading } = useGetUsers({ search })

  const debounceGetGitHubUsers = useCallback(
    debounce(search => {
      console.log('search', search)
      gettingUser({ search })
    }, 300)
    , [gettingUser]
  )
  const handleClick = () => gettingUser({ search })
  const handleChange = ({ target: { value } }) => {
    updateSearch(value)
    debounceGetGitHubUsers(value)
  }
  useEffect(() => {
    gettingUser({ search: 'octocat' })
  }, [])

  const styleContainer = {
    background: 'whitesmoke',
    width: '80vw',
    height: '500px',
    borderRadius: '16px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <Container sx={styleContainer}>
      <Searcher value={search} onChange={handleChange} onClick={handleClick} error={error} />
    </Container>
  )
}

export default App
