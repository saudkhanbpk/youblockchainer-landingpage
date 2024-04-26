import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: "100vh",
    // marginTop: "8%",
    // marginBottom: "6%", 
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
    },
  },
  video: {
    width: '100%',

    height: "100%",

    border: "0px",
    [theme.breakpoints.up('md')]: {
      width: '1200px',

    },
    [theme.breakpoints.down('md')]: {
      borderRadius: 0

    },
  },
}));
const useStyle = makeStyles((theme) => ({
  videoContainer1: {
    display: "flex",
    justifyContent: "center",
    height: "auto",
    marginBottom: "6%",
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
      marginBottom: "13%"
    },
  },
  video1: {
    width: '100%',

    height: "400px",

    border: "0px",
    [theme.breakpoints.up('md')]: {
      width: '600px',

    },
    [theme.breakpoints.down('md')]: {
      borderRadius: 0

    },
  },
}));
const useStyle1 = makeStyles((theme) => ({
  videoContainer2: {
    display: "flex",
    // flexWrap:"wrap",
    justifyContent: "center",
    gap: "10px",
    height: "auto",
    marginBottom: "6%",
    [theme.breakpoints.down('sm')]: {
      height: '50vh',
      marginBottom: "13%"
    },
  },
  video2: {
    width: '100%',

    height: "400px",

    border: "0px",
    [theme.breakpoints.up('md')]: {
      width: '390px',

    },
    [theme.breakpoints.down('md')]: {
      borderRadius: 0

    },
  },
}));

function Video() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };
  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };
  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };
  const classes = useStyles();
  const classes1 = useStyle();
  const classes2 = useStyle1();


  return (
    <div>
      <div className={classes.videoContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <iframe
            title="YouTube Video"
            className={classes.video}
            src="https://www.youtube.com/embed/5a09yJU-mCI?autoplay=1&mute=1&controls=0&showinfo=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (

          <iframe
            title="YouTube Video"
            className={classes.video}
            src="https://www.youtube.com/embed/5a09yJU-mCI?autoplay=&mute=1&controls=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}


      </div>
      <div className={classes1.videoContainer1}>
        <div
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}>
          {isHovered2 ? (<iframe
            title="YouTube Video"
            className={classes1.video1}
            src="https://www.youtube.com/embed/atHBOUvgBI8?autoplay=1&mute=1&controls=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          ) : (
            <iframe
              title="YouTube Video"
              className={classes1.video1}
              src="https://www.youtube.com/embed/atHBOUvgBI8?autoplay=&mute=1&controls=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}>

          {isHovered3 ? (<iframe
            title="YouTube Video"
            className={classes1.video1}
            src="https://www.youtube.com/embed/hfnDTvbtDUI?autoplay=1&mute=1&controls=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          ) : (
            <iframe
              title="YouTube Video"
              className={classes1.video1}
              src="https://www.youtube.com/embed/hfnDTvbtDUI?autoplay=&mute=1&controls=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>

      </div>
      <div className={classes2.videoContainer2}>
        <div
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}>

          {isHovered4 ? (
          <iframe
            title="YouTube Video"
            className={classes2.video2}
            src="https://www.youtube.com/embed/3eGP6im8AZA?autoplay=1&mute=1&controls=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          ) : (
            <iframe
              title="YouTube Video"
              className={classes2.video2}
              src="https://www.youtube.com/embed/3eGP6im8AZA?autoplay=&mute=1&controls=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div
          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}>

          {isHovered5 ? (<iframe
            title="YouTube Video"
            className={classes2.video2}
            src="https://www.youtube.com/embed/9q76fyfGs6o?autoplay=1&mute=1&controls=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          ) : (
            <iframe
              title="YouTube Video"
              className={classes2.video2}
              src="https://www.youtube.com/embed/9q76fyfGs6o?autoplay=&mute=1&controls=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div
          onMouseEnter={handleMouseEnter6}
          onMouseLeave={handleMouseLeave6}>

          {isHovered6 ? (<iframe
            title="YouTube Video"
            className={classes2.video2}
            src="https://www.youtube.com/embed/gcIv4hGDZeE?autoplay=1&mute=1&controls=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          ) : (
            <iframe
              title="YouTube Video"
              className={classes2.video2}
              src="https://www.youtube.com/embed/gcIv4hGDZeE?autoplay=&mute=1&controls=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>

      </div>
      {/* Your other content here */}
    </div>
  );
} 

export default Video;
