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
        padding: '20px',


    },
    text: {
        color: theme.palette.text.primary,
        color: 'white',


    },
}));

const Corporation = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.container}>
                <Paper className={classes.paper} elevation={3}>
                    <strong className='strong' style={{ color: 'white', fontSize: '40px', display: 'flex', justifyContent: 'center',}}>
                        Corporation
                    </strong>
                    <Typography variant="h5" className={classes.text}>
                        Using MyReelDream.ai can offer corporations several benefits
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        MyReelDream.ai provides a platform where corporations can tap into a diverse pool of creative talent from various backgrounds and experiences. This diversity can bring fresh perspectives and innovative ideas to corporate projects, leading to more dynamic and engaging content.
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <strong style={{display: 'flex', justifyContent: 'center',}}>Cost-Effective Solutions </strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        By leveraging cutting-edge technologies such as artificial intelligence and text-to-video, corporations can streamline their filmmaking processes and reduce production costs. MyReelDream.ai offers efficient tools and resources that can help corporations achieve their creative goals within budget constraints.
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <strong style={{display: 'flex', justifyContent: 'center',}}>Transparent and Fair Transactions</strong>
                    </Typography>
                    <Typography variant="body1" className={classes.text}>
                        With blockchain-based smart contracts, MyReelDream.ai ensures transparency and fairness in all transactions between corporations and talent. Corporations can have peace of mind knowing that their contracts are securely recorded and executed, eliminating any potential disputes or discrepancies.
                    </Typography>
                    
                        <Typography variant="h5" className={classes.text}>
                            <strong style={{display: 'flex', justifyContent: 'center',}}>Enhanced Brand Storytelling</strong>
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            Visual storytelling is a powerful tool for corporations to connect with their audience and convey their brand message effectively. MyReelDream.ai enables corporations to collaborate with talented filmmakers and storytellers to create compelling and authentic content that resonates with their target audience.
                        
                    </Typography>
                   
                        <Typography variant="h5" className={classes.text}>
                            <strong style={{display: 'flex', justifyContent: 'center',}}>Opportunities for Innovation</strong>
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            By joining MyReelDream.ai, corporations can be part of a vibrant community of creatives and innovators who are pushing the boundaries of filmmaking. This collaborative environment fosters innovation and encourages corporations to explore new ideas and experiment with novel approaches to storytelling.

                  
                    </Typography>
                 
                    <Typography variant="h5" className={classes.text}>
                            <strong style={{display: 'flex', justifyContent: 'center',}}>Support for Corporate Social Responsibility (CSR) Initiatives</strong>
                        </Typography>
                        <Typography variant="body1" className={classes.text}>
                            : MyReelDream.ai celebrates diversity and inclusivity, making it an ideal platform for corporations to support their CSR initiatives. By partnering with diverse talents and promoting underrepresented voices, corporations can demonstrate their commitment to social responsibility and contribute to positive social change through their creative endeavors.Overall, MyReelDream.ai offers corporations a unique opportunity to harness the power of visual storytelling, drive innovation, and make a meaningful impact through their creative endeavors.

                       
                    </Typography>




                </Paper>
            </Container>
        </>

    );
}

export default Corporation;
