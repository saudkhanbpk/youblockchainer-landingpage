import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent:"center",
    alignItems:"center",
    padding:"6%",
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%', 
      padding:"1%",
      
    },
  },
  text: {
    width:"60%",
    // color:"#2F133C",
    fontSize: "35px",
    color:"white",
padding:'10px',
fontFamily:"mono",
    textAlign:'left',
    fontWeight: 1000,
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        textAlign:"center",
        fontSize:"20px"
      },
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4"  className={classes.text}>
        Welcome to our platform where cutting-edge technologies converge to revolutionize the world of filmmaking. In this section, we delve into the seamless integration of Artificial Intelligence (AI), Text-to-Video technologies, and Smart Contracts, showcasing how these innovations work together to empower users and elevate the filmmaking process.
      </Typography>
    </div>
  );
}

export default Main;
