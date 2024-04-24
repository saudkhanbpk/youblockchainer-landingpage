// import {
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
//   Box,
//   Chip,
// } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import avail1 from '../images/avail1.png';
// import avail2 from '../images/avail2.png';
// import avail3 from '../images/avail3.png';
// import avail4 from '../images/avail4.png';
// import { Icon } from '@iconify/react';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import axios from 'axios';

// function Avail() {
//   const [ideation, setIdea] = useState([]);
//   const [pre, setPre] = useState([]);
//   const [post, setPost] = useState([]);

//   const fetchHomeList = async () => {
//     const res = await axios.get(`https://app.myreeldream.ai/api/v1/admin/home`);
//     if (res && res.data && res.data.ideation) {
//       const { ideation, pre, post } = res.data;
//       setIdea(ideation);
//       setPre(pre);
//       setPost(post);
//     }
//   };

//   useEffect(() => {
//     fetchHomeList();
//   }, []);

//   return (
//     <section id="avail">
//       <Box
//         id='Consumers'
//         sx={{ marginTop: { md: '0%', xs: '23%' }, padding: '3%' }}
//       >
//         {/* <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '4rem', sm: '2rem', xs: '2rem' } }}><strong style={{ color: '#3770FF' }}>Consumers</strong> Get connected to organizations to sell your content</Typography> */}
//         <div>
//           <Grid container spacing={3} sx={{ marginTop: '0%' }}>
//             <Grid
//               onClick={() => window.open('https://app.myreeldream.ai/')}
//               item
//               md={4}
//               sm={6}
//               xs={12}
//               sx={{
//                 marginBottom: { md: '0', sm: '0', xs: '10%' },
//                 cursor: 'pointer',
//                 // border:'2px solid yellow'
//               }}
//             >
//               <CardContent
//                 sx={{
//                   backgroundColor: 'white',
//                   height: '100%',
//                   borderRadius: '100%',
//                   boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px',
//                   // border:'1px solid green',
//                   display: 'flex-col',
//                   justifyContent: 'center',
//                   justifyItems: 'center',
//                   alignContent: 'center',
//                   alignItems: 'center',
//                   paddingLeft: '60px'

//                 }}
//               >
//                 {/* <CardMedia component='img' image={avail1} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} /> */}
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Icon
//                     icon='eva:bulb-outline'
//                     style={{
//                       height: '100px',
//                       width: 'auto',
//                       marginTop: '-4rem',
//                       color: '#3770FF',
//                     }}
//                   />
//                   {/* <Chip label='Coming soon' /> */}
//                 </Box>

//                 <Grid
//                   container
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     // border:'1px solid red',
//                     width: '100%'

//                   }}
//                 >
//                   <Grid item md={12} xs={12}>
//                     <h3
//                       style={{
//                         margin: '0',
//                         padding: '0',
//                         display: 'flex',
//                         alignItems: 'center',
//                         marginBottom: '5%',
//                       }}
//                     >
//                       Aspiring Talent{' '}
//                       <ArrowForwardIcon
//                         sx={{ display: { md: 'flex', xs: 'none' } }}
//                       />
//                     </h3>
//                   </Grid>
//                   {ideation.map((idea, index) => (
//                     <>
//                       <Grid item md={1} xs={1} key={index}>
//                         <Icon
//                           icon='charm:tick-double'
//                           width={28}
//                           height={28}
//                           color='#3770FF5c'
//                         />
//                       </Grid>
//                       <Grid item md={11} xs={11} key={index + 100}>
//                         <p style={{
//                           fontSize: '14px',
//                           //  border:"2px solid",
//                           marginLeft: '8px',
//                           margin: 0
//                         }}>
//                           {idea}
//                         </p>
//                       </Grid>
//                     </>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Grid>
//             <Grid
//               item
//               md={4}
//               sm={6}
//               xs={12}
//               sx={{ marginBottom: { md: '0', sm: '0', xs: '10%' } }}
//             >
//               <CardContent
//                 sx={{
//                   backgroundColor: 'white',
//                   height: '100%',
//                   borderRadius: '20px',
//                   boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px',
//                 }}
//               >
//                 {/* <CardMedia component='img' image={avail2} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} /> */}
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Icon
//                     icon='mdi:movie-edit'
//                     style={{
//                       height: '100px',
//                       width: 'auto',
//                       marginTop: '-4rem',
//                       color: '#3770FF',
//                     }}
//                   />

