import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Navabar from './components/Navbar';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Course from './pages/Course';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
import HomeNavabar from './components/HomeNavbar';
import Login from './components/Login';
import Register from './components/Register';
import ColorMode from './utils/ColorMode';
import SingleCoursePage from './components/SingleCoursePage';
import Video from './pages/admin panel/Video';
import Profile from './pages/Profile';

function App() {
  const location = useLocation();
  return (
    <>
    <div>
      <ColorMode>
      {(location.pathname==='/' || location.pathname==='/register' || location.pathname==='/login' || location.pathname==='/course') ? (<HomeNavabar/>) : (<Navabar/>)}
      {/* <Navabar/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Course/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/course' element={<SingleCoursePage/>}/>
        <Route path='/dashboard' element={<Video/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/> 
      </ColorMode>
    </div>
    </>
  );
}

export default App;
