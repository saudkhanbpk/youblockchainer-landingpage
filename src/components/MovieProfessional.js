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
                   
        },





    },
    text: {
        color: 'white',
        width: "70%",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            fontSize: '18px',
           
        },

    },
}));

const MovieProfessional = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography className={classes.text}>
                <p style={{ fontWeight: 'bold', fontSize: '40px', textAlign: 'center', }}>Movie Professional</p>
            </Typography>
            <Typography style={{letterSpacing: '1px',}} className={classes.text}>
                Optimize Production Cycles
                Streamline your movie production business with significant efficiency gains.
                Rapid Content Creation Effortlessly produce full-length scripts, storyboards, and trailers at unprecedented speed.
                Expert Script Enhancement Elevate your scripts with skilled human scriptwriters at cost-effective rates.
                Stay on Trend Craft scripts seamlessly blending the latest trends and proven successes.
                Global Collaboration: Connect with industry professionals worldwide, fostering collaboration at reduced expenses.
                Risk Mitigation Implement smart-contract and blockchain technologies to mitigate litigation

            </Typography>
        </Container>
    );
}

export default MovieProfessional;
