import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Navabar from './components/Navbar';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Course from './pages/Course';
import About from './pages/About';
import Blog from './pages/Blog';

function App() {
  return (
    <>
    <div>
      <Navabar/>
      {/* <Hero/> */}
      <Routes>
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
