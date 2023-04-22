import { IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export function Searcher () {
  const styleTextField = {
    width: '90%',
    margin: '0 auto'
  }
  return (
    <Stack
      direction='row'
      sx={{
        width: '80%',
        marginTop: '20px'
      }}
    >
      <TextField
        id='outlined-basic'
        sx={styleTextField}
        type='search'
        label='Search'
        autoComplete='off'
        variant='outlined'
        placeholder='Search GitHub user'
        InputProps={{
          endAdornment: (
            <IconButton position='end'>
              <SearchIcon />
            </IconButton>
          )
        }}
      />
    </Stack>
  )
}
