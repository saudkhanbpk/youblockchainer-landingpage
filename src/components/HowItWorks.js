import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper } from '@material-ui/core';
import ModalData from './Modals/Modal';
import ArtificialContent from './TextModal/ArtificialContent';
import TexttoVideo from './TextModal/TextToVideo';

const useStyles = makeStyles((theme) => ({
    container: {

        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(0),
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            // fontSize: "20px"

        },



    },
    paper: {
        width: '75%',
        padding: theme.spacing(3),
        padding: '20px 20px',
        background: "transparent",
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
            width: "100%",
            padding: "10px"


        },



    },
    text: {
        color: theme.palette.text.primary,
        color: "white",

    },
}));

const HowItWorks = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpen2 = () => {
        setOpen2(true);
    }
    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>

            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="h5" className={classes.text}>
                        <strong style={{ color: 'white', fontSize: '40px', display: 'flex', justifyContent: 'center', }}>
                            How It Works
                        </strong>
                    </Typography>
                    <Typography style={{ letterSpacing: '1px', }} className={classes.text}>
                        Welcome to our platform where cutting-edge technologies converge to revolutionize the world of filmmaking. In this section, we delve into the seamless integration of Artificial Intelligence (AI), Text-to-Video technologies, and Smart Contracts, showcasing how these innovations work together to empower users and elevate the filmmaking process.
                    </Typography>
                    <Typography variant='h5'>

                        <strong style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', color: 'white', }}
                        >Artificial Intelligence (AI)</strong><br />
                    </Typography>
                    <Typography style={{ letterSpacing: '1px', }} className={classes.text}>
                        AI serves as the backbone of our platform, driving innovation and efficiency at every stage of the filmmaking journey. Through advanced algorithms and machine learning techniques, AI enables us to automate various aspects of film production, from generating initial concepts to refining final edits. Here's how AI enhances the <small onClick={handleOpen} style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer', }}>See More
                        </small>
                    </Typography>
                    <Typography variant='h5'>
                        <strong style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '20px', }}
                        >Filmmaking Experience (AI)</strong><br />
                    </Typography>
                    <Typography style={{ letterSpacing: '1px', }} className={classes.text}>
                        Content Generation: AI algorithms analyze vast amounts of data to generate compelling movie pitches, detailed synopses, and full-length scripts with storyboards. By leveraging natural language processing (NLP) and predictive modeling, AI helps users kickstart their creative process and overcome writer's block.

                        Personalized Assistance: Our AI-powered assistant provides round-the-clock support, offering suggestions, feedback, and guidance tailored to each user's unique needs and preferences. Whether you're brainstorming ideas, fine-tuning dialogue, or exploring visual concepts, our AI companion is here to assist you every step of the way.

                        Enhanced Collaboration: AI facilitates seamless collaboration between filmmakers and industry professionals, connecting users with experts who can provide valuable insights, feedback, and resources. By harnessing the collective intelligence of our community, AI fosters creativity, innovation, and mutual support.
                    </Typography>
                    <Typography variant='h5'>
                        <strong style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '20px',  marginBottom: '20px',}}
                        >Text-to-Video Technologies</strong><br />
                    </Typography>
                    <Typography style={{ letterSpacing: '1px', }} className={classes.text}>
                        Text-to-Video technologies represent the next frontier in visual storytelling, enabling users to transform written scripts into immersive audiovisual experiences with ease. Here's how text-to-video technologies elevate the filmmaking process:
                        Automatic Scene Generation: Our platform utilizes text-to-video technologies to automatically generate visual scenes based on written scripts, transforming words into dynamic visuals that bring stories to life. By streamlining the production process, text-to-video technologies save time, effort, and resources, allowing users to focus on storytelling without getting bogged down by technical details.

                        Customizable Visual Elements: Text-to-video technologies offer a wide range of customizable visual elements, including characters, settings, props, and special effects. Users can easily personalize their projects to reflect their creative vision, adjusting details and fine-tuning visuals to suit their preferences.

                        Realistic Animation: Our text-to-video technologies leverage advanced animation techniques to create realistic movements, expressions, and interactions, enhancing the overall quality and immersion of the final product. Whether it's character animation, environmental effects, or cinematic transitions, our platform delivers professional-grade results that captivate audiences and leave a lasting impression.
                        <small onClick={handleOpen2} style={{ color: 'white', cursor: 'pointer', textDecoration: 'underline', }}>See More
                        </small>

                    </Typography>
                    <Typography variant='h5'>
                        <strong style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '20px', marginBottom: '20px', }}
                        >Smart Contracts Integration</strong>
                    </Typography>
                    <Typography style={{ letterSpacing: '1px', }} className={classes.text}>
                        Smart Contracts represent the cornerstone of trust and transparency in our platform, enabling secure and efficient transactions between users and third parties. Here's how smart contracts streamline agreements and ensure peace of mind.
                        Automated Agreement Settlement: Smart contracts automate the settlement of agreements between users and third parties, eliminating the need for traditional legal intermediaries and minimizing the risk of disputes or misunderstandings. By encoding contractual terms and conditions into self-executing code, smart contracts ensure that agreements are enforced reliably and impartially.
                    </Typography>
                    <Typography variant='h5'>
                        <strong style={{ display: 'flex', justifyContent: 'center', color: 'white', }}
                        >Transparent Transaction Tracking </strong><br />
                    </Typography>
                    <Typography style={{ letterSpacing: '1px', }} className={classes.text}>
                        Smart contracts provide transparent and immutable records of transaction history, allowing users to track the status and progress of agreements in real-time. By leveraging blockchain technology, smart contracts offer unparalleled transparency, security, and auditability, giving users full visibility and control over their transactions.

                    </Typography>
                    <Typography variant='h5'>
                        <strong style={{ display: 'flex', justifyContent: 'center', color: 'white', marginTop: '20px', }}
                        >Decentralized Governance </strong><br />
                    </Typography>
                    <Typography style={{ letterSpacing: '1px', }} className={classes.text}>
                        Our platform is governed by a decentralized network of smart contracts, ensuring fairness, integrity, and accountability in all interactions. By decentralizing decision-making and governance processes, smart contracts empower users to participate in shaping the future of our platform, fostering a sense of ownership, community, and collective responsibility.<br />

                        In summary, the integration of AI, Text-to-Video technologies, and Smart Contracts represents the cornerstone of our platform's innovation and success. By harnessing the power of these cutting-edge technologies, we empower users to unleash their creativity, collaborate with experts, and bring their cinematic visions to life in ways never before possible. Welcome to the future of filmmaking with myreeldream.ai – where technology meets creativity, and dreams become reality.
                        Visual demonstrations or video tutorials
                    </Typography>
                </Paper>
            </Container>

            <ArtificialContent handleClose={handleClose} open={open} classes={classes.text} />
            <TexttoVideo handleClose={handleClose2} open={open2} classes={classes.text} />
        </>
    );
}

export default HowItWorks;
