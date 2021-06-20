import React from 'react'
import { Typography, Divider, Toolbar, IconButton, Badge, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
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
            <Typography variant="h6" className={classes.title}>
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

         
            <Typography variant="h3" align="center" color="inherit" gutterBottom>
              Blue Berry
            </Typography>

            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              We offer services and solutions that empower our customers to embrace technology to grow. 
            </Typography>
          



         
        </div>
    )
}

export default Header
