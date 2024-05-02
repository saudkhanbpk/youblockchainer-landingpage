import React, { useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import "./News.css"
import Slider from 'react-slick';
import img6 from '../images/img6.jpeg'
import img7 from '../images/img7.jpeg'
import img8 from '../images/img8.jpeg'

import { BorderTop, Padding } from '@mui/icons-material';

const useStyle = makeStyles((theme) => ({
    news: {
        color: "white",
        marginBottom: "30px",
        display: "flex",
        gap: "10px",
        fontSize: "20px",
        width:'95%',
        paddingLeft:'40px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'0px',
            width: "100%"
        
        }

    },
    empty: {
        border: "1px solid gray",
        height: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "35px"

    },
    text: {
        width: "45%",
        fontFamily: "mono",
        fontSize: "20px",
        marginTop: '-28px',
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            width: "100%"

        },
    },
    videoContainer1: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        // width: "100%",
        color: "white",
        // height: "auto",
        marginBottom: "3%",
        [theme.breakpoints.down('sm')]: {

            marginBottom: "0"
        },
    },
    video1: {
        width: "530px",
        border: "0px",
        height: "320px",
        [theme.breakpoints.down('md')]: {
            borderRadius: 0,
            width: '100%',


        },
    },
    carasoul: {
        paddingTop:'20px',
        paddingLeft:"30px",
        outline:'0px',
        '&:hover': {
            borderTop: '3px solid white',
        transition:'transform 0.5s ease-in-out',


        }
    }
}));

function Video() {
    const [isHovered2, setIsHovered2] = useState(false);
    const [mainVideo, setMainVideo] = useState("https://www.youtube.com/embed/n53ZxxwJxA0");
    const [mainTitle,setMainTitle]=useState("CHINE'S SUBMARINE GAME CHANGER")
       const [mainText, setMainText] = useState(` Our platform is governed by a decentralized network of smart contracts,
       ensuring fairness, integrity, and accountability in all interactions.
       By decentralizing decision-making and governance processes, smart contracts empower users to participate in shaping the future of our platform,
        fostering a sense of ownership, community, and collective responsibility.`);
        const [expanded, setExpanded] = useState(false);
       const handleCarouselItemClick = (videoLink, para, title) => {
           setMainVideo(videoLink);
           setMainText(para);
           setMainTitle(title);
       };
       const toggleExpand = () => {
        setExpanded(!expanded);
    };
  

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const classes1 = useStyle();

    const settings = {

        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Autoplay slides
    autoplaySpeed: 3000, // Delay between autoplay slides (in milliseconds)
    arrows: false,
    };
    const setting = {

        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Autoplay slides
        autoplaySpeed: 2000, // Delay between autoplay slides (in milliseconds)
        arrows: false,
    };
    const paragraph = [
        {
            para: `The unknown story of Greek philosopher Plato’s death may have been unveiled from a newly deciphered ancient scroll, according to Italian researchers.`,
            link: "https://www.youtube.com/embed/7cjmjOj7JlA",
            image: img7,
            title: `Scrolls discovered in Vesuvius ash reveal Plato’s burial place and final hours`,
        },
        {
            para: `Prime Minister Benjamin Netanyahu has said Israel will launch an invasion of the southern Gaza city of Rafah regardless of truce talks with Hamas.`,
            link: "https://www.youtube.com/embed/1PkO4tUcUOk" ,
            image: img8,
            title: `Israel-Gaza war: UN chief calls Israel's airstrikes in Rafah an ‘unbearable escalation’`,
        },
        {
            para: `In August 2020, Sviatlana Tsikhanouskaya was elected president of Belarus.
            Tsikhanouskaya then fled to Lithuania in 2020 after President Alexander Lukashenko deployed a severe crackdown on protests against his disputed election win.`,
            link: "https://www.youtube.com/embed/UumnYvQvOTg",
            image: img6,
            title: `Ukraine war: Exiled Belarus opposition leader speaks out against Russia’s threat `
        }
    ]

    return (
        <div className='mainbox'>
            <div className={classes1.news}>
                <p>News</p>
                <div className={classes1.empty}></div>

            </div>
            <div className={classes1.videoContainer1}>
                <div
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}>
                    {isHovered2 ? (<iframe
                        title="YouTube Video"
                        className={classes1.video1}
                        src={`${mainVideo}?autoplay=1&mute=&controls=0`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                    ) : (
                        <iframe
                            title="YouTube Video"
                            className={classes1.video1}
                            src={`${mainVideo}?autoplay=&mute=1&controls=0`}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className={classes1.text}>
                    <h2>
            {mainTitle}
                    </h2>
                    <h4 >
                       {mainText}
                    </h4>
                </div>


            </div>
            <div className='news1'>

                <Slider {...settings} style={{display:'flex', width: '100%', justifyContent:'center', marginBottom:'50px' }}>

                    {paragraph.map((item, index) => {
                        return <div className={classes1.carasoul} onClick={() => handleCarouselItemClick(item.link, item.para, item.title)} key={index}>
                            {/* <iframe
                                style={{ width: '360px' }}
                                title="YouTube Video"
                                src={item.link}
                                allow="autoplay; encrypted-media"
                                picture-in-picture
                                allowFullScreen
                            /> */}
                            <img src={item.image} style={{ width: '360px',height:'180px' }}/>
                            <Typography variant='h5' style={{ color: 'white' }}>{item.title}</Typography>
                            <Typography style={{ color: 'white' }}>
                            {expanded ? item.para : `${item.para.slice(0, 50)}...`}
                            <span onClick={toggleExpand} style={{ cursor: 'pointer', marginLeft: '5px' }}>
                                {expanded ? 'See Less' : 'See More'}
                            </span>
                            </Typography>
                        </div>
                    })

                    }
                </Slider>
            </div>
            <div className='news2'>

                <Slider {...setting} style={{display:'flex', width: '90%', justifyContent:'center', }}>

                    {paragraph.map((item, index) => {
                        return <div className='box' onClick={() => handleCarouselItemClick(item.link, item.para, item.title)} key={index}>
                            {/* <iframe
                                style={{ width:'100%' }}
                                title="YouTube Video"
                                src={item.link}
                                allow="autoplay; encrypted-media"
                                picture-in-picture
                                allowFullScreen
                            /> */}
                              <img src={item.image} style={{ width: '360px',height:'180px' }}/>
                            <Typography variant='h5' style={{ color: 'white' }}>{item.title}</Typography>
                            <Typography style={{ color: 'white' }}>
                            {expanded ? item.para : `${item.para.slice(0, 50)}...`}
                            <span onClick={toggleExpand} style={{ cursor: 'pointer', marginLeft: '5px' }}>
                                {expanded ? 'See Less' : 'See More'}
                            </span>
                            </Typography>
                        </div>
                    })

                    }
                </Slider>
            </div>


        </div>
    );
}

export default Video;
