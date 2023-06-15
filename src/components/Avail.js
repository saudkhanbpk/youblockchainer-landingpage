import { CardContent, CardMedia, Grid, Typography, Box } from '@mui/material'
import React from 'react'
import avail1 from '../images/avail1.png'
import avail2 from '../images/avail2.png'
import avail3 from '../images/avail3.png'
import avail4 from '../images/avail4.png'
import { Icon } from '@iconify/react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Avail() {
    return (
        <Box id='Consumers' sx={{ marginTop: { md: '1%', xs: '23%' }, padding: '3%' }}>
            {/* <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '4rem', sm: '2rem', xs: '2rem' } }}><strong style={{ color: '#3770FF' }}>Consumers</strong> Get connected to organizations to sell your content</Typography> */}
            <div data-aos="fade-up">
                <Grid container spacing={3} sx={{ marginTop: '5%' }}>
                    <Grid onClick={() => window.open('https://app.myreeldream.ai/')} item  md={4} sm={6} xs={12} sx={{ marginBottom: { md: '0', sm: '0', xs: '10%' }, cursor:'pointer' }} >
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            {/* <CardMedia component='img' image={avail1} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} /> */}
                            <Icon icon="eva:bulb-outline" style={{ height: '100px', width: 'auto', marginTop: '-4rem', color:'#3770FF' }} />

                            <Grid container style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
                            <Grid item md={12}>
                            <h2 style={{ margin: '0', padding: '0', display:'flex', alignItems:'center', marginBottom:'5%' }}>Ideation <ArrowForwardIcon  sx={{ cursor: 'pointer', display: { md: 'flex', xs: 'none' } }} /></h2>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            From your idea to a one minute pitch
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Generate content in minutes
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            From your 1 Minute pitch to your Synopsis
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Synopis to Full lengh script
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Story board
                            </p>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} sx={{ marginBottom: { md: '0', sm: '0', xs: '10%' } }}>
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            {/* <CardMedia component='img' image={avail2} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} /> */}
                            <Icon icon="mdi:movie-edit" style={{ height: '100px', width: 'auto', marginTop: '-4rem', color:'#3770FF' }} />
                            <Grid container style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
                            <Grid item md={12}>
                            <h2 style={{ margin: '0', padding: '0', marginBottom:'5%' }}>Pre-Production</h2>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Casting
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Location scouting
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Production schedule
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Designing sets & Costumes
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Filming on location/Studio
                            </p>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            {/* <CardMedia component='img' image={avail4} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} /> */}
                            <Icon icon="ri:movie-2-line" style={{ height: '100px', width: 'auto', marginTop: '-4rem', color:'#3770FF' }} />
                            <Grid container style={{display:'flex' , justifyContent:'center', alignItems:'center'}}>
                            <Grid item md={12}>
                            <h2 style={{ margin: '0', padding: '0', paddingBottom:'5%' }}>Post-Production & Distribution</h2>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Film Editing
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Marketing
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Distribution
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Release
                            </p>
                            </Grid>
                            <Grid item md={1}>
                            <Icon icon="charm:tick-double" width={28} height={28} color="#3770FF5c"/>
                            </Grid>
                            <Grid item md={11}>
                            <p style={{ fontSize: '14px' }} >
                            Post-release
                            </p>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </Box >
    )
}

export default Avail