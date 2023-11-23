import './footer.css'
import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';

const Footer = () => {
    return (
        <div className='footer-container' >
            <div className='footer'>
                <img className= 'f-logo' src='..\img\_Logo\Size = L, Variant = Small.png' alt='F logo' />
                <p className='info'>Info & Shipping </p>
                <p>About Furtivo!</p>
                <p>Terms & Services</p>      
                <p>Cookie policies</p>
            </div>
        </div>

    )
}
export default Footer;