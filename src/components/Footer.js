import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import BasicModal from './Modal';

function Footer() {
    const [open, setOpen] = useState(false);
    const [num, setNum] = useState(0);

    const onClick = (e) => {
        setNum(e.target.id);
        setOpen(true);
    };

    const menus = [
        ["Home", "Movies", "Tv Shows", "Gallery", "Contact Us"],
        ["About", "Logos", "Menus", "SiteMap", "Community"],
        ["Privacy", "Rules", "Guidens", "Ai", "Movies"],
        ["Audition", "Our team", "Corporation"]
    ];





    return (
        <div style={{ background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', padding: '10px' }}>
            <Typography sx={{ textAlign: "center", color: 'white', fontSize: {xs:'40px', sm:'50px'}, fontWeight: '600', }}>MYREELDREAM</Typography>
            <Grid container rowSpacing={4} justifyContent="center" sx={{ display: 'flex', flexDirection: 'row' }}>
                {menus.map((menu, index) => (
                    <Grid item md={2} xs={12} key={index} sx={{}}>
                        {menu.map((item, subIndex) => (
                            <p key={subIndex} id={`${index * 5 + subIndex}`} onClick={onClick} style={{ color: '#BEBEBE', cursor: 'pointer' }}>
                                <p className='textdataaa' style={{ color: 'white', textDecoration: 'none' }}>{item}</p>
                            </p>
                        ))}
                    </Grid>
                ))}
                <Grid item md={2} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 className='textdataaa' style={{ color: 'white', margin: '0', padding: '0' }}>Contact Us</h4>
                    <p className='textdataaa' accordion style={{ fontSize: '12px', color: 'white', }} onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=113+B+Paola+Road,+Tarxien+1807+Malta", "_blank")}>
                        Address - <strong style={{ cursor: 'pointer' }}>113 B Paola Road, Tarxien 1807 Malta <img style={{ width: '12px' }} src="https://wallpapercave.com/wp/wp4212576.jpg" alt="Flag of Malta" /></strong>
                    </p>
                    <a className='textdataaa' href={"mailto:support@myreeldream.ai"} style={{ fontSize: '12px', color: 'white', textDecoration: 'none' }}> Email - <strong style={{ cursor: 'pointer' }}>support@myreeldream.ai</strong></a>
                </Grid>
            </Grid>
            <BasicModal open={open} setOpen={setOpen} num={num} />
        </div>
    );
}

export default Footer;
