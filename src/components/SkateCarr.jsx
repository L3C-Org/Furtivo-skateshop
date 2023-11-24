import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './skatecarr.css'

const SkateCarr = () => {
    const skates = [
        "/img/Landing-Page/img_skate_1.webp",
        "/img/Landing-Page/img_skate_2.webp",
        "/img/Landing-Page/img_skate_3.webp",
        "/img/Landing-Page/img_skate_4.webp",
    ];

    return (
        <section>
            <h2 className='title'>LATEST REISSUES</h2>
            <div className="container">
                <Slide>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[0]})` }}>
                        </div>
                        <p className='sub-title'>POWELL PERALTA CABALLERO '97</p>
                        <p className='description-price'>110,00&euro;</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[1]})` }}>
                        </div>
                        <p className='sub-title'>Powell Peralta Steve Caballero Street Reissue Black Stain '98</p>
                        <p className='description-price'>89,99&euro;</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[2]})` }}>
                        </div>
                        <p className='sub-title'>Malba Tombstone Reissue 10.24" X 29.72"</p>
                        <p className='description-price'>129,99&euro;</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[3]})` }}>

                        </div>
                        <p className='sub-title'>HOSOI SKATEBOARDS O.G. HAMMERHEAD SWIRL LIMITED DECK #80 10.5"X31"</p>
                        <p className='description-price'>114,00&euro;</p>
                    </div>
                </Slide>
            </div>
        </section>
    );
}

export default SkateCarr;