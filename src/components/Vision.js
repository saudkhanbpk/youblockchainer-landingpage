// import React from 'react'

// const Vision = () => {
//   return (
//     <>

//     <section>

//         <p>
//         <p>**Our Vision**</p>	
// At MyReelDream, we envision a world where filmmaking is not just a profession, but a universal language that connects people, cultures, and ideas. We believe that everyone has a story to tell and deserves the opportunity to share it with the world. Our vision is to democratize the filmmaking process, making it accessible to aspiring talents, empowering movie professionals, and providing innovative solutions for corporations.

//         </p>
//     </section>
//     </>
//   )
// }

// export default Vision
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: 'screen',
        margin: "auto",
    },
    paper: {
        padding: theme.spacing(3),
        width: '90%',
        background: 'transparent',


    },
    text: {
        color: theme.palette.text.primary,
        color: 'white',
        

    },
}));

const Vision = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Paper className={classes.paper} elevation={3}>
                <strong className='strong' style={{color: 'white', fontSize: '40px',}}>
                    Our Vision 
                </strong>
                <Typography variant="body1" className={classes.text}>
                    Our vision at myreeldream.ai is to create a vibrant and inclusive ecosystem where creativity knows no bounds. We envision a future where anyone with a story to tell can easily transform their ideas into captivating visual experiences, regardless of financial constraints or technical expertise. By fostering collaboration, providing access to resources, and offering unparalleled opportunities for exploration and expression, we aspire to inspire a new generation of filmmakers and revolutionize the way stories are shared and experienced around the globe.
                </Typography>
            </Paper>
        </Container>
    );
}

export default Vision;
