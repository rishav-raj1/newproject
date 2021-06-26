import React, { useState, useEffect } from 'react'
import { Container, Typography, Paper, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    menu: {
       
        display: "flex",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom:90,
    }
}))

const Api = () => {

    const classes = useStyles();

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
      const response = await fetch('https://restcountries.eu/rest/v2/name/nepal');
      setUsers(await response.json());

    }
  
    useEffect(() => {
          getUsers();
    }, []);


    return (
        <Container className={classes.menu}>

        </Container>
    )
}

export default Api
