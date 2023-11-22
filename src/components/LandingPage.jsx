import './landingpage.css'
import BlogCarr from './BlogCarr'
import Footer from './Footer'
import NavBar from './NavBar'
import ShoesCarr from './ShoesCarr'
import SkateCarr from './SkateCarr'
import SlideButtons from './SlideButtons'

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <SlideButtons />
            <SkateCarr />
            <ShoesCarr />
            <BlogCarr />
            <Footer />
        </div>

    )
}

export default LandingPage;