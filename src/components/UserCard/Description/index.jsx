import { Stack, Typography } from '@mui/material'
import PaperInformation from '../PaperInformation'
import LocationInformation from '../LocationInformation'

function Description ({ data }) {
  const { bio } = data
  return (
    <>
      <Stack>
        <Typography>
          {bio || 'Lorem'}
        </Typography>
      </Stack>
      <PaperInformation data={data} />
      <LocationInformation data={data} />
    </>
  )
}

export default Description
