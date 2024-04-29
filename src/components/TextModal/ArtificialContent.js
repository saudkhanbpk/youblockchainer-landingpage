import React from 'react'
import ModalData from '../Modals/Modal'
import { Typography } from '@mui/material'

const ArtificialContent = ({ handleClose, open, classes }) => {
    return (
        <>
            <ModalData open={open} onClose={handleClose}>
                <Typography variant="body1" className={classes}>
                    <strong className='strong'>Artificial Intelligence (AI) </strong><br />
                    <strong>Opening Scene</strong><br />
                    - Visual: Introduce a scene with a filmmaker sitting at a desk, struggling with writer's block while staring at a blank screen.   - Voiceover: "Meet Sarah, an aspiring filmmaker facing a common challenge: writer's block. But with the power of Artificial Intelligence, her creativity is about to soar."<br />
                    <strong>Demonstrating AI Assistance</strong><br />
                    - Visual: Show Sarah interacting with an AI assistant on the MyReelDream platform, typing in her ideas and receiving instant feedback and suggestions.
                    - Voiceover: "With AI-driven assistance, Sarah effortlessly generates compelling movie pitches, crafts detailed scripts, and refines her dialogue—all with the help of our intuitive AI assistant."<br />
                    <strong>Showcasing Collaboration</strong><br />
                    - Visual: Display scenes of Sarah collaborating with other filmmakers and industry experts through the platform's AI-powered collaboration tools.
                    - Voiceover: "Through seamless collaboration with fellow creators, Sarah brings her vision to life, supported by AI-powered tools that enhance creativity and streamline the filmmaking process."<br />
                    <strong>Closing Message</strong><br />
                    - Visual: Conclude with Sarah typing "The End" on her script, accompanied by a sense of accomplishment and satisfaction.
                    - Voiceover: "With Artificial Intelligence as her creative companion, Sarah embarks on a filmmaking journey filled with endless possibilities. Welcome to the future of filmmaking with MyReelDream.
                </Typography>
            </ModalData>
        </>
    )
}

export default ArtificialContent