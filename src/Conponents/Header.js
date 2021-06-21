import React from 'react'
import { Typography, Divider, Toolbar, IconButton, Badge, makeStyles, Button, Grid } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
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
            
            <Button variant="contained" size="large">
              Our Services
            </Button>

            </Grid>
          
            

            
            
          



         
        </div>
    )
}

export default Header
