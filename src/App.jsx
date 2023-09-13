import { Route, Routes, useLocation } from "react-router-dom"
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
import HowToParticipate from "./components/Pages/howItWorks.jsx/HowToParticipate"
import Dashboard from "./components/Pages/dashboard/Dashboard"
import MyProfile from "./components/Pages/dashboard/profile/MyProfile"
import MyTickets from "./components/Pages/dashboard/tickets/MyTickets"
import Participation from "./components/Pages/dashboard/participation/Participation"
import MyReviews from "./components/Pages/dashboard/reviews/MyReviews"
import Certifications from "./components/Pages/dashboard/certifications/Certifications"
import SavedEvents from "./components/Pages/dashboard/savedEvents/SavedEvents"
import Blogs from "./components/Pages/dashboard/blogs/Blogs"
import EditProfile from "./components/Pages/dashboard/profile/EditProfile"
import OrganizerDashboard from "./components/Pages/organizerDashboard/OrganizerDashboard"
import Users from "./components/Pages/organizerDashboard/user/Users"
import Profile from "./components/Pages/organizerDashboard/organizerProfile/Profile"
import AddEvent from "./components/Pages/organizerDashboard/addEvent/AddEvent"
import OrgDashboard from "./components/Pages/organizerDashboard/ordashboard/OrgDashboard"
import EditMyProfile from "./components/Pages/organizerDashboard/organizerProfile/EditMyProfile"
import Notfound from "./components/Pages/Notfound"
import EventOrgDetails from "./components/Pages/organizerDashboard/eventDetails/EventOrgDetails"
import RewardDetails from "./components/Pages/organizerDashboard/eventDetails/buttonPages/rewards/othersPages/RewardDetails"





function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isOrganizerDashboardPage = location.pathname.startsWith("/organizer-dashboard");

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
          <Route path="/how-to-participate" element={<HowToParticipate />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/regi-otp" element={<RegistrationOTP />} />
          <Route path="/get-otp" element={<GetOtp />} />
          <Route path="*" element={<Notfound />} />
          {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<MyProfile />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="tickets" element={<MyTickets />} />
            <Route path="participation" element={<Participation />} />
            <Route path="reviews" element={<MyReviews />} />
            <Route path="certification" element={<Certifications />} />
            <Route path="saved-events" element={<SavedEvents />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
          {/*ORGANIZER DASHBOARD */}
          <Route path="/organizer-dashboard" element={<OrganizerDashboard />}>
            <Route path="users" element={<Users />} />
            <Route path="my-profile" element={<Profile />} />
            <Route path="add-event" element={<AddEvent />} />
            <Route path="org-dashboard" element={<OrgDashboard />} />
            <Route path="org-dashboard" element={<OrgDashboard />} />
            <Route path="edit-my-profile" element={<EditMyProfile />} />
            <Route path="event-org-details" element={<EventOrgDetails />} />
            <Route path="others-details" element={<RewardDetails />} />
          </Route>
        </Routes>
        {(!isDashboardPage && !isOrganizerDashboardPage) && <Footer />}
      </div>
    </>
  )
}

export default App
