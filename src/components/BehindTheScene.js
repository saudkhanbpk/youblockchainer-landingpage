import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        textAlign: "justify",
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
    paper: {
        padding: theme.spacing(3),
        width: '70%',
        height: 'screen',
        boxShadow: "none",
        background: 'transparent',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
            width: "100%",
            padding: "10px",
           


        },
    },
    text: {
        color: theme.palette.text.primary,
        color: 'white',
    },
}));

const BehindTheScene = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={3}>
                    <strong className='strong' style={{ color: 'white', fontSize: '40px', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                        Behind The Scene
                    </strong>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>YouTube Channels of Filmmakers</span>
                    </Typography>
                    <Typography  style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Many filmmakers share behind-the-scenes content, tutorials, and vlogs documenting their filmmaking process on YouTube. Some examples include<br />
                        StudioBinder's YouTube Channel <a style={{ color: 'white', marginTop: '10px', }} href='https://www.youtube.com/user/studiobinder '> Read More </a>
                        <br />
                        - DSLRguide's YouTube Channel<a style={{ color: 'white', padding: '5px', marginTop: '10px', }} href='https://www.youtube.com/user/DSLRguide '>Read More</a>
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                            Instagram Accounts of Filmmakers
                        </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Filmmakers often share behind-the-scenes photos, videos, and stories on their Instagram accounts, offering a glimpse into the creative process. Examples include<br />
                        <Typography>@ryan_connolly (Ryan Connolly): [Ryan Connolly's Instagram] <a style={{ color: 'white', padding: '5px', marginTop: '10px', }} href='https://www.instagram.com/ryan_connolly/)'>Read More</a></Typography>
                        <Typography>@indiefilmhustle (Alex Ferrari): [Alex Ferrari's Instagram] <a style={{ color: 'white', padding: '5px', marginTop: '10px', }} href='https://www.instagram.com/indiefilmhustle/)'>Read More</a></Typography>
                    </Typography >
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                            Film School Websites and Blogs
                        </span>
                    </Typography>
                    <Typography style={{ marginTop: '6px', padding: '10px',  letterSpacing: '1px', }} variant="body1" className={classes.text}>LocationsHub Many film schools and educational institutions publish behind-the-scenes content, case studies, and student projects on their websites and blogs. Examples include <br />New York Film Academy's Blog<a style={{ color: 'white', padding: '5px', marginTop: '10px', }} href='https://www.nyfa.edu/student-resources/blog/'>Read More</a> </Typography>
                    <Typography className={classes.text}>
                        USC School of Cinematic Arts' Newsroom<a style={{ color: 'white', padding: '5px', marginTop: '10px', }} href='https://cinema.usc.edu/news'>Read More</a>
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                            Information about Exotic Filming Locations Available
                        </span>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px', letterSpacing: '2px', paddingTop: '20px', }}>1.LocationsHub</span>
                    </Typography>
                    <Typography style={{ marginTop: '6px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>LocationsHub is a platform that provides access to a wide range of filming locations worldwide, including exotic and picturesque settings suitable for various types of productions<a style={{ color: 'white', padding: '5px', marginTop: '10px', }} href='https://www.locationshub.com/'>Read More</a></Typography>
                    <Typography variant="body1" className={classes.text}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px', letterSpacing: '2px', marginTop: '10px', }}>2.The Location Guide </span>
                    </Typography>
                    <Typography style={{ marginTop: '6px', padding: '10px', letterSpacing: '1px',  }} variant="body1" className={classes.text}>The Location Guide offers a comprehensive directory of filming locations and production services around the world, including exotic destinations and unique settings for filmmakers.<a style={{ color: 'white', padding: '5px', marginTop: '10px', }} href='https://www.thelocationguide.com/'>Read More</a></Typography>
                    <Typography variant="body1" className={classes.text}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px', letterSpacing: '2px', marginTop: '15px', }}>3.Film Commission Read Mores</span>
                    </Typography>
                    <Typography style={{ marginTop: '6px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>Many film commissions and tourism boards provide information about filming locations in their respective regions, highlighting exotic landscapes, historical sites, and cultural landmarks <span>Malta Film Commission</span> <a style={{ color: 'white', marginTop: '5px', }} href='https://www.maltafilmcommission.com/)'>Read More</a></Typography>
                </Paper>
            </Container>
        </>

    );
}

export default BehindTheScene;
