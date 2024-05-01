import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Paper, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        textAlign: "justify",
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
        padding: theme.spacing(3),
        width: '70%',
        height: 'screen',
        boxShadow: "none",
        background: 'transparent',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
            width: "100%",
            padding: "10px",
            display: 'flex',
            justifyContent: 'center',


        },


    },
    text: {
        color: theme.palette.text.primary,
        color: 'white',




    },
}));

const AnnualHybrid = () => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.container}>


                <Paper className={classes.paper} elevation={3}>
                    <strong className='strong' style={{ color: 'white', fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                        Annual Hybrid AI-Human Movie Festivals
                    </strong>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>Sundance Film Festival </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Sundance offers a comprehensive overview of their festival, including information about their hybrid approach, which combines in-person and virtual screenings, as well as details about the lineup, special events, and industry initiatives Sundance Film Festival<a style={{ color: 'white', marginTop: '10px', }} href='https://www.sundance.org/festivals/sundance-film-festival '> Read More </a>
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> Tribeca Film Festival  </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Tribeca provides insights into their hybrid festival model, featuring a diverse range of film screenings, panels, and interactive experiences, along with opportunities for networking and collaboration Tribeca Film Festival <a style={{ color: 'white', marginTop: '10px', }} href='https://tribecafilm.com/festival '> Read More </a>
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> Cannes Film Festival   </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Cannes showcases its prestigious festival program, featuring a blend of AI-curated selections and human-curated films, as well as information about their iconic red carpet premieres, jury awards, and industry showcases Cannes Film Festival <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.festival-cannes.com/en/ '> Read More </a>
                    </Typography>
                    <strong className='strong' style={{ color: 'white', fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                        Submission Guidelines for Filmmakers
                    </strong>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> Film Freeway    </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        FilmFreeway offers a platform for filmmakers to submit their films to festivals worldwide, including guidelines for submission, deadlines, and fees, as well as information about eligibility criteria and selection criteria FilmFreeway <a style={{ color: 'white', marginTop: '10px', }} href=' https://filmfreeway.com/ '> Read More </a>
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> Withoutabox   </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Withoutabox provides a comprehensive submission platform for filmmakers, featuring guidelines for submitting to festivals, including information about required materials, formats, and deadlines Withoutabox <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.withoutabox.com/ '> Read More </a>
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>  Festival Websites   </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Many festival websites offer detailed submission guidelines for filmmakers, including information about entry requirements, categories, and selection criteria. Examples include
                        Berlin International Film Festival Berlinale Submission Guidelines <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.berlinale.de/en/submissions/submissions.html '> Read More </a><br />
                        <span>Toronto International Film Festival</span>
                        <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.tiff.net/festival/submissions '> Read More </a>
                    </Typography>
                    <strong className='strong' style={{ color: 'white', fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                        Annual Hybrid AI-Human Movie Festivals
                    </strong>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>  SXSW Film Festival    </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        W provides a detailed schedule of film screenings, panels, workshops, and special events, allowing attendees to plan their festival experience and navigate the program effectively. <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.sxsw.com/festivals/film/ '> Read More </a><br />
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> London Film Festival     </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        The BFI London Film Festival offers a comprehensive schedule of screenings, events, and industry sessions, featuring a diverse range of films from around the world <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.bfi.org.uk/london-film-festival '> Read More </a><br />
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> Venice Film Festival      </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        ThThe Venice Film Festival showcases its program of screenings, premieres, and special events, featuring a mix of AI-curated selections and human-curated films, along with information about ticketing and accreditation <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.labiennale.org/en/cinema/ '> Read More </a><br />
                    </Typography>
                    <strong className='strong' style={{ color: 'white', fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
                        Past Festival Highlights and Winners
                    </strong>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}>IMDb </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        IMDb offers a database of past festival winners and highlights, including information about award-winning films, directors, actors, and industry achievements. <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.imdb.com/awards-central/film-festivals/ '> Read More </a><br />
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> Festival Archives  </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                        Many festival websites maintain archives of past editions, featuring information about previous winners, screenings, and special events. Examples include:
                        - Sundance Film Festival Archives <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.sundance.org/programs/archives '> Read More </a><br />
                        <span>Cannes Film Festival Archives</span>
                        <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.festival-cannes.com/en/'> Read More </a>
                    </Typography>
                    <Typography variant="h5" className={classes.text}>
                        <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', marginTop: '10px', }}> Film Festival Blogs and Reviews  </span>
                    </Typography>
                    <Typography style={{ marginTop: '10px', padding: '10px', letterSpacing: '1px', }} variant="body1" className={classes.text}>
                    Film festival blogs and review websites often feature coverage of past editions, including reviews of winning films, interviews with filmmakers, and analysis of festival trends. Examples include IndieWire Festival Coverage <a style={{ color: 'white', marginTop: '10px', }} href=' https://www.indiewire.com/c/festivals/) '> Read More </a><br />
                        <span>Variety Festival Coverage</span>
                        <a style={{ color: 'white', marginTop: '10px', }} href='https://variety.com/v/film/festivals/'> Read More </a>
                    </Typography>



                </Paper>

            </Container>
        </>

    );
}

export default AnnualHybrid;
