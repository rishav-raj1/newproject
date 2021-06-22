import React from 'react'
import { Container, Typography } from '@material-ui/core'

const Rishav = () => {
  return (
    <Container>
      <Typography>
        rishav
      </Typography>
    </Container>
  )
}

export default Rishav


  






//   All Codes ///








{/*import React, { useState } from 'react'
import { Typography, Divider, Toolbar, IconButton, Badge, makeStyles, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
    realtext: {
      color: 'black',
      marginTop: 190,   
  },

    btn: {
      marginTop: 20,
  }


}));

const Rishav = () => {

    const classes=useStyles();

    // UseState text //    

    const [CurrentValue, UpdatedValue] = useState('Welcome to Blue Berry e-Services Pvt. Ltd.');

    const FunCall = () => {
    UpdatedValue('Network Support & Maintenance IT Support And Cloud Services & Data Management ');
    }

    return (
        <div>
          <Toolbar >
          <IconButton color="inherit">
              <MenuIcon />
          </IconButton>
            <Typography className={classes.title}>
            Blue Berry
          </Typography>
          <IconButton color="inherit">
              <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
              <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
          </Badge>
          </IconButton>
          </Toolbar>
          <Divider />


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
          
     
         
        </div>
    )
}

export default Rishav
*/}



///// header  //////////
{/*

import React from 'react'
import { Typography, Divider, Toolbar, IconButton, Badge, makeStyles, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
    tagline: { 
      fontFamily: "Montserrat",
      marginTop: 150,
    },


}));

const Header = () => {

    const classes=useStyles();

    return (
        <div>
          <Toolbar >
          <IconButton color="inherit">
              <MenuIcon />
          </IconButton>
            <Typography className={classes.title}>
            Blue Berry
          </Typography>
          <IconButton color="inherit">
              <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
              <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
          </Badge>
          </IconButton>
          </Toolbar>
          <Divider />

            <Typography className={classes.tagline} >
            <Typography variant="h3" align="center" color="inherit" gutterBottom>
             Welcome to Blue Berry e-Services Pvt. Ltd.
            </Typography>

            <Typography variant="h6" align="center" color="textPrimary" paragraph>
              We offer services and solutions that empower our customers to embrace technology to grow. 
            </Typography>
            </Typography>
            

            <Grid container direction="column" alignItems="center" justify="center">

            <Button variant="contained" size="large" color="primary">
              Our Services
            </Button>

            </Grid>
          
            

            
            
          



         
        </div>
    )
}

export default Header
*/}















{/*import React from 'react'
import { Typography, AppBar, Button, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'



const Rishav = () => {
  return(
    <div>
      

      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Blue Berry
          </Typography>
        </Toolbar>
      </AppBar>
    
    <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Blue Berry
            </Typography>

            <Typography variant="h5" align="center" color="textPrimary" paragraph>
            We offer services and solutions that empower our customers to embrace technology to grow. 
            </Typography>

            <div>
              <Grid container spacing={1} justify="center">
               <Grid item>
                <Button variant="contained" color="primary">
                 see my pic  
                </Button>
               </Grid>
               <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
               </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    </main>
    </div>
  )
}

export default Rishav*/}


