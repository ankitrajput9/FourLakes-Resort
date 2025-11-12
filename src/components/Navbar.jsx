import React from 'react';
import PillNav from './PillNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from '/path/to/logo.svg';
const Navbar = () => {
  return (
    <div className='flex justify-center'>
     <PillNav
     
//   logo={logo}
//   logoAlt="Company Logo"
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="transparent"
  pillColor="#ffffff"
  hoveredPillTextColor="#000"
  pillTextColor="#000"
/>
    </div>
  );
}

export default Navbar;
