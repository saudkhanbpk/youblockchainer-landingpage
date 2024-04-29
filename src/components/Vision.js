// import React from 'react'

// const Vision = () => {
//   return (
//     <>

//     <section>

//         <p>
//         <p>**Our Vision**</p>	
// At MyReelDream, we envision a world where filmmaking is not just a profession, but a universal language that connects people, cultures, and ideas. We believe that everyone has a story to tell and deserves the opportunity to share it with the world. Our vision is to democratize the filmmaking process, making it accessible to aspiring talents, empowering movie professionals, and providing innovative solutions for corporations.

//         </p>
//     </section>
//     </>
//   )
// }

// export default Vision
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        textAlign: "justify",
        height: 'screen',
    },
    paper: {
        padding: theme.spacing(3),
        width: '70%',
        height: 'screen',
        boxShadow: "none",
        background: 'transparent',


    },
    text: {
        color: theme.palette.text.primary,
        color: 'white',


    },
}));

const Vision = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={3}>
                    <strong className='strong' style={{ color: 'white', fontSize: '40px', display: 'flex', justifyContent: 'center', }}>
                        Our Vision
                    </strong>
                    <Typography variant="body1" className={classes.text}>
                        Our vision at myreeldream.ai is to create a vibrant and inclusive ecosystem where creativity knows no bounds. We envision a future where anyone with a story to tell can easily transform their ideas into captivating visual experiences, regardless of financial constraints or technical expertise. By fostering collaboration, providing access to resources, and offering unparalleled opportunities for exploration and expression, we aspire to inspire a new generation of filmmakers and revolutionize the way stories are shared and experienced around the globe.
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        At MyReelDream, we envision a world where filmmaking is not just a profession, but a universal language that connects people, cultures, and ideas. We believe that everyone has a story to tell and deserves the opportunity to share it with the world. Our vision is to democratize the filmmaking process, making it accessible to aspiring talents, empowering movie professionals, and providing innovative solutions for corporations.
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                        <strong style={{ display: 'flex', justifyContent: 'center', }}
                        >Empowering Creativity</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        We are passionate about empowering creativity in all its forms. Our platform provides aspiring talents with the tools, resources, and support they need to turn their dreams into captivating films. Whether you're a writer with a vision, an actor with a dream, a corporation, or a filmmaker with a story to tell, MyReelDream is here to help you unleash your creative potential.
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                        <strong style={{ display: 'flex', justifyContent: 'center', }}
                        >Revolutionizing Filmmaking</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        We are committed to revolutionizing the filmmaking industry by harnessing the power of technology. With artificial intelligence, text-to-video technologies, and blockchain-based smart contracts, we are streamlining the production process, reducing costs, and ensuring transparency and fairness for all stakeholders. MyReelDream is not just a platform—it's a catalyst for change in the entertainment industry.
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                        <strong style={{ display: 'flex', justifyContent: 'center', }}
                        >Fostering Collaboration</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        Collaboration is at the heart of everything we do. We believe in the power of community, and our platform serves as a vibrant hub where aspiring talents, movie professionals, and corporations come together to collaborate, share ideas, and bring their creative visions to life. By fostering a culture of collaboration and innovation, we are driving the future of filmmaking forward.
                    </Typography>
                    <Typography variant="h6" className={classes.text}>
                        <Typography variant="h6" className={classes.text}>
                            <strong style={{ display: 'flex', justifyContent: 'center', }}
                            >Celebrating Diversity</strong>
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            We celebrate diversity in all its forms. Our platform welcomes creators from every background, culture, and perspective, embracing the richness of human experience. We believe that diversity fuels creativity and innovation, and we are committed to providing a supportive and inclusive environment where all voices are heard and valued.
                        </Typography>
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        <Typography variant="h6" className={classes.text}>
                            <strong style={{ display: 'flex', justifyContent: 'center', }}
                            >Join Us on the Journey</strong>
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            We invite you to join us on this exciting journey where dreams meet reality, and the magic of filmmaking knows no bounds. Whether you're an aspiring talent, a movie professional, or a corporation looking to harness the power of visual storytelling, MyReelDream has something for you. Together, let's shape the future of filmmaking and make our dreams a reality.
                        </Typography>
                    </Typography>




                </Paper>
            </Container>
        </>

    );
}

export default Vision;
