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
    },
    paper: {
        padding: theme.spacing(3),
        width: '80%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.default,
      
    },
    text: {
        color: theme.palette.text.primary,
    },
}));

const Vision = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5" className={classes.text}>
                    Our Vision
                </Typography>
                <Typography variant="body1" className={classes.text}>
                    At MyReelDream, we envision a world where filmmaking is not just a profession, but a universal language that connects people, cultures, and ideas. We believe that everyone has a story to tell and deserves the opportunity to share it with the world. Our vision is to democratize the filmmaking process, making it accessible to aspiring talents, empowering movie professionals, and providing innovative solutions for corporations.
                </Typography>
            </Paper>
        </Container>
    );
}

export default Vision;
