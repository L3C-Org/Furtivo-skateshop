
import BlogCarr from '../src/components/BlogCarr'
import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar'
import ShoesCarr from '../src/components/ShoesCarr'
import SkateCarr from '../src/components/SkateCarr'
import SlideButtons from '../src/components/SlideButtons'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
        <>
            <NavBar />
            <SlideButtons />
            <SkateCarr />
            <ShoesCarr />
            <BlogCarr />
            <Footer />
        </>
  )
}

export default App
