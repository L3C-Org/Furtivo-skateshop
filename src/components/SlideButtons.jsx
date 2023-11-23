import './slidebuttons.css'
import { useState } from 'react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideButtons = () => {
const [currentImageIndex, setCurrentImageIndex] = useState(0)

const handleClick = () =>{
    const newIndex = (currentImageIndex + 1) % heroImages.length
    setCurrentImageIndex(newIndex)
}

    const heroImages = [
        "/img/Landing-Page/img_hero_1.webp",
        "/img/Landing-Page/img_hero_2.jpg",
        "/img/Landing-Page/img_hero_3.webp"
    ]

    return (
        <div id='buttons-hero-container'>
            <Slide>
                <div id='slide-buttons-container'>
                    <button id='slide-button'>SKATE</button>
                    <button id='slide-button'>CLOTHES</button>
                    <button id='slide-button'>REISSUE</button>
                    <button id='slide-button'>FURTIVO!</button>
                    <button id='slide-button'>BRANDS</button>

                </div>
            </Slide>
            
                <div id='hero-container'>
                    <div onClick={handleClick}
                    className="hero-slide" 
                    style={{ 'backgroundImage': `url(${heroImages[currentImageIndex]})` }}>
                        <div id='hero-text'>
                            <h2>100% SKATE FOCUSED</h2>
                            <h2>100% SKATER OWNED</h2>
                        </div>

                    </div>
                  {/*   <div id='hero-container'>
                        <div className="hero-slide" style={{ 'backgroundImage': `url(${heroImages[1]})` }}></div>
                    </div>
                    <div id='hero-container'>
                        <div className="hero-slide" style={{ 'backgroundImage': `url(${heroImages[2]})` }}></div>
                    </div> */}
                </div>
            
        </div>
    )
}
export default SlideButtons;