
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            //    fontSize:"20px"       
        },





    },
    text: {
        color: 'white',
        width: "70%",
        fontSize:'25px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            fontSize: '18px',
        },

    },
}));

const Main = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.text}>
                <p style={{ fontWeight: 'bold', fontSize: '50px', textAlign: 'center', }}>Welcome to MyReelDream</p>
            </Typography>
            <Typography  className={classes.text}>
            MyReelDream is your one-stop destination for all things creative. 
        Whether you're a filmmaker, an artist, a designer, or a storyteller, 
        our platform is designed to empower you to bring your dreams to fruition.
        Discover a world of endless possibilities as you connect with like-minded creators, 
        access top-tier tools and resources, and unlock the secrets to success in your craft.
         From stunning visual effects to captivating narratives,
         MyReelDreem is here to help you unleash your full creative potential
            </Typography>
        </Container>
    );
}

export default Main;
