import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent:"center",
    alignItems:"center",
    padding:"8% 0px",
    width: '90%',
    color:"white",
    margin: "auto",
    // height: '100vh',
    fontSize:"33px",
    [theme.breakpoints.down('sm')]: {
      width: '100%', 
      padding:"1%",
      height: 'auto',
      display:"none"
      
    },
  },
  text: {
    width:"70%",
    // wordSpacing:"1%",
    // color:"#2F133C",
    // fontSize: "33px",

   
padding:'10px',
fontFamily:"Time",
    textAlign:'left',
    fontWeight: "bold",
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        textAlign:"center",
        fontSize:"45px",
      },
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="h2"  className={classes.text}>
      Welcome to MyReelDream
      <Typography variant='h5'>MyReelDreem is your one-stop destination for all things creative. 
        Whether you're a filmmaker, an artist, a designer, or a storyteller, 
        our platform is designed to empower you to bring your dreams to fruition.
        Discover a world of endless possibilities as you connect with like-minded creators, 
        access top-tier tools and resources, and unlock the secrets to success in your craft.
         From stunning visual effects to captivating narratives,
         MyReelDreem is here to help you unleash your full creative potential</Typography>
      </Typography>
      
    </div>
  );
}

export default Main;
