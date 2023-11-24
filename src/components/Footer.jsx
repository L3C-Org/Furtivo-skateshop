import './footer.css'
import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer className='footer'>
                <img className= 'f-logo' src='..\img\_Logo\Size = L, Variant = Small.png' alt='F logo' />
                <div className="text">
                <p className='footer-text'>Info & Shipping </p>
                <p className='footer-text'>About Furtivo!</p>
                <p className='footer-text'>Terms & Services</p>      
                <p className='footer-text'>Cookie policies</p>
                </div>
            </footer>
            <div className="powered">
                <p className="powered-by">Powered by:</p>
                <p className="powered-by-name"><a href="http:#"><i class="fa-brands fa-github"></i>Clara</a></p>
                <p className="powered-by-name"><a href="https://github.com/MohamedTaha91"><i class="fa-brands fa-github"></i>Mohamed Mamdouh Taha</a></p>
                <p className="powered-by-name"><a href="https://github.com/Rgerotto"><i class="fa-brands fa-github"></i>Rafael Gerotto Coelho</a></p>
            </div>
            </div>
    )
}
export default Footer;