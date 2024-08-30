import './slidebuttons.css'
import { useState } from 'react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const SlideButtons = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleClick = () => {
        const newIndex = (currentImageIndex + 1) % heroImages.length
        setCurrentImageIndex(newIndex)
    }

    const heroImages = [
        "/img/Landing-Page/img_hero_1.webp",
        "/img/Landing-Page/img_hero_2.jpg",
        "/img/Landing-Page/img_hero_3.webp"
    ]
    return (
        <>
            <div className='header-container'>
                    <div className='slide-buttons-container'>
                        <button className='btn-red'>SKATE</button>
                        <button className='btn-red'>CLOTHES</button>
                        <button className='btn-red'>REISSUE</button>
                        <button className='btn-red'>FURTIVO!</button>
                        <button className='btn-red'>BRANDS</button>
                    </div>

                <Slide>
                    <div className='hero-container'>
                        <div onClick={handleClick}
                            className="hero-slide"
                            style={{ 'backgroundImage': `url(${heroImages[currentImageIndex]})` }}>
                            <div className='hero-text'>
                                <h2 className='text-h2'>100% SKATE FOCUSED</h2>
                                <h2 className='text-h2'>100% SKATER OWNED</h2>
                            </div>

                        </div>
                    </div>
                </Slide>

            </div>
        </>
    )
}
export default SlideButtons;