import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  console.log(confirmed, recovered, deaths)
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infectados
            </Typography>
            <Typography variant='h5'>{confirmed}</Typography>
            <Typography color='textSecondary'>Real data</Typography>
            <Typography variant='body2'>Number of active</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>{recovered}</Typography>
            <Typography color='textSecondary'>Real data</Typography>
            <Typography variant='body2'>Number of recvories</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>{deaths}</Typography>
            <Typography color='textSecondary'>Real data</Typography>
            <Typography variant='body2'>Number of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