//                   <Chip label='Coming soon' />
//                 </Box>
//                 <Grid
//                   container
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <Grid
//                     item
//                     md={12}
//                     xs={12}
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       marginBottom: '5%',
//                     }}
//                   >
//                     <h3 style={{ margin: '0', padding: '0', marginRight: '5%' }}>
//                       Pre-Production
//                     </h3>
//                   </Grid>
//                   {pre.map((idea, index) => (
//                     <>
//                       <Grid item md={1} xs={1} key={index}>
//                         <Icon
//                           icon='charm:tick-double'
//                           width={28}
//                           height={28}
//                           color='#3770FF5c'
//                         />
//                       </Grid>
//                       <Grid item md={11} xs={11} key={index + 100}>
//                         <p style={{ fontSize: '14px' }}>
//                           {idea}
//                         </p>
//                       </Grid>
//                     </>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Grid>
//             <Grid item md={4} sm={6} xs={12}>
//               <CardContent
//                 sx={{
//                   backgroundColor: 'white',
//                   height: '100%',
//                   borderRadius: '20px',
//                   boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px',
//                 }}
//               >
//                 {/* <CardMedia component='img' image={avail4} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} /> */}
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                   <Icon
//                     icon='ri:movie-2-line'
//                     style={{
//                       height: '100px',
//                       width: 'auto',
//                       marginTop: '-4rem',
//                       color: '#3770FF',
//                     }}
//                   />
//                   <Chip label='Coming soon' />
//                 </Box>
//                 <Grid
//                   container
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <Grid
//                     item
//                     md={12}
//                     xs={12}
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       marginBottom: '5%',
//                     }}
//                   >
//                     <h3 style={{ margin: '0', padding: '0', marginRight: '5%' }}>
//                       Post-Production & Distribution
//                     </h3>
//                   </Grid>
//                   {post.map((idea, index) => (
//                     <>
//                       <Grid item md={1} xs={1} key={index}>
//                         <Icon
//                           icon='charm:tick-double'
//                           width={28}
//                           height={28}
//                           color='#3770FF5c'
//                         />
//                       </Grid>
//                       <Grid item md={11} xs={11} key={index + 100}>
//                         <p style={{ fontSize: '14px' }}>
//                           {idea}
//                         </p>
//                       </Grid>
//                     </>
//                   ))}
//                 </Grid>
//               </CardContent>
//             </Grid>
//           </Grid>
//         </div>
//       </Box>
//     </section>
//   );
// }

// export default Avail;


// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import Modal from "@material-ui/core/Modal";
// import { Icon } from "@iconify/react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//     justifyContent: "center",
//     display: "flex",
//     alignItems: "center",
//   },
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     color: "#ffffff",
//     borderRadius: theme.spacing(4),
//     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//     transition: "box-shadow 0.3s ease",
//     "&:hover": {
//       boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
//     },
//     width: "300px",
//     height: "470px",
//     justifyContent: "center",
//     paddingLeft: "10px",
//   },
//   title: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     marginBottom: theme.spacing(1),
//   },
//   price: {
//     fontSize: "36px",
//     fontWeight: "bold",
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: theme.spacing(1),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//     backgroundColor: "yellow",
//   },
//   featureList: {
//     marginTop: theme.spacing(1),
//   },
//   feature: {
//     fontSize: "14px",
//     marginBottom: theme.spacing(0.5),
//     display: "flex",
//     alignItems: "center",
//     marginTop: "8px",
//   },
//   modal: {
//     backgroundColor: "#002638", opacity: "1",
//     position: "absolute",
//     width: "90%",
//     overflowY: "auto", // Enable vertical scrollbar
//     maxWidth: "600px", // Adjust maximum width as needed
//     maxHeight: "90vh", // Adjust maximum height as needed
//     // backgroundColor: theme.palette.background.paper,
//     // border: "2px solid yellow",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     [theme.breakpoints.down("sm")]: {
//       width: "95%",
//     },

