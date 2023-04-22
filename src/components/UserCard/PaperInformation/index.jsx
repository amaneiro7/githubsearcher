import { Paper, Stack, Typography } from '@mui/material'

function PaperInformation ({ data }) {
  const { public_repos: publicRepos, followers, following } = data
  return (
    <Paper elevation={3}>
      <Stack>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{publicRepos}</Typography>
        </Stack>
        <Stack>
          <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>

      </Stack>
    </Paper>
  )
}

export default PaperInformation
