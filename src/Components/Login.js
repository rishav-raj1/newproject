import React from 'react'
import { Container, Typography, Grid, TextField, Button, Paper, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles (() => ({

    main: {
        display: "flex",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40,

    },

    design: {
        padding: 40,
        margin: 20,
        height: '70vh',
        width: 280,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#90F982 ',
    },
    btn: {
        marginTop: 20,
        marginBottom: 40,
    },
  
}))

const Login = () => {
   
    const classes=useStyles();

    return (

        <Grid className={classes.main}>
        <Paper className={classes.design}>
            <Typography 
            component="h3"
            variant="h2"
             color="primary">
               LOGIN
            </Typography>
            
                <TextField 
                fullWidth
                placeholder="Enter Your UserName"
                margin="normal"
                variant="outlined"
                color="secondary"
                label="UserName"
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

export default Login
