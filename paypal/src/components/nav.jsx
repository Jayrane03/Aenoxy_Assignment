import React, { useState } from 'react';
import "../Styles/components.css";
import Logo from "/Images/logo.png";
import "../Styles/index.css"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar h-20 ${isOpen ? 'open' : ''}`}>
      <div className="max-w-7xl mx-auto nav_content">
        <div className="flex items-center justify-between">
          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div className={`line ${isOpen ? 'open' : ''}`} />
            <div className={`line ${isOpen ? 'open' : ''}`} />
            <div className={`line ${isOpen ? 'open' : ''}`} />
          </div>
          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="" width={50}/>
          </div>
          {/* Navigation Links */}
          <div className="flex">
            <a href="#" className="m-2">Personal</a>
            <a href="#" className="m-2">Business</a>
            <a href="#" className="m-2">Developer</a>
            <a href="#" className="m-2">Help</a>
          </div>
          <div className="login_btn">
            <button className="btn login" type="button">Log In</button>
            <button className="btn sign" type="button">Sign Up</button>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Personal</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Developer</a></li>
          <li><a href="#">Help</a></li>
        </ul>
        <div className="login_btns">
            <button className="btn login" type="button">Log In</button>
            <button className="btn sign" type="button">Sign Up</button>
          </div>
      </div>
    </nav>
  );
}

export default Nav;
