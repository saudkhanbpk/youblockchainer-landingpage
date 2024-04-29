import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
        

    },
    text: {
        color: 'white',
        maxWidth: "90%",
        
    },
}));

const OurMissions = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h5" className={classes.text}>
                <p style={{fontWeight: 'bold', fontSize: '40px', }}>Mission Statement</p>
                At myreeldream.ai, we are driven by a singular mission: to democratize the filmmaking process. We believe in empowering individuals from all walks of life, whether seasoned professionals or aspiring amateurs, to unleash their creative potential and bring their cinematic visions to life. By harnessing the power of cutting-edge technologies such as artificial intelligence, text-to-video, and smart contracts, we aim to revolutionize the entertainment industry and redefine the way films are conceived, produced, and showcased.
            </Typography>
        </Container>
    );
}

export default OurMissions;
