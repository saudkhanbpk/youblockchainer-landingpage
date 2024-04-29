import React from 'react'
import ModalData from '../Modals/Modal'
import { Typography } from '@mui/material'

const TexttoVideo = ({ handleClose, open, classes }) => {
    return (
        <>
            <ModalData open={open} onClose={handleClose}>
                <Typography variant="body1" className={classes}>
                    <strong className='strong'>ATex-To-Video Technologies</strong><br />
                    <strong>Opening Scene</strong><br />
                    - Visual: Introduce a scene where Sarah's script comes to life as animated visuals on a computer screen.
                    - Voiceover: "Imagine seeing your words transform into captivating visuals before your eyes. With Text-to-Video technologies, the possibilities are limitless."
                    <br />
                    <strong>Demonstrating Scene Generation</strong><br />
                    - Visual: Show Sarah's written script being transformed into dynamic visual scenes using the platform's Text-to-Video technologies.
                    - Voiceover: "Text-to-Video technologies seamlessly translate Sarah's written script into immersive visual experiences, complete with customizable characters, settings, and special effects."<br />
                    <strong>Customization and Realism</strong><br />
                    - Visual: Highlight Sarah's ability to customize visual elements and enhance realism through advanced animation techniques.
                    - Voiceover: "With a wide range of customizable options and realistic animation capabilities, Sarah has full control over the look and feel of her film, ensuring it resonates with audiences on a profound level."<br />
                    <strong>Closing Message</strong><br />
                    - Visual: Conclude with Sarah watching a preview of her film, filled with pride and excitement at seeing her vision come to life.
                    - Voiceover: "Thanks to Text-to-Video technologies, Sarah's imagination knows no bounds. Join her on a journey of creativity and discovery with MyReelDream."
                    <br />
                </Typography>
            </ModalData>
        </>
    )
}

export default TexttoVideo;