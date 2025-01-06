import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 p-2 text-white bg-purple-700 flex  justify-between items-center">
      <div className="logo font-bold text-lg">QR Code Generator !</div>

      <ul className="flex justify-center items-center gap-4">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}>
        <li>Home</li></NavLink>
        <NavLink to="/CreateQR" className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}>
        <li>Create QR</li>
       </NavLink>
       <NavLink to="/FindQRCode" className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}>
        <li>Find QR Code</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
