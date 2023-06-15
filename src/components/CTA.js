import { Button, Typography } from '@mui/material'
import React from 'react'

function CTA() {

    const onDownload = () => {
        fetch('MYREELDREAMS.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'MYREELDREAMS.pdf';
                alink.click();
            })
        })
    };

    return (
        <div style={{ background: 'linear-gradient(91.97deg, #002638 -39.63%, #3770FF 110.12%)', margin: '0', padding: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h2' sx={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: { md: '35px', sm: '30px', xs: '22px' }, margin: '0', padding: '0' }}><strong style={{ color: 'white' }}>MYREELDREAMS </strong></Typography>
            <p style={{ color: '#BEBEBE', margin: '0', padding: '0' }}> Lorem ipsum dolor sit. </p>
            <Button onClick={() => window.open('https://app.myreeldream.ai/')} sx={{ backgroundColor: 'white', marginTop: '3%', color: '#3770FF', border: '2px solid white', borderRadius: '50px', padding: '0.5% 2%', textTransform: 'none', fontWeight: 'bold', '&:hover': { color: 'white', border: '2px solid white' }, fontSize: { md: '15px', sm: '10px', xs: '10px' } }}>Launch App</Button>
        </div>
    )
}

export default CTA