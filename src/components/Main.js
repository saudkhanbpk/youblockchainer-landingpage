
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {

        marginTop: theme.spacing(8),
        display: 'flex',
        gap: '20px',
        height: '100vh',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
            height: 'auto',
            display: 'flex',
            gap:"20px",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },
        [theme.breakpoints.up('xl')]: {
            display: 'flex',
        gap: '15px',
        height: '100vh',
        width: '100%',
            // styles for large screens only
          }
    },
    video:{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        boxShadow: "15px 10px  blue ",

        border:"none",
        // transform: "scaleX(1.2)",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',

        },

    },
    videoContainer: {
     
    
      backgroundColor:'black',
      width:'80vh',
      height:'50vh',
      marginTop:'28px',
      [theme.breakpoints.up('md')]: {
        boxShadow: "-15px -15px  blue ",
        borderRadius: "20px",
      transform: "perspective(1000px) rotateY(25deg)",
      },
      

   [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
marginTop:'10px',


        },
    },
    text: {
        color: 'white',
        width: "32%",
        marginTop:'33px',
        fontSize:'18px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            marginTop:'30px',
            fontSize: '18px',
        },
      

    },
}));

const Main = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {/* <Typography className={classes.text}> */}
            {/* <p style={{ fontWeight: 'bold', fontSize: '50px', textAlign: 'center', }}>Welcome to MyReelDream</p> */}
            {/* </Typography> */}
            <Typography className={classes.text}>
                MyReelDream is your one-stop destination for all things creative.
                Whether you're a filmmaker, an artist, a designer, or a storyteller,
                our platform is designed to empower you to bring your dreams to fruition.
                Discover a world of endless possibilities as you connect with like-minded creators,
                access top-tier tools and resources, and unlock the secrets to success in your craft.
                From stunning visual effects to captivating narratives,
                MyReelDreem is here to help you unleash your full creative potential
            </Typography>
            <Box>
            <div className={classes.videoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <iframe
          title="Google Drive Video"
          className={classes.video}
          src="https://player.vimeo.com/video/942225468?autoplay=1&controls=0&muted=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>


        ) : (

          <iframe
            title="YouTube Video"
            className={classes.video}
            src="https://player.vimeo.com/video/942225468?autoplay=0&controls=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

        )}


      </div>
            </Box>
        </Container>
    );
}

export default Main;
