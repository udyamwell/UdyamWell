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

function App() {
  const location = useLocation();
  return (
    <>
    <div>
      {(location.pathname==='/') ? (<HomeNavabar/>) : (<Navabar/>)}
      {/* <Navabar/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/services' element={<Service/>}/>
      </Routes>
      <Footer/> 
    </div>
    </>
  );
}

export default App;
