import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg px-6 py-4 flex items-center justify-between w-full fixed top-0 z-50">
      <h1 className="text-3xl font-extrabold text-white tracking-wide transition-colors">
        <Link to="/">MyShop</Link>
      </h1>
      <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
        <li className="hover:text-gray-200 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-gray-200 cursor-pointer"><Link to="/products">Products</Link></li>
        <li className="hover:text-gray-200 cursor-pointer"><Link to="/contact">Contact</Link></li>
        <li className="hover:text-gray-200 cursor-pointer"><ShoppingCart size={20} /></li>
        <li className="hover:text-gray-200 cursor-pointer"><User size={20} /></li>
      </ul>
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
      </div>
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col space-y-6 px-6 md:hidden text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="flex items-center gap-2"><ShoppingCart size={20} /> Cart</li>
          <li className="flex items-center gap-2"><User size={20} /> Account</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
