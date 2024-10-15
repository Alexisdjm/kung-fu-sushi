import texts from '../texts';
import Slider from "react-slick";
import images from '../images/exporting'
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rotate = () => {
    const [degree, setDegree] = useState(0)
    const [hidden, setHidden] = useState(false)
    const [initial, setInitial] = useState(true)
    const [pic, setPic] = useState(images.dish1)
    const [text, setText] = useState(texts.first)
    const [sliderRef, setSliderRef] = useState(null);

    const dishes = [
        { id: 1, img: images.dish1, angle: 0, text: texts.first},
        { id: 2, img: images.dish2, angle: -60, text: texts.second},
        { id: 3, img: images.dish3, angle: 60, text: texts.third},
        { id: 4, img: images.dish4, angle: -120, text: texts.forth},
        { id: 5, img: images.dish5, angle: 120, text: texts.fifth},
        { id: 6, img: images.dish6, angle: -180, text: texts.sixth}   
      ];

      const handleDishClick = (targetAngle, dish, textt) => {
        setHidden(true)
        setDegree(targetAngle)
        setTimeout(() => {
            setText(textt)
            setPic(dish)
            setHidden(false)
        }, 500);
      };

      const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        focusOnSelect: true,
        speed: 500,
      };

      const handleClick = (index, texttt) => {
        sliderRef.slickGoTo(index);
        setInitial(false)
        setText(texttt)
      };
    
    return(
        <>
            <div className="flex-rotate">
                <div className='mobile-slider--container'>
                    <Slider ref={setSliderRef} {...settings}>
                        {dishes.map((item, index) => (
                        <div 
                        key={item.id} onClick={() => handleClick(index, item.text)}>
                            <div 
                            className={`dish-mobile--container 
                            ${initial && index === 0 ? 
                            "active-initial" : ""}`}>
                                <img 
                                loading='lazy' 
                                src={item.img}
                                alt={"image "+index} 
                                className='mobile-dish--adjustment'></img>
                            </div>
                        </div>
                        ))}
                    </Slider>
                </div>
                <div className='content-container--info'>
                    <div className={hidden ? 
                        'info-image--dish hidden' : "info-image--dish"}>
                        <img 
                        className="basic-img--proportions" 
                        loading='lazy' 
                        alt='dish' 
                        src={pic}></img>
                    </div>
                    <div className='recipe-info--box'>
                        <div className={hidden ? 
                            "recipe-info--paper  hidden" : "recipe-info--paper"}>
                            <h4>Recipe レシピ</h4>
                            <span></span>
                            <p>{text[0]}</p>
                            <span></span>
                            <h4>Seafood Flavors</h4>
                            <span></span>
                            <p>{text[1]}</p>
                        </div>
                        <button className='recipe-details--btn'>
                            <span>Recipe details</span>
                        </button>
                    </div>
                </div>
                <div className='wheel-container'>
                    <div className="cicled-table" 
                    style={{transform: `rotate(${degree}deg)`}}>
                    {dishes.map((dish, index) => (
                        <div
                            key={index}
                            className={`dish-rotate--class the-image--${index + 1}`}
                            onClick={() => 
                                handleDishClick(dish.angle, dish.img, dish.text)}
                        >
                            <img 
                            className="basic-img--proportions" 
                            src={dish.img} alt={`Dish ${index + 1}`} />
                        </div>
                    ))}
                    <span></span>
                    </div>
                </div>
                <img 
                    src={images.kanjis} 
                    className='kanjis-bg' 
                    alt='kanjis' 
                    loading='lazy'></img>
            </div>
        </>
    )
}

export default Rotate