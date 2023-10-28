import {Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
const Navbar = () => {
  const viewPort = window.innerWidth;
  const [toggleNavbar, setToggleNavbar] = useState(false);
  

  useEffect(() => {
    // Function to handle the window resize event
    function handleResize() {
      if (viewPort > 640) {
        setToggleNavbar(false); // Close the menu when the viewport is wider than 640px
      }
    }

    // Add the resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewPort]);

  return (
    <div>
      <div className='flex relative justify-between p-5 bg-orange-400 px-10'>
        <div>
          <Link to='/'>
            <h1>Logo</h1>
          </Link>
        </div>
        <div className='flex relative '>
          <div
            className='md:hidden absolute'
            onClick={() => {
              setToggleNavbar(!toggleNavbar);
            }}>
            <GiHamburgerMenu size={20}  />
          </div>

          <div className='hidden md:flex gap-8'>
            <Link className='custom-underline' to='/'>Home</Link>
            <Link className='custom-underline' to='/about'>About</Link>
            <Link className='custom-underline' to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
      {toggleNavbar && (
        <div  className='md:hidden flex flex-col justify-center items-center gap-5 pt-2'>
          <Link 
          className='custom-underline'
            onClick={() => {
              setToggleNavbar(false);
            }}
            to='/'>
            Home
          </Link>
          <Link
          className='custom-underline'
            onClick={() => {
              setToggleNavbar(false);
            }}
            to='/about'>
            About
          </Link>
          <Link
          className='custom-underline'
            onClick={() => {
              setToggleNavbar(false);
            }}
            to='/contact'>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
