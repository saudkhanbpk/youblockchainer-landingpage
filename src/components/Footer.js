import { CardMedia, Grid } from '@mui/material'
import React, { useState } from 'react'
import logo from '../images/logo.png'
import BasicModal from './Modal';

function Footer() {
    const [open, setOpen] = useState(false);
    const [num, setNum] = useState(0)
    const onClick = ((e) => {
        setNum(e.target.id);
        setOpen(true)
    })


    return (
        <div style={{ backgroundColor: 'black', padding: '6% 3%' }}>
            <Grid container>
                <Grid item md={2} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia component='img' image={logo} sx={{ height: '70px', width: 'auto' }} />
                    <p style={{ fontSize: '12px', color: '#BEBEBE', textAlign: 'center' }}> Lorem ipsum dolor sit amet consectetur. </p>
                </Grid>
                <Grid item md={8} xs={12} sx={{ textAlign: 'center' }} >
                    <p id='0' onClick={onClick} style={{ color: '#BEBEBE', cursor: 'pointer' }} >Privacy Policy</p>
                    <p id='1' onClick={onClick} style={{ color: '#BEBEBE', cursor: 'pointer' }} >Terms of use</p>
                    <p id='2' onClick={onClick} style={{ color: '#BEBEBE', cursor: 'pointer' }} >Security Policy</p>

                </Grid>
                <Grid item md={2} xs={12} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ color: '#BEBEBE', margin: '0', padding: '0' }} >Contact Us</h4>
                    <p style={{ fontSize: '12px', color: '#BEBEBE' }} onClick={() => window.open("mailto:support@youblockchainer.xyz", "_blank")}> Email - <strong style={{ cursor: 'pointer' }} >support@ublockchainer.xyz</strong></p>

                </Grid>
            </Grid>
            <BasicModal open={open} setOpen={setOpen} num={num} />
        </div>
    )
}

export default Footer