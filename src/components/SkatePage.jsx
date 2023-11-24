import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './skatecarr.css'
/* css is on SKATECARR.CSS */
const SkateCarr = () => {
    const skates = [
        "public/img/Landing-Page/img_skate_1.webp",
        "public/img/Product-Page/img_product_2.jpg",
        "public/img/Product-Page/img_product_3.jpg",
        "public/img/Product-Page/img_extras_1.jpg",
        "public/img/Product-Page/img_extras_2.webp",
        "public/img/Product-Page/img_extras_3.jpg",
        "public/img/Product-Page/img_extras_4.jpg",
    ];

    return (
        <section className='main'>
            <h2 className='title'>Product Page</h2>
            <div className="container-page">

                <div className="each-slide-effect">
                    <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[0]})` }}>
                    </div>
                </div>
                <div className='text'>
                    <h3>MISFITS Santa Monica Airlines Natas evil cat candy reissue</h3>
                    <p>110,00 €</p>
                    <div className="buy">
                        <button id="slide-button">Add to cart</button>
                        <input type="number" placeholder='1' />
                        <span>ICON BIN</span>
                    </div>
                    <div className="description">
                        <h4><span className='bold'>Marca:</span>Stereo Skateboards</h4>
                        <h4><span className='bold'>Modelo:</span>15 years Anniversary</h4>
                        <h4><span className='bold'>Ano:</span>2007</h4>
                        <h4><span className='bold'>Estado:</span>Marcas de almacenaje (fotos)</h4>
                    </div>
                    <div className="delivery">
                        <p>Se entrega con bolsa espacial para conservacion.</p>
                        <p>Puedes patinarla o puedes coleccionarla.</p>
                    </div>
                    <div className="may-you-like">
                        <h2>You may also like</h2>
                        <Slide>
                            <div className="each-slide-effect">
                                <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[3]})` }}>
                                </div>
                                <p className='sub-title'>POWELL PERALTA CABALLERO '97</p>
                                <p className='description-price'>110,00 &euro</p>
                            </div>

                            <div className="each-slide-effect">
                                <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[4]})` }}>
                                </div>
                                <p className='title'>TITLE</p>
                                <p className='price'>PRICE</p>
                            </div>
                            <div className="each-slide-effect">
                                <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[5]})` }}>
                                </div>
                                <p className='title'>TITLE</p>
                                <p className='price'>PRICE</p>
                            </div>
                            <div className="each-slide-effect">
                                <div className='img-slide-skate' style={{ 'backgroundImage': `url(${skates[6]})` }}>
                                </div>
                                <p className='title'>TITLE</p>
                                <p className='price'>PRICE</p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default SkateCarr;