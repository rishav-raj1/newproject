import React, { useState, useEffect } from 'react'
import { Container, Typography, Button, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

// useStyles Hooks //

const useStyles = makeStyles(() => ({
    
    menu: {
       
        display: "flex",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom:20,
    },
    realtext: {
        color: 'black',
        marginTop: 190,   
    },
  
      btn: {
        marginTop: 20,
        marginBottom: 200,
    },

}));

const Hooks = () => {

    const classes=useStyles();

    // UseState text //    

    const [CurrentValue, UpdatedValue] = useState('Bittu Kumar');

    const FunCall = () => {
    UpdatedValue('Rishav Kumar');
    }

    return (
        
        <Container className={classes.menu}>
           <Typography  className={classes.realtext}
             variant="h2">
              {CurrentValue}
          <Container>
          <Button className={classes.btn}
             variant="contained" 
             size="large" 
             color= "primary"
              onClick = {() => FunCall()}>
               Update
          </Button>
          </Container>
         </Typography>

        </Container> 
    )
}

export default Hooks
