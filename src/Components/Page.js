import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

// useStyles Hooks //

const useStyles = makeStyles({
           
    realtext: {
        color: 'black',
        marginTop: 190,   
    },

    btn: {
        marginTop: 20,
    }

})
  

const Page = () => {

    const classes = useStyles()

// UseState text //    

    const [CurrentValue, UpdatedValue] = useState('Welcome to Blue Berry e-Services Pvt. Ltd.');

    const FunCall = () => {
    UpdatedValue('Network Support & Maintenance IT Support And Cloud Services & Data Management ');
    }


    return (

        
    <Container align="center">

        <Typography  className={classes.realtext}
        variant="h2">
        {CurrentValue}
        <Button className={classes.btn}
        variant="contained" 
        size="large" 
        color= "primary"
        onClick = {() => {FunCall()}}>
        Our Services
        </Button>
        </Typography>


    </Container>
            
        
    )
}

export default Page

