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
           height:'auto',
           display:'flex',
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
           
        },

    },
}));

const MovieProfessional = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h5" className={classes.text}>
                <p style={{ fontWeight: 'bold', fontSize: '40px', textAlign: 'center', }}>Movie Professional</p>
                Showcase testimonials or success stories from industry experts who have used the platform to optimize their production cycles.
    Emphasize features such as streamlined workflows, collaboration opportunities, and access to cutting-edge technologies.

            </Typography>
        </Container>
    );
}

export default MovieProfessional;
