import { Route, Routes } from "react-router-dom"
import Home from "./components/Pages/home/Home"
import Footer from "./components/shared/Footer"
import Navbar from "./components/shared/Navbar"
import About from "./components/Pages/about/About"
import Blog from "./components/Pages/Blog/Blog"
import Events from "./components/Pages/events/Events"
import EventPageTwo from "./components/Pages/eventPageTwo/EventPageTwo"
import MultipleEvents from "./components/Pages/multipaleEvents/MultipleEvents"
import EventDetails from "./components/Pages/eventDetails/EventDetails"

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
          <Route path="/eventTwo" element={<EventPageTwo />} />
          <Route path="/multiple-event" element={<MultipleEvents />} />
          <Route path="/event-details" element={<EventDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
