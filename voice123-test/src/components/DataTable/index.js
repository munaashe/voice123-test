import React from 'react'
import Card from '@mui/material/Card'
import { Grid, Box } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { selectedProfile } from '../../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    selectProfile: (profile) => dispatch(selectedProfile(profile))
  }
}


const DataTable = (props) => {
  const voiceActors = useSelector((state) => state.voiceActors)

  const renderList = voiceActors.voiceActors.map((voiceActor) => {
    return (
      <div key={voiceActor.id} onClick={() => {props.selectProfile(voiceActor)}}>
        <Link to={`/${voiceActor.user.username}`} style={{ textDecoration: 'none' }} target='_blank'>
          <Box display="flex" justifyContent="flex-end">
            <Grid item lg={12} key={voiceActor.id} flex='1' sx={{ padding: '8px', width: '800px', textAlign: 'center' }}>
              <Card sx={{ backgroundColor: '#fff' }}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"

                >
                  <Grid item lg={2} md={2} sm={12} xs={12}>
                    <CardMedia
                      component="img"
                      image={voiceActor.user.picture_large}
                      alt={voiceActor.user.name}
                      height="120px"
                      sx={{ maxWidth: '200px', padding: '8px' }}
                    />
                  </Grid>
                  <Grid item lg={3} md={3} sm={12} xs={12}>
                    <Typography variant="h6">
                      {voiceActor.user.name}
                    </Typography>
                    <Typography variant="subtitle2">
                      {voiceActor.locations.full_name}
                    </Typography>
                  </Grid>
                  <Grid item lg={5} md={5} sm={12} xs={12}>
                    <Typography variant="subtitle2">
                      {voiceActor.headline}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Box>
        </Link>
      </div>
    )
  })

  return (
    <Grid container display='flex' flexDirection='column' spacing={3} justifyContent='center' alignItems='center' sx={{ padding: '8px' }}>
      {voiceActors.voiceActors.length > 1 ?
        <Typography variant='subtitle1' sx={{ color: '#808080', paddingTop: '16px' }}>Search Results</Typography>
        : null}
      {renderList}

    </Grid>
  )
}


export default connect(null, mapDispatchToProps)(DataTable);

