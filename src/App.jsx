import { Route, Routes } from "react-router-dom"
import Home from "./components/Pages/home/Home"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
import About from "./components/Pages/about/About"
import Blog from "./components/Pages/Blog/Blog"
import Events from "./components/Pages/events/Events"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/event" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
