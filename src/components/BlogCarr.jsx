import './blogcarr.css'
import image_blog_1 from '/img/Landing-Page/img_blog_1.webp';
const BlogCarr= () => {
    return(
        <div className='container'>
            <h1 className='blog-header'>LATEST BLOG ENTRIES</h1>
            <div className='image_blog_1 container'>
                <img className= 'image_blog_1' src={image_blog_1}/>
                <h6 className='subtitle'>Santa Cruz x Trasher</h6>
                <p className = 'desciption'>El mundo del skateboarding está lleno de colaboraciones emocionantes, pero pocas pueden igualar la expectación que rodea a la alianza entre dos gigantes de la industria: Santa Cruz Skateboards y Thrasher Magazine. Esta colaboración es, sin duda, una de las más importantes del año y promete llevar la cultura del skate a nuevas alturas.</p>
            </div>
        </div>

    )
}
export default BlogCarr;