//   },
// }));

// function Avail() {
//   const classes = useStyles();
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const handleOpenModal = (plan) => {
//     setSelectedPlan(plan);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const plans = [
//     {
//       title: "Aspiring Talent",
//       features: [
//         "Idea to one minute pitch",
//         "One minute pitch to synopsis",
//         "Synopsis to full length script",
//         "Story board",
//         "Script doctors",
//         "Trailer"
//       ],
//       buttonLabel: "Try For Free",
//       Icon: "eva:bulb-outline",
//       description: " ",
//     },
//     {
//       title: "Movie Professionals",
//       price: 20,
//       features: [
//         "Casting",
//         "Location scouting",
//         "Production schedule",
//         "Designing sets & costumes",
//         "Filming on location/studio",
//       ],
//       buttonLabel: "Subscribe Now",
//       Icon: "mdi:movie-edit",
//     },
//     {
//       title: "Co-operation",
//       price: 40,
//       features: [
//         "Film editing",
//         "Marketing",
//         "Distribution",
//         "Release",
//         "Post-release",
//       ],
//       buttonLabel: "Buy Now",
//       Icon: "ri:movie-2-line",
//     },
//   ];

//   return (
//     <section id="avail">
//       <div className={classes.root}>
//         <Grid
//           container
//           spacing={4}
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             justifyItems: "center",
//             padding: "5px",
//           }}
//         >
//           {plans.map((plan) => (
//             <Grid item key={plan.title}>
//               <Card
//                 className={classes.card}
//                 style={{ backgroundColor: "#002638", cursor: "pointer" }}
//                 onClick={() => handleOpenModal(plan)}
//               >
//                 <CardContent>
//                   <Typography className={classes.title}>{plan.title}</Typography>
//                   <Icon
//                     icon={plan.Icon}
//                     style={{ fontSize: "100px", color: '#3770FF' }}
//                   />
//                   <div style={{ paddingTop: "12px" }}>
//                     <Typography
//                       style={{
//                         // fontSize: "20px",
//                         fontFamily:
//                           'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
//                         fontWeight: 700,
//                         fontSize: "26px",
//                         lineHeight: "40px",
//                         color: "#ffffff",
//                       }}
//                     >
//                       Features
//                     </Typography>
//                   </div>
//                   <div className={classes.featureList}>
//                     {plan.features.map((feature, index) => (
//                       <Typography key={index} className={classes.feature}>
//                         <span role="img" aria-label="Checkmark">
//                           ✔️
//                         </span>
//                         <span style={{ marginLeft: "4px" }}>{feature}</span>
//                       </Typography>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//         <Modal
//           open={openModal}
//           onClose={handleCloseModal}
//           aria-labelledby="modal-title"
//           aria-describedby="modal-description"
//         >
//           <div className={classes.modal}>
//             {selectedPlan && (
//               <div style={{
//                 // fontSize: "20px",

//               }}>
//                 <div style={{
//                   display: "flex", justifyContent: "space-between", fontFamily:
//                     'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
//                   color: "yellow",
//                 }}>
//                   <Typography variant="h6" id="modal-title" style={{ fontSize: '30px', font: 'bold', fontWeight: 700 }}>
//                     {selectedPlan.title}
//                   </Typography>
//                   <Button onClick={handleCloseModal} style={{ fontSize: '20px', font: 'bold', fontWeight: 700, color: 'red' }}>X</Button>
//                 </div>

//                 <Typography
//                   variant="body1"
//                   id="modal-description"
//                   style={{
//                     width: "100%",
//                     // border: "1px solid",
//                   }}
//                 >
//                   <span style={{
//                     fontSize: '22px', font: 'bold', fontWeight: 700, fontFamily:
//                       'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
//                     color: "#ffffff",
//                   }}>
//                     Additional Ideas: -<br />
//                   </span>
//                   <Typography style={{
//                     fontFamily:
//                       'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
//                     color: "#ffffff", opacity: '0.7',
//                   }}>

//                     Consider incorporating interactive elements
//                     such as sliders or tabs that users can click through to learn
//                     more about each target audience. - Utilize clear call-to-action
//                     buttons or links that direct users to specific sections or
//                     sign-up forms based on their interests. - Incorporate visually
//                     appealing graphics or icons to represent each target audience,
//                     making it easy for users to identify which category they belong
//                     to. - Implement a user-friendly navigation menu that allows
//                     visitors to easily access information relevant to their needs,
//                     whether they're aspiring talents, movie professionals, or
//                     corporations. - Provide options for users to subscribe to
//                     newsletters or updates tailored to their specific interests,
//                     ensuring they stay informed about relevant opportunities and
//                     developments within the myreeldream.ai community. - Introduction
//                     to myreeldream.ai Have you ever pondered the possibilities of
//                     combining artificial intelligence, text-to-video technologies,
//                     and smart contracts? Welcome to the future of filmmaking with
//                     myreeldream.ai ! Imagine a platform that empowers anyone,
//                     whether you're bursting with ideas or starting from scratch, to
//                     become a filmmaker. That's what myreeldream.ai does. Reflecting
//                     on the dynamic evolution of the entertainment industry. we find
//                     parallels with shifts in film and music. In the past two
//                     decades, from Napster and iTunes to YouTube and now streaming
//                     giants like Netflix, new business models have emerged. Today, a
//                     creative Youtuber can reach or even surpass the audience of a
//                     traditional TV broadcaster with just a few Clicks. While
//                     producing movies or series traditionally demands substantial
//                     investments. Al, Text-to-Video, and web three technologies
//                     converge on myreeldream, enabling you to be your own movie
//                     producer effortlessly, and at a very low cost. In just a few
//                     clicks, it generates a one-minute pitch, a synopsis, a
//                     full-length script with a storyboard, and even a trailer. It's
//                     like having a personal assistant, but this assistant is powered
//                     by cutting-edge AI technology and available 24/7. But that's not
//                     all. Myreeldream.ai is more than just a tool; it's a community.
//                     Here, you can connect with movie professionals who can provide
//                     valuable insights to improve your script and compose your
//                     soundtrack for instance. Smart contracts enable you to settle
//                     agreements with third parties in a few clicks, securely and
//                     transparently by recording them on a blockchain where
//                     information cannot be tampered with. In other words, avoid
//                     potential legal conflicts! But it's also a place where you can
//                     find audition opportunities to act in a movie, a series, or a
//                     short reel. It's a platform that brings together novices and
//                     experts, dreamers, and doers, under one digital roof. Now, let's
//                     talk about location. Are you coming to Malta's islands to learn
//                     a language, or just to enjoy life? Ever dreamt of shooting part
//                     of your movie in exotic locations? Myreeldream.ai can make that
//                     dream come true. With access to collaborative platforms, and
//                     studio facilities in Malta and Gozo, your script can come alive
//                     in breathtaking settings. And the cherry on top? Myreeldream.ai
//                     isn't just about creating; it's about showcasing too. Once your
//                     movie is ready, you can broadcast it on the platform. And every
//                     year, there will be our annual hybrid AI-Human movie festival
//                     held in the beautiful facilities of Malta and Gozo. It's a
//                     chance to celebrate the fusion of human creativity and
//                     artificial intelligence in the world of filmmaking. In essence,
//                     myreeldream.ai is a comprehensive, user-friendly platform that
//                     brings together AI, text-to-video technologies, and smart
//                     contracts. It provides an opportunity for anyone to generate a
//                     movie pitch, connect with professionals, find auditions, shoot
//                     in exotic locations, and broadcast their work. Plus, it offers
//                     the unique experience of participating in an annual hybrid
//                     AI-Human movie festival. In essence, myreeldream.ai is a
//                     comprehensive, user-friendly platform that opens the doors to
//                     filmmaking for everyone!
//                   </Typography>
//                 </Typography>
//               </div>
//             )}
//           </div>
//         </Modal>
//       </div>
//     </section>
//   );
// }

// export default Avail;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Video from "./Video"
import { Box } from "@material-ui/core";
import Main from "./Main";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing(4),
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  card: {
    display: "flex",
    alignItems: 'center',
    flexDirection: "column",
    color: "#ffffff",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: 'center',
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.5)",
      
    },
    width: "350px",
    height: "470px",
    
      
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
    
    
  },
  price: {
    fontSize: "36px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "yellow",
  },
  featureList: {
    marginTop: theme.spacing(1),
  },
  feature: {
    fontSize: "14px",
    marginBottom: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
  },
  modal: {
    backgroundColor: "#002638",
    opacity: "1",
    position: "absolute",
    width: "90%",
    overflowY: "auto",
    maxWidth: "600px",
    maxHeight: "90vh",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));

