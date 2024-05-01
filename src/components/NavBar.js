import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/artboard_2_copy_3_2_.png';
import text from '../images/text.png';
import { CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import CTA from './CTA';
import Footer from './Footer';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import headlogo from "../images/headlogo.png"
import '../App.css'
import { BorderBottom } from '@mui/icons-material';

const drawerWidth = 240;

export default function ElevateAppBar(props) {
  const { window2, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuClick = () => {
    setMobileOpen(false);
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
                  marginLeft: {xs:'0px', md:'10px'},
                  marginRight: '2vw',
                }}
              />
              <Box sx={{ display: { xs: 'block', sm: 'none' }, ml: "20px" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  {mobileOpen ? <CloseIcon sx={{ color: "white", fontSize: "30px" }} /> : <MenuIcon sx={{ color: "white", fontSize: "30px" }} />}
                </IconButton>
                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { md: "none" },
                  }}
                >
                  {/* Your Drawer content here */}
                  <div style={{ backgroundColor: "#0047AB", height: "100%", width: "300px", display: "flex", justifyContent: "start", alignItems: "start", flexFlow: "column" }} >

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
                    onClick={() => navigate('/')}
                    >
                      <a className='hh ani' sx={{ color: 'white', }} style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>
                        Our Services
                      </a>
                      <Box sx={{
                        position: "absolute",
                        top: "30%",
                        left: "120px",
                        fontSize: "20px",
                        background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',
                        width: '180px',
                        // borderRadius: "10px"
                      }}
                        className="dropdowndata">
                        <Button  className='hh ani' sx={{ color: 'white', }}>
                          Movie Professionals
                        </Button>
                        <Button className='hh ani' onClick={() => navigate('/aspiring')} sx={{ color: 'white', }}>
                          Aspiring Talents
                        </Button>
                        <Button className='hh ani' onClick={() => navigate('/audition')} sx={{ color: 'white', }}>
                          Audition
                        </Button>
                        <Button onClick={() => navigate('/corporation')} className='hh ani' sx={{ color: 'white', }}>
                          Corporations
                        </Button>
                        <Button onClick={() => navigate('/community')} className='hh ani' sx={{ color: 'white', }}>
                          Community
                        </Button>
                        <Button onClick={() => navigate('/behindthescene')}  className='hh ani' sx={{ color: 'white', }}>
                          Behind The Scene
                        </Button>
                        <Button onClick={() => navigate('/annualhybrid')} className='hh ani' sx={{ color: 'white', }}>
                    Annual Hybrid AI-Human Movie Festivals
                    </Button>
                      </Box>
                    </Button>
                    <Button sx={{ color: 'white', textTransform: 'none', fontWeight: '600', '&:hover': { color: 'blue' } }}>
                      <a className='hh ani' style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>Blog</a>
                    </Button>
                    <Button
                      sx={{

                        color: 'white',
                        fontSize: '16px',
                        textTransform: 'none',
                        fontWeight: '600',
                        '&:hover': {
                          Color: 'blue',
                        },
                      }}
                      className='about_us'
                    >
                      <a className='aboutt'>About Us</a>
                      <Box sx={{
                        position: "absolute",
                        top: "30%",
                        left: "120px",
                        fontSize: "20px",
                        padding: "5px",
                        background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',
                        width: '180px',
                        // borderRadius: "10px"

                      }}
                        className="dropdowndata">
                        <Button className='aboutt hh ani' onClick={() => {
                          handleMenuClick();
                          navigate('/OurMissions');
                        }} sx={{ color: 'white', }}>
                          Our Mission
                        </Button>
                        <Button className='hh ani' onClick={() => {
                           handleMenuClick();
                           navigate('/vision')}} sx={{ color: 'white', }}>
                          Vision Statement
                        </Button>
                        <Button onClick={() => { handleMenuClick();
                        navigate('/howitworks')}} className='hh ani' sx={{ color: 'white', }}>
                          How it Works
                        </Button>
                      </Box>
                    </Button>
                    <Button sx={{ color: 'white', textTransform: 'none', fontWeight: '600', '&:hover': { color: 'blue' } }}>
                      <a className='hh ani' style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>Contact Us</a>
                    </Button>
                  </div>
                  {/* <div onClick={handleMenuClick}>Menu Item 2</div>
                  <div onClick={handleMenuClick}>Menu Item 3</div> */}
                </Drawer>
              </Box>
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
                    background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',
                    width: '180px',
                    borderRadius: "10px"

                  }}
                    className="dropdowndata">
                    <Button className='aboutt hh ani' onClick={() => navigate('/OurMissions')} sx={{ color: 'white', }}>
                      Our Mission
                    </Button>
                    <Button className='hh ani' onClick={() => navigate('/vision')} sx={{ color: 'white', }}>
                      Vision Statement
                    </Button>
                    <Button onClick={() => navigate('/howitworks')} className='hh ani' sx={{ color: 'white', }}>
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
                  // onClick={() => navigate('/')}
                >
                  <a className='hh ani' sx={{ color: 'white', }} style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>
                    Our Services
                  </a>
                  <Box sx={{
                    position: "absolute",
                    top: "100%",
                    left: "0px",
                    fontSize: "20px",
                    background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)',
                    width: '180px',
                    borderRadius: "10px"
                  }}
                    className="dropdowndata">
                    <Button className='hh ani' onClick={()=>navigate("/movieprofessional")} sx={{ color: 'white', }}>
                      Movie Professionals
                    </Button>
                    <Button onClick= {() =>navigate('/aspiring')} className='hh ani' sx={{ color: 'white', }}>
                      Aspiring Talents
                    </Button>
                    <Button  onClick={() => navigate('/audition')} className='hh ani' sx={{ color: 'white', }}>
                      Audition
                    </Button>
                    <Button onClick={() => navigate('/corporation')} className='hh ani' sx={{ color: 'white', }}>
                      Corporations
                    </Button>
                    <Button onClick={() => navigate('/community')} className='hh ani' sx={{ color: 'white', }}>
                      Community
                    </Button>
                    <Button onClick={() => navigate('/behindthescene')} className='hh ani' sx={{ color: 'white', }}>
                      Behind The Scene
                    </Button>
                    <Button onClick={() => navigate('/annualhybrid')} className='hh ani' sx={{ color: 'white', }}>
                    Annual Hybrid AI-Human Movie Festivals
                    </Button>
                  </Box>
                </Button>
                <Button sx={{ color: 'white', textTransform: 'none', fontWeight: '600', '&:hover': { color: 'blue' } }}>
                  <a onClick={() => navigate('/blog')} className='hh ani' style={{ textDecoration: 'none', color: 'white', fontSize: "16px" }}>Blog</a>
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
      <Box sx={{ borderTop: '1px solid gray', background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', }}></Box>
      <div style={{ background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', padding: '1%' }}>
        <p style={{ background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', color: 'white', textAlign: 'center', margin: '0', fontFamily: 'Poppins', fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Copyright &copy; {new Date().getFullYear()}, <strong> MYREELDREAM. </strong> All rights reserved.
          <p style={{ color: 'white' }} onClick={() => navigate('/privacy-policy')}>
            <strong style={{ cursor: 'pointer' }}> &nbsp; Privacy Policy </strong>
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
