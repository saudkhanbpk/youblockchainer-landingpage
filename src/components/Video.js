import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  videoContainer: {
    display:"flex",
    justifySelf:"center",

    width: '100%',
    paddingTop:'8.25%', // 16:9 aspect ratio (height: width)
  },
  video: {
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
        height:"auto"
    },
    width: '100%',
    height:"100%", 
  },
});

function Video() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.videoContainer}>
        <video className={classes.video} controls autoPlay muted >
          <source src="https://drive.google.com/file/d/1V8U16dKCuBBGJEHBOw1QikHU7Ukrmx1G/view?usp=drivesdk" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Your other content here */}
    </div>
  );
}

export default Video;
