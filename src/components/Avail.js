import { CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import avail1 from '../images/avail1.png'
import avail2 from '../images/avail2.png'
import avail3 from '../images/avail3.png'
import avail4 from '../images/avail4.png'


function Avail() {
    return (
        <div id='Consumers' style={{ marginTop: '3%', padding: '3%' }}>
            <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', margin: '0', padding: '0', fontSize: { md: '4rem', sm: '2rem', xs: '2rem' } }}><strong style={{ color: '#3770FF' }}>Consumers</strong> Get connected to organizations to sell your content</Typography>
            <div data-aos="fade-up">
                <Grid container spacing={3} sx={{ marginTop: '5%' }}>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            <CardMedia component='img' image={avail1} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} />
                            <h2 style={{ margin: '0', padding: '0' }}>Lorem</h2>
                            <p style={{ fontSize: '14px' }} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure ea rerum incidunt soluta ipsa reiciendis et illum sed autem enim inventore modi, dolores ipsam sapiente! Aliquid commodi praesentium voluptates a et.
                            </p>
                        </CardContent>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            <CardMedia component='img' image={avail2} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} />
                            <h2 style={{ margin: '0', padding: '0' }}>Ipsum</h2>
                            <p style={{ fontSize: '14px' }} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique incidunt porro illo optio, officiis, qui ullam ut animi commodi in inventore eaque dignissimos cumque repellendus quos aliquam sequi ex ipsum.
                            </p>
                        </CardContent>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            <CardMedia component='img' image={avail3} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} />
                            <h2 style={{ margin: '0', padding: '0' }}>Dolar</h2>
                            <p style={{ fontSize: '14px' }} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus repellat laborum praesentium. Repudiandae atque vitae voluptates accusantium sequi deleniti libero ullam eum distinctio, culpa minus?
                            </p>
                        </CardContent>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <CardContent sx={{ backgroundColor: 'white', height: '100%', borderRadius: '20px', boxShadow: 'rgba(235, 235, 235, 0.77) 0px 7px 29px 0px' }}>
                            <CardMedia component='img' image={avail4} sx={{ height: '100px', width: 'auto', marginTop: '-4rem' }} />
                            <h2 style={{ margin: '0', padding: '0' }}>Sit</h2>
                            <p style={{ fontSize: '14px' }} >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis odit quas, adipisci, error esse iure reiciendis, iste voluptates illo labore dolor nesciunt eveniet. Laudantium non necessitatibus vero dolorem qui ullam mollitia!
                            </p>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Avail