function Avail() {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const plans = [
    {
      title: "Aspiring Talent",
      features: [
        "Idea to one minute pitch",
        "One minute pitch to synopsis",
        "Synopsis to full length script",
        "Story board",
        "Script doctors",
        "Trailer",
      ],
      buttonLabel: "Try For Free",
      Icon: "eva:bulb-outline",
      description: " ",
    },
    {
      title: "Movie Professionals",
      price: 20,
      features: [
        "Casting",
        "Location scouting",
        "Production schedule",
        "Designing sets & costumes",
        "Filming on location/studio",
      ],
      buttonLabel: "Subscribe Now",
      Icon: "mdi:movie-edit",
    },
    {
      title: "Co-operation",
      price: 40,
      features: [
        "Film editing",
        "Marketing",
        "Distribution",
        "Release",
        "Post-release",
      ],
      buttonLabel: "Buy Now",
      Icon: "ri:movie-2-line",
    },
  ];

  return (<>
  <Main/>
    <Box className="video">
      <Video />
    </Box >
    <section id="avail">

      <div className={classes.root}>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "space-around",
            justifyItems: "center",
            padding: "5px",
          }}
        >
          {plans.map((plan) => (
            <Grid item key={plan.title}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={classes.card}
                  style={{
                    // backgroundColor: "#002638",
                    // background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',
                    background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.8), rgba(138, 43, 226, 0.8))',

                    cursor: "pointer"
                  }}
                  onClick={() => handleOpenModal(plan)}
                >
                  <CardContent>
                    <Typography className={classes.title}>{plan.title}</Typography>
                    <Icon icon={plan.Icon} style={{
                      fontSize: "100px",
                      color: "white"
                      // color: "#3770FF"
                    }} />
                    <div style={{ paddingTop: "12px" }}>
                      <Typography
                        style={{
                          fontFamily:
                            'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                          fontWeight: 700,
                          fontSize: "26px",
                          lineHeight: "40px",
                          color: "#ffffff",
                        }}
                      >
                        Features
                      </Typography>
                    </div>
                    <div className={classes.featureList}>
                      {plan.features.map((feature, index) => (
                        <Typography key={index} className={classes.feature}>
                          <span role="img" aria-label="Checkmark">
                            ✔️
                          </span>
                          <span style={{ marginLeft: "4px" }}>{feature}</span>
                        </Typography>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className={classes.modal}>
            {selectedPlan && (
              <div style={{
                // fontSize: "20px",

              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", fontFamily:
                    'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  color: "yellow",
                }}>
                  <Typography variant="h6" id="modal-title" style={{ fontSize: '30px', font: 'bold', fontWeight: 700 }}>
                    {selectedPlan.title}
                  </Typography>
                  <Button onClick={handleCloseModal} style={{ fontSize: '20px', font: 'bold', fontWeight: 700, color: 'red' }}>X</Button>
                </div>

                <Typography
                  variant="body1"
                  id="modal-description"
                  style={{
                    width: "100%",
                    // border: "1px solid",
                  }}
                >
                  <span style={{
                    fontSize: '22px', font: 'bold', fontWeight: 700, fontFamily:
                      'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    color: "#ffffff",
                  }}>
                    Additional Ideas: -<br />
                  </span>
                  <Typography style={{
                    fontFamily:
                      'Jost, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    color: "#ffffff", opacity: '0.7',
                  }}>

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
                </Typography>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </section>
    </>
  );
}

export default Avail;

