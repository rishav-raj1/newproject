import React from 'react'
import { Typography, Container, Card, Grid, Divider, Button, CardActions, CardContent, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import "../Components/CardItems.css"

const useStyles = makeStyles(() => ({

    Head: {
        
        paddingTop: 40,
        fontFamily: "Montserrat",
        marginBottom: 40,
  
      },

    main: {
        marginBottom: 200,
    },
    

    imgmain: {
        display: "flex",
        textAlign: 'center',
        justifyContent: 'center',
       

    },

    designcard: {
       textAlign: "center",
        backgroundColor: '#F8E677',
  
      },

      cardspc: {
        marginBottom:15,
        marginTop:12,
       },

}))

const CardItems = () => {
    const classes=useStyles();

    return (

        <Container className={classes.main}>
        <Typography className={classes.Head}
        variant="h3" align="center"> Our Services </Typography>
        <Grid container alignItems="center" justify="center" spacing={6}>
        <Grid item sm={3}>
         <Card className={classes.designcard} >
             <CardActionArea >
             <CardMedia className={classes.imgmain} 
             image="http://www.blueberryeservices.com/wp-content/uploads/2020/09/training.png" 
             
             style={{ width:50, height: 50 }}
             />
             <CardContent >
             <Typography variant="h5"> Network Support & Maintenance </Typography>
             <Divider className={classes.cardspc}   />
             <Typography variant="subtitle1">
             We can set up and maintain your business’s network, or help troubleshoot and maintain your existing network. 
             </Typography>
             </CardContent>
             </CardActionArea>
             
         </Card>
        </Grid>

        <Grid item sm={3}>
         <Card className={classes.designcard}>
             <CardActionArea>
             <CardMedia className={classes.designimg}
             image="http://www.blueberryeservices.com/wp-content/uploads/2020/09/interesting-puzzles.png" 
             style={{ width:50, height: 50 }}
             />

             <CardContent>
             <Typography variant="h5"> IT Support </Typography>
             <Divider className={classes.cardspc} />
             <Typography variant="subtitle1">
             We are available to consult with you or your staff when problems arise with your IT Infrastructure. This service can be either remote or on-site assistance. 
             </Typography>
             </CardContent>
             </CardActionArea>
            
         </Card>
        </Grid>

        <Grid item sm={3}>
         <Card className={classes.designcard}>
            <CardActionArea>
            <CardMedia className={classes.designimg}
             image="http://www.blueberryeservices.com/wp-content/uploads/2020/09/pro-material.png" 
             style={{ width:50, height: 50 }}
             />
            <CardContent>
             <Typography variant="h5"> Cloud Services & Data Management </Typography>
             <Divider className={classes.cardspc} />
             <Typography variant="subtitle1">
             We will work with you to establish the appropriate cloud size and available resources for your business. 
             </Typography>
             </CardContent>
            </CardActionArea>
         </Card>
        </Grid>


        </Grid>

        </Container>
    )
}

export default CardItems
