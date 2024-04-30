import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        textAlign: "justify",
        height: 'screen',
        padding: '20px',
        textAlign: 'justify',
    },
    paper: {
        padding: theme.spacing(3),
        width: '70%',
        height: 'screen',
        boxShadow: "none",
        background: 'transparent',
        letterSpacing: '2px',

    },
    text: {
        color: theme.palette.text.primary,
        color: 'white',
        letterSpacing: '2px',



    },
}));

const Aspiring = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={3}>
                    <strong className='strong' style={{ color: 'white', fontSize: '40px', display: 'flex', marginBottom: '10px', justifyContent: 'center', }}>
                        Tips For Aspiring Actors
                    </strong>
                    <Typography variant="h5" className={`${classes.text} actortext`}>
                        <strong>Actors' Equity Association</strong> 
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        Actors' Equity Association provides resources and tips for aspiring actors, including information on training programs, union membership, and career development opportunities.
                    </Typography>
                    <Typography variant="h5" className={`${classes.text} actortext`}>
                        <strong style={{ display: 'flex', justifyContent: 'center', }}> Backstage Resources </strong>
                    </Typography>
                    <Typography variant="body1" className={`${classes.text} actortext`}>
                        Backstage offers a wealth of resources and articles for aspiring actors, covering topics such as audition tips, resume building, and finding representation.
                    </Typography>
                    <Typography variant="h5" className={`${classes.text} actortext`}>
                        <strong style={{ display: 'flex', justifyContent: 'center', }}>Casting Frontier Blog</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        Casting Frontier's blog features tips and advice for actors on honing their craft, building their brand, and navigating the industry as aspiring professionals.
                    </Typography>
                </Paper>
            </Container>
        </>

    );
}

export default Aspiring;
