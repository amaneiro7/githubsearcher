import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export function Searcher ({ value, onClick, onChange }) {
  const styleTextField = {
    width: '90%',
    margin: '0 auto'
  }

  const styleStack = {
    width: '80%',
    marginTop: '20px'
  }

  return (
    <Stack
      direction='row'
      sx={styleStack}
    >
      <TextField
        id='outlined-basic'
        sx={styleTextField}
        type='search'
        label='Search'
        value={value}
        onChange={onChange}
        autoComplete='off'
        variant='outlined'
        placeholder='Search GitHub user'
        InputProps={{
          endAdornment: (
            <IconButton
              position='end'
              size='small'
              onClick={onClick}
            >
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack>
  )
}
