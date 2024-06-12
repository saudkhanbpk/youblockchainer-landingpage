
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {

        marginTop: theme.spacing(10),
        // display: 'flex',
        gap: '15px',
        height: 'auto',
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
            height: 'auto',
            display: 'flex',
            gap: "20px",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        },
        [theme.breakpoints.up('xl')]: {
            display: 'flex',
            justifyContent: 'start',
            gap: '15px',
            height: '100vh',
            width: '100%',
            // styles for large screens only
        }
    },
    video: {
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        border: "none",
        boxShadow: "20px 20px blue ",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',

        },

    },
    videoContainer: {


        backgroundColor: 'black',
        width: '100vh',
        height: '60vh',
        marginTop: '28px',
        [theme.breakpoints.up('md')]: {
          
            boxShadow: "-20px -20px blue ",
            borderRadius: "20px",
            transform: "perspective(1000px) rotateY(25deg)",
        },


        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            marginTop: '10px',


        },
    },
    text: {
        color: 'white',
        width: "70%",
        marginTop:'100px',
        textAlign:"center",
        fontSize: '18px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            marginTop: '30px',
            fontSize: '18px',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '20px',
            // styles for large screens 
        }

    },
}));

const Modalpage = () => {
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
            <Typography className={classes.text}>
            Consider incorporating interactive elements
                      such as sliders or tabs that users can click through to learn
                      more about each target audience. - Utilize clear call-to-action
                      buttons or links that direct users to specific sections or
                      sign-up forms based on their interests. - Incorporate visually
                      appealing graphics or icons to represent each target audience,
                      making it easy for users to identify which category they belong
                      to. - Implement a user-friendly navigation menu that allows
                      visitors to easily access information relevant to their needs,
                      whether they're aspiring talents, movie professionals, or
                      corporations. - Provide options for users to subscribe to
                      newsletters or updates tailored to their specific interests,
                      ensuring they stay informed about relevant opportunities and
                      developments within the myreeldream.ai community. - Introduction
                      to myreeldream.ai Have you ever pondered the possibilities of
                      combining artificial intelligence, text-to-video technologies,
                      and smart contracts? Welcome to the future of filmmaking with
                      myreeldream.ai ! Imagine a platform that empowers anyone,
                      whether you're bursting with ideas or starting from scratch, to
                      become a filmmaker. That's what myreeldream.ai does. Reflecting
                      on the dynamic evolution of the entertainment industry. we find
                      parallels with shifts in film and music. In the past two
                      decades, from Napster and iTunes to YouTube and now streaming
                      giants like Netflix, new business models have emerged. Today, a
                      creative Youtuber can reach or even surpass the audience of a
                      traditional TV broadcaster with just a few Clicks. While
                      producing movies or series traditionally demands substantial
                      investments. Al, Text-to-Video, and web three technologies
                      converge on myreeldream, enabling you to be your own movie
                      producer effortlessly, and at a very low cost. In just a few
                      clicks, it generates a one-minute pitch, a synopsis, a
                      full-length script with a storyboard, and even a trailer. It's
                      like having a personal assistant, but this assistant is powered
                      by cutting-edge AI technology and available 24/7. But that's not
                      all. Myreeldream.ai is more than just a tool; it's a community.
                      Here, you can connect with movie professionals who can provide
                      valuable insights to improve your script and compose your
                      soundtrack for instance. Smart contracts enable you to settle
                      agreements with third parties in a few clicks, securely and
                      transparently by recording them on a blockchain where
                      information cannot be tampered with. In other words, avoid
                      potential legal conflicts! But it's also a place where you can
                      find audition opportunities to act in a movie, a series, or a
                      short reel. It's a platform that brings together novices and
                      experts, dreamers, and doers, under one digital roof. Now, let's
                      talk about location. Are you coming to Malta's islands to learn
                      a language, or just to enjoy life? Ever dreamt of shooting part
                      of your movie in exotic locations? Myreeldream.ai can make that
                      dream come true. With access to collaborative platforms, and
                      studio facilities in Malta and Gozo, your script can come alive
                      in breathtaking settings. And the cherry on top? Myreeldream.ai
                      isn't just about creating; it's about showcasing too. Once your
                      movie is ready, you can broadcast it on the platform. And every
                      year, there will be our annual hybrid AI-Human movie festival
                      held in the beautiful facilities of Malta and Gozo. It's a
                      chance to celebrate the fusion of human creativity and
                      artificial intelligence in the world of filmmaking. In essence,
                      myreeldream.ai is a comprehensive, user-friendly platform that
                      brings together AI, text-to-video technologies, and smart
                      contracts. It provides an opportunity for anyone to generate a
                      movie pitch, connect with professionals, find auditions, shoot
                      in exotic locations, and broadcast their work. Plus, it offers
                      the unique experience of participating in an annual hybrid
                      AI-Human movie festival. In essence, myreeldream.ai is a
                      comprehensive, user-friendly platform that opens the doors to
                      filmmaking for everyone!
            </Typography>
        </Container>
    );
}

export default Modalpage;
