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
import Contacts from "./components/Pages/contacts/Contacts"
import HowItWorks from "./components/Pages/howItWorks.jsx/HowItWorks"
import Register from "./components/signup-signin/Register"
import LogIn from "./components/signup-signin/LogIn"
import ForgotPassword from "./components/signup-signin/ForgotPassword"
import RegistrationOTP from "./components/signup-signin/RegistrationOTP"
import GetOtp from "./components/signup-signin/GetOtp"

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
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/regi-otp" element={<RegistrationOTP />} />
          <Route path="/get-otp" element={<GetOtp />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
