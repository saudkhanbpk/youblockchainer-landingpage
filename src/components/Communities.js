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

const Community = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={3}>
                    <strong  className='strong' style={{ color: 'white', fontSize: '40px', display: 'flex', justifyContent: 'center', }}>
                        Community
                    </strong>
                    <Typography variant="body1" className={classes.text}>
                        Connecting with Movie Professionals
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        MyReelDream provides users with a platform to connect directly with seasoned movie professionals, offering them invaluable opportunities for mentorship, collaboration, and learning. Whether it's seeking advice on a script, learning about the intricacies of filmmaking, or finding potential collaborators for their projects, users can easily reach out to experienced professionals within the community.
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        <strong style={{display: 'flex', justifyContent: 'center',}}> Testimonials from Satisfied Users</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        MyReelDream features a dedicated section where users can share their success stories and testimonials about their experiences on the platform. These testimonials serve as inspiring examples for others in the community, showcasing how MyReelDream has helped aspiring talents achieve their creative goals and advance their careers in the filmmaking industry.
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        <strong style={{display: 'flex', justifyContent: 'center',}}>Discussion Forums or Community Boards</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        MyReelDream hosts discussion forums and community boards where users can engage in lively discussions, share insights, and exchange ideas with fellow filmmakers and enthusiasts. These forums serve as valuable spaces for networking, collaboration, and mutual support within the MyReelDream community. Users can seek feedback on their projects, discuss industry trends, or simply connect with like-minded individuals who share their passion for filmmaking.
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        <strong style={{display: 'flex', justifyContent: 'center',}}>Access to Educational Resources</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        MyReelDream offers a wealth of educational resources, including tutorials, articles, and workshops, designed to empower users with the knowledge and skills they need to succeed in the world of filmmaking. Whether it's learning about storytelling techniques, mastering camera equipment, or understanding the business side of the industry, users can access a wide range of educational materials tailored to their needs and interests.
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        <Typography variant="h4" className={classes.text}>
                            <strong style={{display: 'flex', justifyContent: 'center',}}>Opportunities for Recognition and Exposure</strong>
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            MyReelDream provides users with opportunities to showcase their work and gain recognition within the community and beyond. Whether it's submitting their films to virtual film festivals, participating in contests and challenges, or featuring their projects in curated showcases, users can leverage MyReelDream to gain exposure for their creative endeavors and connect with audiences worldwide.
                        </Typography>
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        <Typography variant="h4" className={classes.text}>
                            <strong style={{display: 'flex', justifyContent: 'center',}}> Supportive and Inclusive Community</strong>
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            MyReelDream fosters a supportive and inclusive community where users from all backgrounds, skill levels, and perspectives are welcomed and valued. Whether you're a seasoned professional or an aspiring amateur, MyReelDream provides a nurturing environment where users can find encouragement, inspiration, and camaraderie as they pursue their filmmaking dreams.

                            Overall, MyReelDream offers a vibrant and dynamic community where users can connect with movie professionals, share their experiences, and collaborate on creative projects, fostering a culture of learning, growth, and mutual support within the filmmaking community.

                        </Typography>
                    </Typography>




                </Paper>
            </Container>
        </>

    );
}

export default Community;
