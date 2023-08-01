import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Footer from './components/Footer';
// import Navabar from './components/Navbar';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Course from './pages/Course';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';
// import HomeNavabar from './components/HomeNavbar';
import Login from './components/Login';
import Register from './components/Register';
import ColorMode from './utils/ColorMode';
import SingleCoursePage from './components/SingleCoursePage';
import Video from './pages/admin panel/Video';
import Profile from './pages/Profile';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import NavabarMain from './components/NavbarMain';

function App() {
  const location = useLocation();
  return (
    <>
    <div>
      <ColorMode>
      {/* {(location.pathname==='/' || location.pathname==='/register' || location.pathname==='/login' || location.pathname==='/course' || location.pathname==='/profile' ) ? (<HomeNavabar/>) : (<Navabar/>)} */}
      <NavabarMain/>
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
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/change-password/:id' element={<ChangePassword/>}/>
        <Route path='/admin'>
            <Route path='lectures' element={<Video/>}/>
            {/* <Route path='users' element={<UserPanel/>}/> */}
            {/* <Route path='orders' element={<OrderPanel/>}/> */}
          </Route>
      </Routes>
      <Footer/> 
      </ColorMode>
    </div>
    </>
  );
}

export default App;
