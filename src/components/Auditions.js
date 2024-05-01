import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#ffffff",

    borderRadius: theme.spacing(2),
    background: "rgba(0, 0, 0, 0.418)",
    backdropFilter: 'blur(20px)',
    "&:hover": {
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
    },

    width: "300px",
    height: "350px",
    cursor: "pointer",

  },
  cardhead: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),

  },
  sectionhead: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    display: "flex ",
    justifyContent: "center",
    color: 'white',

  },
  section: { marginTop: "100px" },
  title: {
    fontSize: "44px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    color: 'white',



  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',
    color: "white",
    marginTop: theme.spacing(1),
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "orange",
    },
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
}));

const Auditions = () => {
  const classes = useStyles();

  const opportunities = [
    {
      title: "Backstage",
      description:
        "Backstage is a popular platform for actors to find audition opportunities for film, TV, theater, and more. They offer a comprehensive database of casting calls from around the world.",
      link: "https://www.backstage.com/casting/",
    },
    {
      title: "Casting Networks",
      description:
        "Casting Networks provides casting solutions for film, TV, commercials, and theater productions. Actors can access audition opportunities and submit their profiles directly to casting directors.",
      link: "https://www.castingnetworks.com/",
    },
    {
      title: "Playbill",
      description:
        "Playbill offers casting notices for theater productions, including Broadway, Off-Broadway, and regional theater. Actors can search for auditions and view casting calls for various stage productions.",
      link: "https://www.playbill.com/casting",
    },

  ];
  const opportunities2 = [
    {
      title: "Actor's Access ",
      description:
        "Actor's Access provides resources and guidelines for actors on how to submit auditions, create professional profiles, and maximize their chances of success in the industry.",
      link: "https://www.backstage.com/casting/",
    },
    {
      title: "Casting Workbook ",
      description:
        "Casting Workbook offers tips and guidelines for actors on how to prepare for auditions, create self-tapes, and navigate the casting process effectively.",
      link: "https://www.castingnetworks.com/",
    },
    {
      title: "Backstage Advice",
      description:
        "Backstage offers articles and advice for actors on a wide range of topics, including audition preparation, self-taping techniques, and networking strategies.",
      link: "https://www.playbill.com/casting",
    },

  ];
  const opportunities3 = [
    {
      title: "Actors' Equity Association ",
      description:
        "Actors' Equity Association provides resources and tips for aspiring actors, including information on training programs, union membership, and career development opportunities.",
      link: "https://www.backstage.com/casting/",
    },
    {
      title: "Backstage Resources",
      description:
        "Backstage offers a wealth of resources and articles for aspiring actors, covering topics such as audition tips, resume building, and finding representation.",
      link: "https://www.castingnetworks.com/",
    },
    {
      title: "Casting Frontier Blog ",
      description:
        "Casting Frontier's blog features tips and advice for actors on honing their craft, building their brand, and navigating the industry as aspiring professionals.",
      link: "https://www.playbill.com/casting",
    },


  ];

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h1" className={classes.title}>
          Auditions
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Listing of Current Audition Opportunities
        </Typography>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            marginTop: "20px",
          }}
        >
          {opportunities.map((opportunity, index) => (
            <Grid item key={index}>
              <Card className={classes.card}>
                <CardContent
                  className={classes.content}
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <Typography className={classes.cardhead}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {opportunity.description}
                    </Typography>
                  </div>
                  <div>
                    <Button
                      href={opportunity.link}
                      target="_blank"
                      rel="noopener"
                      className={`${classes.button} btn`}
                    >
                      {opportunity.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>
          Guidelines for Submitting Auditions
        </Typography>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            marginTop: "20px",
          }}
        >
          {opportunities2.map((opportunity, index) => (
            <Grid item key={index}>
              <Card className={classes.card}>
                <CardContent
                  className={classes.content}
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <Typography className={classes.cardhead}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {opportunity.description}
                    </Typography>
                  </div>
                  <div>
                    <Button
                      href={opportunity.link}
                      target="_blank"
                      rel="noopener"
                      className={`${classes.button} btn`}
                    >
                      {opportunity.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.section}>
        <Typography variant="h5" className={classes.sectionhead}>

          Tips for Aspiring Actors

        </Typography>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            marginTop: "20px",

          }}
        >
          {opportunities3.map((opportunity, index) => (
            <Grid item key={index}>
              <Card className={classes.card}>
                <CardContent
                  className={classes.content}
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <Typography className={classes.cardhead}>
                      {opportunity.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {opportunity.description}
                    </Typography>
                  </div>
                  <div>
                    <Button
                      href={opportunity.link}
                      target="_blank"
                      rel="noopener"
                      className={`${classes.button} btn`}
                    >
                      {opportunity.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Auditions;
