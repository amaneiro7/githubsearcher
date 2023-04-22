import { CardMedia, Grid } from '@mui/material'
import PrincipalInformation from './PrincipalInformation'
import Description from './Description'

const UserCard = ({ data }) => {
  const { name, avatar_url: avatarUrl } = data

  return (
    <Grid
      container
    >
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt={name}
          image={avatarUrl}
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation data={data} />
      </Grid>
      <Description data={data} />
    </Grid>

  )
}

export default UserCard
