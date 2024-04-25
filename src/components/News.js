import React, { useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    videoContainer1: {
        display: "flex",
        gap:"10px",
        justifyContent: "center",
        width:"80%",
        height: "auto",
        marginBottom: "6%",
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
            marginBottom: "13%",

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

function Video() {
    const [isHovered2, setIsHovered2] = useState(false);
   

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    
    const classes1 = useStyle();


    return (
        <Box>
        {/* <Typography display='flex' justifyContent='' >News</Typography> */}
            <div className={classes1.videoContainer1}>
                <div
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}>
                    {isHovered2 ? (<iframe
                        title="YouTube Video"
                        className={classes1.video1}
                        src="https://www.youtube.com/embed/tqC9rdkyD8s?autoplay=1&mute=1&controls=0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    ) : (
                        <iframe
                            title="YouTube Video"
                            className={classes1.video1}
                            src="https://www.youtube.com/embed/tqC9rdkyD8s?autoplay=&mute=1&controls=0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <Typography variant='h6' sx={{color:"#fff"}}>
                Our platform is governed by a decentralized network of smart contracts, ensuring fairness, integrity, and accountability in all interactions. By decentralizing decision-making and governance processes, smart contracts empower users to participate in shaping the future of our platform, fostering a sense of ownership, community, and collective responsibility
                </Typography>
                
            </div>
           
            {/* Your other content here */}
        </Box>
    );
}

export default Video;
