import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'

function LocationInformation ({ data }) {
  const { location, twitter_username: twitterUsername, blog, company } = data
  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          <Typography>{twitterUsername ? `@${twitterUsername}` : 'Not Available'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          <Typography>{blog}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          <Typography>{company || 'Not Available'}</Typography>
        </Stack>
      </Grid>
    </Grid>

  )
}

export default LocationInformation
