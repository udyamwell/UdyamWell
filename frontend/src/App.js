import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
// import Navabar from './components/Navbar';
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
// import HomeNavabar from './components/HomeNavbar';
import Login from "./components/Login";
import Register from "./components/Register";
import ColorMode from "./utils/ColorMode";
import SingleCoursePage from "./components/SingleCoursePage";
import Video from "./pages/admin panel/Video";
import Profile from "./pages/Profile";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
// import NavabarMain from "./components/NavbarMain";
import VerifySucces from "./components/VerifySuccess";
import Lectures from "./pages/admin panel/Lectures";
import Users from "./pages/admin panel/Users";
import Email from "./components/Email";
import UdyamSheel from "./pages/UdyamSheel";
import UdyamSathi from "./pages/UdyamSathi";
import RequestPage from "./pages/RequestPage";
import HomeNavabar from "./components/HomeNavbar";
import DownloadApp from "./pages/DownloadApp";
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition";
import SellOnONDC from "./pages/sellOnONDC";
import ResponsePage from "./components/ResponsePage";
import UdyamDashboard from "./pages/UdyamDashboard";
import VideoUpload from "./components/videoUpload";
import VisitorsPage from "./pages/admin panel/VisitorsPage.jsx";
import WhatsAppPopup from "./pages/whatsapppopup";
import ReactGA from "react-ga4";
// import Navabar from "./components/Navbar";
import i18n from "./i18n.js";
function App() {
  const greeting = i18n.t("hello");
  const TrackingId = "G-0BT46G4GM2";
  ReactGA.initialize(TrackingId);
  console.log(greeting);
  return (
    <>
      <div>
        <ColorMode>
          {/* {(location.pathname==='/' || location.pathname==='/register' || location.pathname==='/login' || location.pathname==='/course' || location.pathname==='/profile' || location.pathname==='/about' || location.pathname==='/udyamsheel' ) ? (<HomeNavabar/>) : (<Navabar/>)} */}
          <HomeNavabar />
          <WhatsAppPopup />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Email />} />
            <Route path="/register/:otp" element={<Register />} />
            <Route path="/services" element={<Service />} />
            <Route path="/course/:id" element={<SingleCoursePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password/:id" element={<ChangePassword />} />
            <Route path="/verify-success/:id" element={<VerifySucces />} />
            <Route path="/udyamsheel" element={<UdyamSheel />} />
            <Route path="/sellonONDC" element={<SellOnONDC />} />
            <Route path="/campuspreneur" element={<UdyamSathi />} />
            <Route path="/udyamdashboard" element={<UdyamDashboard />} />
            <Route path="/requestpage" element={<RequestPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/termscondition" element={<TermsCondition />} />
            <Route path="/videoupload" element={<VideoUpload />} />
            <Route path="/admin">
              <Route path="courses" element={<Video />} />
              <Route path="course/:id" element={<Lectures />} />
              <Route path="users" element={<Users />} />
              <Route path="responses" element={<ResponsePage />} />
              <Route path="visitors" element={<VisitorsPage />} />
            </Route>
            <Route path="/appInformation" element={<DownloadApp />} />
          </Routes>
          <Footer />
        </ColorMode>
      </div>
    </>
  );
}

export default App;
