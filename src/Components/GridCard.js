import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'

const GridCard = () => {
    return (
        <Grid item xs={12} container spacing={10}>
        <Grid item lg={3} sm={6} xs={12}> <Typography variant="h2" > Block 1 </Typography> </Grid>
        <Grid item lg={3} sm={6} xs={12}> <Typography variant="h2" > Block 2 </Typography> </Grid>
        <Grid item lg={3} sm={6} xs={12}> <Typography variant="h2" > Block 3 </Typography> </Grid>
        <Grid item lg={3} sm={6} xs={12}> <Typography variant="h2" > Block 4 </Typography> </Grid>
            
        </Grid>
    )
}

export default GridCard
