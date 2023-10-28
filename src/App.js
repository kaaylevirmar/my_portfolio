import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
    </Routes>
   
   </>
  );
}

export default App;
