import { makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  videoContainer: {
    display:"flex",
    justifyContent:"center",
    width: '100%',
    height:"100%",
    marginTop: "8%",
    marginBottom:"50%" // 16:9 aspect ratio (height: width)
  },
  video: {
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
        height:"auto"
    },
    width: '100vw',
    height:"100%", 
  },
}));

function Video() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.videoContainer}>
        <video className={classes.video} controls autoPlay muted >
          <source src="https://www.youtube.com/results?search_query=phatan+trailer" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Your other content here */}
    </div>
  );
} 

export default Video;
