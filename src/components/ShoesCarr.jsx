import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './shoescarr.css'

const ShoesCarr = () => {

    return(
      

    const images = [
        "public/img/Landing-Page/img_shoes_1.jpg",
        "public/img/Landing-Page/img_shoes_2.jpg",
        "public/img/Landing-Page/img_shoes_3.jpg",
        "public/img/Landing-Page/img_shoes_4.jpg",
    ];


    return (
            <section>
            <h2>latasted shoes</h2>
            <div className="container">
        <Slide>
            <div className="each-slide-effect">
                <div className='img-slide' style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
                    <p>TITLE</p>
                    <p>PRICE</p>
            </div>
            <div className="each-slide-effect">
                <div className='img-slide' style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
                <p>TITLE</p>
                    <p>PRICE</p>
            </div>
            <div className="each-slide-effect">
                <div className='img-slide' style={{ 'backgroundImage': `url(${images[2]})` }}>
            </div>  
            <p>TITLE</p>
                    <p>PRICE</p>    
                </div>
                <div className="each-slide-effect">
                <div className='img-slide' style={{ 'backgroundImage': `url(${images[3]})` }}>
                    
                </div>
                <p>TITLE</p>
                    <p>PRICE</p>
            </div>
        </Slide>
        </div>
            </section>
    );
};
export default ShoesCarr;