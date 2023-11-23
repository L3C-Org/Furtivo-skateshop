import './blogcarr.css'
import 'react-slideshow-image/dist/styles.css'
import React from 'react';
import { Slide } from 'react-slideshow-image';
const BlogCarr = () => {
    const Blog = [
        "public/img/Landing-Page/img_blog_1.webp",
        "public/img/Landing-Page/img_blog_2.webp",
        "public/img/Landing-Page/img_blog_3.webp",
    ];
    return (
        <div className='blog-container'>
        <h2 className='title'>LATEST BLOG ENTRIES</h2>
        <Slide>
            <div className="each-slide-effect">
                <div className='img-slide-blog' style={{ 'backgroundImage': `url(${Blog[0]})` }}>
                </div>
                <h3 className='sub-title'>Santa Cruz x Trasher</h3>
                <p className ='description-price'>El mundo del skateboarding está lleno de colaboraciones emocionantes, pero pocas pueden igualar la expectación que rodea a la alianza entre dos gigantes de la industria: Santa Cruz Skateboards y Thrasher Magazine. Esta colaboración es, sin duda, una de las más importantes del año y promete llevar la cultura del skate a nuevas alturas</p>
            </div>
            <div className="each-slide-effect">
                <div className='img-slide-blog' style={{ 'backgroundImage': `url(${Blog[1]})` }}>
                </div>
                <h3 className="sub-title">INDUSTRIES</h3>
                <p className='description-price'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

                <div className="each-slide-effect">
                <div className='img-slide-blog' style={{ 'backgroundImage': `url(${Blog[2]})` }}>
                </div>
                <h3 className="sub-title">THE SKATABLE SKATE</h3>
                <p className="description-price">This is the news about skate, this is a ux designer sending a hidden message in the design to the developers to say hi. Hi. Oops I need more text to fill this. I’m tired, just wanna go home. Sleep. The skatable skate. Just for you.</p>
            </div>
        </Slide>
        </div>
    )
}
export default BlogCarr;
