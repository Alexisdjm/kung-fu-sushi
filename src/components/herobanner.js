import images from '../images/exporting'
import React from 'react';
import arrow from '../images/img/Arrow1.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {

    const settings = {
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots: true,
        arrows: false,
        focusOnSelect: true
      };

    return(
        <>
        <div className='mobile-hero--banner' 
        style={{backgroundImage: `url(${images.texture})`}}>
            <img 
            className='png-sushi--banner' 
            src={images.sushibanner} 
            alt='banner' 
            loading='lazy'></img>
            <div className='real-content--container'>
                <img 
                className='png-kanjis--banner' 
                src={images.orangekanji} 
                alt='kanji' 
                loading='lazy'></img>
                <h3>Taste the Ocean,
                One Roll at a Time...</h3>
                <a className='banner-btn' href='/'>
                    <span>Check our Menu</span>
                    <img alt='arrow' src={arrow}></img>
                </a>
            </div>
            <img src={images.vector} className='png-border'loading='lazy' alt='dots'></img>
        </div>
        <div className='hero-banner--father'>
            <div className='hero-banner-content--flex'>
                <div className='titles-container'>
                    <div className='main-message--box'><h1>Taste the Ocean, One Roll at a Time...</h1></div>
                    <h3>日本一うまい寿司</h3>
                </div>
                <div className='vertical-slider--container'>
                <Slider {...settings}>
                    <div className='vertical-slider--image-box'>
                        <img 
                        alt='vsimage' 
                        src={images.bannerslider1} 
                        className='vertical-slider--image'
                        loading='lazy'></img>
                    </div>
                    <div className='vertical-slider--image-box'>
                        <img 
                        alt='vsimage' 
                        src={images.bannerslider2} 
                        className='vertical-slider--image'
                        loading='lazy'></img>
                    </div>
                    <div className='vertical-slider--image-box'>
                        <img 
                        alt='vsimage' 
                        src={images.bannerslider3} 
                        className='vertical-slider--image'
                        loading='lazy'></img>
                    </div>
                    <div className='vertical-slider--image-box'>
                        <img 
                        alt='vsimage' 
                        src={images.bannerslider4} 
                        className='vertical-slider--image'
                        loading='lazy'></img>
                    </div>
                </Slider>
                <span></span>
                </div>
            </div>
            <span></span>
            <img src={images.dots} className='dots-banner--img'loading='lazy' alt='dots'></img>
        </div>
        </>
    )
}

export default HeroBanner