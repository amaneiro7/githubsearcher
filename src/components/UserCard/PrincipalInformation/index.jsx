import { Stack, Typography } from '@mui/material'

function PrincipalInformation ({ data }) {
  const { name, created_at: createAt, login } = data
  return (
    <>
      <Stack>
        <Typography>{name}</Typography>
        <Typography>{createAt}</Typography>
      </Stack>
      <Typography>{login}</Typography>
    </>
  )
}

export default PrincipalInformation
