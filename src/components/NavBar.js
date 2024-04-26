// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import logo from '../images/artboard_2_copy_3_2_.png';
// import text from '../images/text.png';
// import { CardMedia, Typography } from '@mui/material';
// import { Link } from 'react-scroll';
// import CTA from './CTA';
// import Footer from './Footer';
// import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import headlogo from "../images/headlogo.png"
// import '../App.css'
// const drawerWidth = 240;

// export default function ElevateAppBar(props) {
//   const { window2, children } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const url = window.location.href.split('/')[3];
//   console.log(url);

//   const drawer = (
//     <Box
//       onClick={handleDrawerToggle}
//       sx={{
//         textAlign: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         padding: '10%',

//       }}
//     >
//       <CardMedia
//         component='img'
//         image={logo}
//         sx={{ height: '40px', width: 'auto', marginBottom: '8%' }}
//       />
//       <Divider />
//       {/* <Link to={'Home'} spy={true} smooth={true}>
//                 <Button sx={{ color: 'black', textTransform: 'none' }}>
//                     Home
//                 </Button>
//             </Link>
//             <Link to={'Creators'} spy={true} smooth={true}>
//                 <Button sx={{ color: 'black', textTransform: 'none' }}>
//                     Creators
//                 </Button>
//             </Link>
//             <Link to={'Experts'} spy={true} smooth={true}>
//                 <Button sx={{ color: 'black', textTransform: 'none' }}>
//                     Experts
//                 </Button>
//             </Link>
//             <Link to={'Consumers'} spy={true} smooth={true}>
//                 <Button sx={{ color: 'black', textTransform: 'none' }}>
//                     Consumers
//                 </Button>
//             </Link> */}
//     </Box>
//   );

//   const container =
//     window2 !== undefined ? () => window2().document.body : undefined;

//   return (
//     <>
//       <Box className="app" sx={{ display: 'flex',  }}>
//         <CssBaseline />
//         <AppBar
//           component='nav'
//           sx={{
//             backgroundColor: '#2F133C',
//             color: 'white',
//             boxShadow: 'none',
//             padding: '0% 1.5%',




//           }}
//         >
//           <Toolbar
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',

//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center', width: "100%" }}>
//               {/* <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             edge="start"
//                             onClick={handleDrawerToggle}
//                             sx={{ mr: 2, display: { sm: 'none' } }}
//                         >
//                             <MenuIcon />
//                         </IconButton> */}
//               {/* <CardMedia
//                 component='img'
//                 image={logo}
//                 sx={{ height: '40px', width: 'auto' }}
//               /> */}
//               <CardMedia
//                 component='img'
//                 onClick={() => navigate('/')}
//                 image={headlogo}
//                 sx={{
//                   height: '30px',
//                   cursor: 'pointer',
//                   width: '270px',
//                   marginLeft: '10px',
//                   marginRight: '2vw',
//                 }}
//               />
//               <Box sx={{ display: { xs: 'none', sm: 'block', marginLeft: 'auto', } }}>
//                 {/* <Link to={'Home'} spy={true} smooth={true}>
//                                 <Button sx={{ color: 'white', textTransform: 'none', fontWeight: 'bold' }}>
//                                     Home
//                                 </Button>
//                             </Link> */}
//                 {/* <Link to={'Creators'} spy={true} smooth={true}>
//                                 <Button sx={{ color: 'white', textTransform: 'none', fontWeight: 'bold' }}>
//                                     Creators
//                                 </Button>
//                             </Link> */}

//                 <Button 
//                   sx={{
//                     color: 'white',
//                     textTransform: 'none',
//                     fontWeight: 'bold',
//                     position: "relative",


//                   }}
//                   className='about_us'
//                   // onClick={() => navigate('/About Us')}
//                 >
//                   <a  className='aboutt' style={{
//                     textDecoration: 'none', color: 'white', textWrap: "nowrap", fontSize: "20px", 
//                   }}>

//                     About Us
//                   </a>
//                   <Box sx={{
//                     position: "absolute",
//                     top: "100%",
//                     left: "0px",
//                     fontSize: "20px",
//                     background: "#2F133C",
//                     width: '180px',
//                     height: '250px',
//                     fontSize: '40px',

//                   }}
//                     className="dropdowndata">
//                     <Button className='aboutt'
//                     // onClick={()=>navigate("/ourmissions")}
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',
//                       }}
//                       style={{
//                         textDecoration: 'none', color: 'white', textWrap: "nowrap", padding: '10px'
//                       }}
//                     onClick={() => navigate('/OurMissions')}
//                     >


//                         Our Missions
//                     </Button>
//                     <Button
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',
//                       }}

//                     // onClick={() => navigate('/about')}
//                     >

