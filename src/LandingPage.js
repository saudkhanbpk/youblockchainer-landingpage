import React, {useState} from 'react'
import About from './components/About'
import Artists from './components/Artists'
import Avail from './components/Avail'
import Brands from './components/Brands'
import Communities from './components/Communities'
import CountUp from './components/CountUp'
import Herosection from './components/Herosection'
import { Box, Typography, Button } from '@mui/material'
import BasicModal from './components/Modal'

function LandingPage() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div data-aos="zoom-in"><Herosection /></div>
            {/* <Brands />
            <Communities /> */}
            {/* <Artists /> */}
            <Avail />
            <Box sx={{padding:'10% 25%'}}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign:'center', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '2rem', sm: '2rem', xs: '2rem' } }}><strong style={{ color: '#3770FF' }}>Get Started and Explore More</strong><br/> Join the Community as a new user or Log In to Access Exclusive Content as an existing user</Typography>
            <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
            <Box sx={{display:'flex',marginTop:'5%', justifyContent:'center', flexDirection:'column'}}>
                <p style={{fontSize:'12px'}}>New to this website?</p>
            <Button onClick={() => setOpen(true)} sx={{ backgroundColor: '#3770FF', color: 'white',  border: '2px solid #3770FF', borderRadius: '50px', padding: '2% 2%', textTransform: 'none', '&:hover': { color: '#3770FF', border: '2px solid #3770FF' }, fontSize: { md: '15px', sm: '10px', xs: '10px' } }}>Get started</Button>
            </Box>
            <Box sx={{display:'flex',marginTop:'5%', justifyContent:'center', flexDirection:'column'}}>
                <p style={{fontSize:'12px'}}>Already have an account?</p>
            <Button onClick={() => window.open('https://app.myreeldream.ai/')} sx={{ backgroundColor: 'white', color: '#3770FF',  border: '2px solid #3770FF', borderRadius: '50px', padding: '2% 2%', textTransform: 'none', '&:hover': { bgcolor: '#3770FF', color:'white', border: '2px solid #3770FF' }, fontSize: { md: '15px', sm: '10px', xs: '10px' } }}>Access account</Button>
            </Box>
            </Box>
            </Box>
<BasicModal open={open} setOpen={setOpen} />
        </>
    )
}

export default LandingPage