import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './skatecarr.css'

const SkateCarr = () => {
    const skates = [
        "public/img/Landing-Page/img_skate_1.webp",
        "public/img/Landing-Page/img_skate_2.webp",
        "public/img/Landing-Page/img_skate_3.webp",
        "public/img/Landing-Page/img_skate_4.webp",
    ];

    return (
        <section>
            <h2>LATEST REISSUES</h2>
            <div className="container">
                <Slide>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[0]})` }}>
                        </div>
                        <p className='title'>TITLE</p>
                        <p className='price'>PRICE</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[1]})` }}>
                        </div>
                        <p className='title'>TITLE</p>
                        <p className='price'>PRICE</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[2]})` }}>
                        </div>
                        <p className='title'>TITLE</p>
                        <p className='price'>PRICE</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[3]})` }}>

                        </div>
                        <p className='title'>TITLE</p>
                        <p className='price'>PRICE</p>
                    </div>
                </Slide>
            </div>
        </section>
    );
}

export default SkateCarr;