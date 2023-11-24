import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './shoescarr.css'

const ShoesCarr = () => {

    const images = [
        "/img/Landing-Page/img_shoes_1.jpg",
        "/img/Landing-Page/img_shoes_2.jpg",
        "/img/Landing-Page/img_shoes_3.jpg",
        "/img/Landing-Page/img_shoes_4.jpg",
    ];

    return (
        <section>
            <h2 className='title'>LATEST SHOES</h2>
            <div className="container">
                <Slide>
                    <div className="each-slide-effect">
                        <div className='img-slide' style={{ 'backgroundImage': `url(${images[0]})` }}>
                        </div>
                        <p className='sub-title'>éS Creager Masculino black-grey </p>
                        <p className='description-price'>125,99 &euro;</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide' style={{ 'backgroundImage': `url(${images[1]})` }}>
                        </div>
                        <p className='sub-title'>ÉS X VIREO CHOMP ON KICKS TRIBO ZAPATILLA (WHITE BLACK YELLOW)</p>
                        <p className='description-price'>123,99 &euro;</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide' style={{ 'backgroundImage': `url(${images[2]})` }}>
                        </div>
                        <p className='sub-title'>ETNIES Marana x Michelin Black black skateboarding shoes</p>
                        <p className='description-price'>98,90 &euro;</p>
                    </div>
                    <div className="each-slide-effect">
                        <div className='img-slide' style={{ 'backgroundImage': `url(${images[3]})` }}>

                        </div>
                        <p className='sub-title'>Etnies Windrow Vulc Mid G/W</p>
                        <p className='description-price'>90,00 &euro;</p>

                    </div>
                </Slide>
            </div>
        </section>

    );
};
export default ShoesCarr;