import React from 'react';
import PillNav from './PillNav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../assets/logo.webp"
const Navbar = () => {
  return (
    <div className='flex justify-center'>
     <PillNav
     
  logo={logo}
  logoAlt="Company Logo"
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Hospitality', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="transparent"
  pillColor="#4a7f58"
  hoveredPillTextColor="#9bd9b4"
  pillTextColor="#fff"
/>
    </div>
  );
}

export default Navbar;
