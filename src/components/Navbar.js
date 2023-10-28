import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
const Navbar = () => {
 
  const [toggleNavbar, setToggleNavbar] = useState(false);
// Add a state to track the current viewport width
const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

// Define the breakpoint (e.g., 768px) for hiding the mobile menu
const mobileMenuBreakpoint = 768;

useEffect(() => {
  // Function to update the viewport width when it changes
  const handleViewportChange = () => {
    setViewportWidth(window.innerWidth);
  };

  // Attach an event listener to the window to detect viewport changes
  window.addEventListener("resize", handleViewportChange);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener("resize", handleViewportChange);
  };
}, []);

// Update toggleNavbar based on viewportWidth
useEffect(() => {
  if (viewportWidth >= mobileMenuBreakpoint) {
  
    setToggleNavbar(false);
  }
}, [viewportWidth]);
 
 
  return (
    <div className='flex justify-between p-4  navbar text-lg relative'>


      <div>
        <h1>Logo</h1>
      </div>
      <div className='flex relative '>
        <div
          onClick={() => {
            setToggleNavbar(!toggleNavbar);
          }}
          className='md:hidden '>
          <GiHamburgerMenu size={20} />
        </div>
        <div className='hidden md:flex gap-16 '>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
        
      

      {toggleNavbar && (
        <div className=' dropdown absolute flex flex-col  my-10 text-center gap-5'>
          <Link className="custom-underline" onClick={()=>{
            setToggleNavbar(false)
          }} to='/'>Home</Link>
          <Link className="custom-underline" onClick={()=>{
            setToggleNavbar(false)
          }} to='/about'>About</Link>
          <Link className="custom-underline" onClick={()=>{
            setToggleNavbar(false)
          }} to='/contact'>Contact</Link>
        </div>
      )}
    </div>
    
  );
};

export default Navbar;
