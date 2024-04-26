import React, { useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    news: {
        color: "white",
        marginBottom:"30px",
        display:"flex",
        gap:"10px",
        fontSize:"20px"
        

    },
    empty: {
    border:"1px solid gray",
    height:"0px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    marginTop:"35px"

    },
    text: {
        width:"45%",
        fontFamily:"mono",
        fontSize:"20px",
        marginTop:'-28px',
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
            width:"100%"
        
        },
    },
    videoContainer1: {
        display: "flex",
        flexWrap:"wrap",
        gap: "20px",
        justifyContent: "center",
        // width: "100%",
        color: "white",
        // height: "auto",
        marginBottom: "3%",
        [theme.breakpoints.down('sm')]: {
        
        marginBottom: "0"
        },
    },
    video1: {
    width:"530px",
        border: "0px",
        height:"320px",
        [theme.breakpoints.down('md')]: {
            borderRadius: 0,
            width: '100%',
            

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
            <div className={classes1.news}>
                <p   >News</p>
                <div className={classes1.empty}></div>

            </div>
            <div className={classes1.videoContainer1}>
                <div
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}>
                    {isHovered2 ? (<iframe
                        title="YouTube Video"
                        className={classes1.video1}
                        src="https://www.youtube.com/embed/n53ZxxwJxA0?autoplay=1&mute=1&controls=0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    ) : (
                        <iframe
                            title="YouTube Video"
                            className={classes1.video1}
                            src="https://www.youtube.com/embed/n53ZxxwJxA0?autoplay=&mute=1&controls=0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className={classes1.text}>
                    <h2>
                        CHINE'S SUBMARINE GAME CHANGER
                    </h2>
                <h4 >
                    Our platform is governed by a decentralized network of smart contracts, ensuring fairness, integrity, and accountability in all interactions. By decentralizing decision-making and governance processes, smart contracts empower users to participate in shaping the future of our platform, fostering a sense of ownership, community, and collective responsibility.
                </h4>
                </div>
              

            </div>

            {/* Your other content here */}
        </Box>
    );
}

export default Video;