//                       <a style={{
//                         textDecoration: 'none', color: 'white', textWrap: "nowrap",
//                       }}
//                       onClick={()=> navigate('/vision')}>


//                         Vision Statement
//                       </a>

//                     </Button>
//                     <Button
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',
//                       }}
//                     // onClick={() => navigate('/about')}
//                     >

//                       <a  style={{
//                         textDecoration: 'none', color: 'white', textWrap: "nowrap", padding: '10px'
//                       }}>

//                         How it Works
//                       </a>

//                     </Button>

//                   </Box>
//                 </Button>
//                 <Button
//                   sx={{
//                     color: 'white',
//                     textTransform: 'none',
//                     fontWeight: 'bold',
//                     position: "relative",

//                   }}
//                   className='about_us'
//                   onClick={() => navigate('/About Us')}
//                 >
//                   <a style={{
//                     textDecoration: 'none', color: 'white', fontSize: "20px",
//                   }}>

//                     Our Services
//                   </a>
//                   <Box sx={{
//                     position: "absolute",
//                     top: "100%",
//                     left: "0px",
//                     fontSize: "20px",
//                     background: "#2F133C"
//                   }}
//                     className="dropdowndata">
//                     <Button
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',
//                       }}
//                     // onClick={() => navigate('/team')}
//                     >

//                       <a  style={{
//                         textDecoration: 'none', color: 'white', textWrap: "nowrap", padding: '10px'
//                       }}>

//                         Movie Professionals
//                       </a>
//                     </Button>
//                     <Button
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',

//                       }}
//                     // onClick={() => navigate('/about')}
//                     >

//                       <a  style={{
//                         textDecoration: 'none', color: 'white', textWrap: "nowrap", padding: '10px',
//                       }}>

//                         Aspiring Talents
//                       </a>

//                     </Button>
//                     <Button
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',
//                       }}
//                     >

//                       <a  style={{
//                         textDecoration: 'none', color: 'white',
//                       }}>

//                         Audition
//                       </a>

//                     </Button>
//                     <Button
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',
//                       }}
//                     // onClick={() => navigate('/about')}
//                     >

//                       <a  style={{
//                         textDecoration: 'none', color: 'white', padding: '10px'
//                       }}>

//                         Corporations
//                       </a>

//                     </Button>


//                     <Button
//                       sx={{
//                         color: 'white',
//                         textTransform: 'none',
//                         fontWeight: 'bold',
//                       }}
//                     >

//                       <a  style={{
//                         textDecoration: 'none', color: 'white',
//                       }}>

//                         Community
//                       </a>

//                     </Button>

//                   </Box>
//                 </Button>
//                 <Button
//                   sx={{
//                     color: 'white',
//                     textTransform: 'none',
//                     fontWeight: 'bold',
//                   }}
//                 >

//                   <a  style={{
//                     textDecoration: 'none', color: 'white', fontSize: "20px",
//                   }}>

//                     Blog     </a>
//                 </Button>
//                 <Button
//                   sx={{
//                     color: 'white',
//                     textTransform: 'none',
//                     fontWeight: 'bold',
//                   }}
//                 >

//                   <a  style={{
//                     textDecoration: 'none', color: 'white', fontSize: "20px",
//                   }}>

//                     Contact Us     </a>
//                 </Button>
//               </Box>
//             </Box>
//             {/* {url === '' ? (
//               <Button
//                 onClick={() => window.open('https://app.myreeldream.ai/')}
//                 sx={{
//                   backgroundColor: '#3770FF',
//                   color: 'white',
//                   border: '2px solid #3770FF',
//                   borderRadius: '50px',
//                   padding: '0.5% 2%',
//                   textTransform: 'none',
//                   '&:hover': { color: '#3770FF', border: '2px solid #3770FF' },
//                   fontSize: { md: '15px', sm: '10px', xs: '10px' },
//                 }}
//               >
//                 Launch App
//               </Button>
//             ) : (
//               ''
//             )} */}
//           </Toolbar>
//         </AppBar>
//         <Box component='nav'>
//           {/* <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer> */}
//         </Box>
//         <Box component='main' sx={{
//           // padding: '0 1%', 
//           width: '100%'
//         }}>
//           <Toolbar />
//           {children}
//         </Box>
//       </Box>
//       <CTA />
//       <Footer />
//       <div style={{ backgroundColor: '#181818', padding: '1%' }}>
//         <p
//           style={{
//             color: '#BEBEBE',
//             textAlign: 'center',
//             margin: '0',
//             fontFamily: 'Poppins',
//             fontSize: '15px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           Copyright &copy; {new Date().getFullYear()},{' '}
//           <strong> MYREELDREAM. </strong> All rights reserved.
//           <p
//             style={{ color: '#BEBEBE' }}
//             onClick={() => navigate('/privacy-policy')}
//           >
//             {' '}
//             <strong style={{ cursor: 'pointer' }}>
//               {' '}
//               &nbsp; Privacy policy
//             </strong>
//           </p>
//         </p>
//       </div>
//     </>
//   );
// }

// ElevateAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window2: PropTypes.func,
// };
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/artboard_2_copy_3_2_.png';
import text from '../images/text.png';
import { CardMedia, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import CTA from './CTA';
import Footer from './Footer';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import headlogo from "../images/headlogo.png"
import '../App.css'

const drawerWidth = 240;

export default function ElevateAppBar(props) {
  const { window2, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const url = window.location.href.split('/')[3];
  console.log(url);

  return (
    <>

      <Box className="app" sx={{ display: 'flex', }}>
        <CssBaseline />
        <AppBar
          component='nav'
          sx={{
            background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',
            color: 'white',
            boxShadow: 'none',
            padding: '0% 1.5%',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', width: "100%" }}>
              <CardMedia
                component='img'
                onClick={() => navigate('/')}
                image={headlogo}
                sx={{
                  height: '30px',
                  cursor: 'pointer',
                  width: '270px',
                  marginLeft: '10px',
                  marginRight: '2vw',
                }}
              />
              <Box sx={{ display: { xs: 'none', sm: 'block', marginLeft: 'auto', } }}>
                <Button
                  sx={{

                    color: 'white',
                    fontSize: '16px',
                    textTransform: 'none',
                    fontWeight: '600',
                    position: "relative",
                    '&:hover': {
                      Color: 'blue',
                    },
                  }}
                  className='about_us'
                >
                  <a className='aboutt'>About Us</a>
                  <Box sx={{
                    position: "absolute",
                    top: "100%",
                    left: "0px",
                    fontSize: "20px",
                    padding: "5px",
                    background: "#2F133C",
                    width: '180px',
                    borderRadius: "10px"

                  }}
                    className="dropdowndata">
                    <Button className='aboutt hh ani' onClick={() => navigate('/OurMissions')} sx={{ color: 'white', }}>
                      Our Missions
                    </Button>
                    <Button className='hh ani' onClick={() => navigate('/vision')} sx={{ color: 'white', }}>
                      Vision Statement
                    </Button>
                    <Button className='hh ani' sx={{ color: 'white', }}>
                      How it Works
                    </Button>
                  </Box>
                </Button>
                <Button
                  sx={{

                    color: 'white',
                    textTransform: 'none',
                    fontWeight: '600',
                    position: "relative",
                    '&:hover': {

                    },
                  }}
                  className='about_us'
                  onClick={() => navigate('/About Us')}
                >
                  <a className='hh ani' sx={{ color: 'white', }} style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>
                    Our Services
                  </a>
                  <Box sx={{
                    position: "absolute",
                    top: "100%",
                    left: "0px",
                    fontSize: "20px",
                    background: "#2F133C",
                    width: '180px',
                    borderRadius: "10px"
                  }}
                    className="dropdowndata">
                    <Button className='hh ani' sx={{ color: 'white', }}>
                      Movie Professionals
                    </Button>
                    <Button className='hh ani' sx={{ color: 'white', }}>
                      Aspiring Talents
                    </Button>
                    <Button className='hh ani' sx={{ color: 'white', }}>
                      Audition
                    </Button>
                    <Button className='hh ani' sx={{ color: 'white', }}>
                      Corporations
                    </Button>
                    <Button className='hh ani' sx={{ color: 'white', }}>
                      Community
                    </Button>
                  </Box>
                </Button>
                <Button sx={{ color: 'white', textTransform: 'none', fontWeight: '600', '&:hover': { color: 'blue' } }}>
                  <a className='hh ani' style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>Blog</a>
                </Button>
                <Button sx={{ color: 'white', textTransform: 'none', fontWeight: '600', '&:hover': { color: 'blue' } }}>
                  <a className='hh ani' style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>Contact Us</a>
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='main' sx={{ width: '100%' }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
      <CTA />
      <Footer />
      <div style={{ backgroundColor: '#181818', padding: '1%' }}>
        <p style={{ color: '#BEBEBE', textAlign: 'center', margin: '0', fontFamily: 'Poppins', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Copyright &copy; {new Date().getFullYear()}, <strong> MYREELDREAM. </strong> All rights reserved.
          <p style={{ color: '#BEBEBE' }} onClick={() => navigate('/privacy-policy')}>
            <strong style={{ cursor: 'pointer' }}> &nbsp; Privacy policy </strong>
          </p>
        </p>
      </div>
    </>
  );
}

ElevateAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window2: PropTypes.func,
};
