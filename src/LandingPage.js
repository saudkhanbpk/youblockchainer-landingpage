import React from 'react'
import About from './components/About'
import Artists from './components/Artists'
import Avail from './components/Avail'
import Brands from './components/Brands'
import Communities from './components/Communities'
import CountUp from './components/CountUp'
import Herosection from './components/Herosection'

function LandingPage() {
    return (
        <>
            <div data-aos="zoom-in"><Herosection /></div>
            <Brands />
            <Communities />
            {/* <Artists /> */}
            <Avail />
        </>
    )
}

export default LandingPage