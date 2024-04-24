import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    width: '100%',
    height:"100vh",
    marginTop: "8%",
    marginBottom: "6%", 
    [theme.breakpoints.down('sm')]: {
      height: '50vh', 
    },
  },
  video: {
    width: '100%', 
   
    height: "100%",
    borderRadius:"40px",
    [theme.breakpoints.up('md')]: {
      width: '1100px',
  
    },
    [theme.breakpoints.down('md')]: {
      borderRadius:0
  
    },
  },
}));

function Video() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.videoContainer}>
      <iframe
  title="YouTube Video"
  className={classes.video}
  src="https://www.youtube.com/embed/vqu4z34wENw?autoplay=1&mute=1"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>

      </div>
      {/* Your other content here */}
    </div>
  );
}

export default Video;
