import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    videoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        width: '93%',
        height: "auto",
        boxShadow: "-20px -20px blue",
        borderRadius:"20px",
        marginTop:'52px',
        marginBottom:'55px',

        transform: "perspective(1000px) rotateY(20deg)",
        // marginTop: "8%",
        // marginBottom: "6%", 
        [theme.breakpoints.down('sm')]: {
            // height: '50vh',
            width:'100%'
        },
    },
    video: {
        width: '100%',
        height: "430px",
        background: 'black',
        border: "0px",
        boxShadow: "20px 20px  blue ",
        borderRadius: "10px",
        [theme.breakpoints.up('md')]: {
            width: '1200px',

        },
        [theme.breakpoints.down('md')]: {
            borderRadius: 0,
            height:'300px'

        },
    },
}));

function VideoW() {
    const [isHovered, setIsHovered] = useState(false);
 

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
   
    const classes = useStyles();
 


    return (
        <div>
            <div className={classes.videoContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isHovered ? (
                    <iframe
                        title="Google Drive Video"
                        className={classes.video}
                        src="https://player.vimeo.com/video/941166222?autoplay=1&controls=0&muted=0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>


                ) : (

                    <iframe
                        title="YouTube Video"
                        className={classes.video}
                        src="https://player.vimeo.com/video/941166222?autoplay=0&controls=0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>

                )}


            </div>








            {/* Your other content here */}
        </div>
    );
}

export default VideoW;
