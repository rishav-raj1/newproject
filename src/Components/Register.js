import React from 'react'
import { Container, Typography, Grid, TextField, Button, Paper, Radio } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles (() => ({

    main: {
        display: "flex",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 80,
        marginBottom: 90,

    },

    design: {
        padding: 40,
        margin: 20,
        height: '110vh',
        width: 320,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#90F982 ',
    },
    btn: {
        marginTop: 20,
        marginBottom: 40,
    },
    txt: {
        fontFamily: "Montserrat",
    },
  
}))

const Register = () => {
   
    const classes=useStyles();

    return (

        <Grid className={classes.main}>
        <Paper className={classes.design}>
            <Typography  className={classes.txt}
            component="h3"
            variant="h3"
             color="primary">
               REGISTER
            </Typography>
            
                <TextField 
                fullWidth
                placeholder="Enter Your First Name"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="First Name"
                type="text" />

               <TextField 
                fullWidth
                placeholder="Enter Your Last Name"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="Last Name"
                type="text" />        

                <TextField 
                fullWidth
                placeholder="Enter Your Email"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="Email"
                type="email" />

                <TextField 
                fullWidth
                placeholder="Enter Your Mobile Number"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="Mobile Number"
                type="number" />

                <TextField 
                fullWidth
                placeholder="Enter Your Password"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="Password"
                type="password"
                 />



                 <Button className={classes.btn}
                 type="submit"
                 color="primary"
                 variant="outlined"
                 variant="contained" 
                 size="large">
               
                 Submit

                 </Button>

                
           
        </Paper>
        </Grid>

    )
}

export default Register
