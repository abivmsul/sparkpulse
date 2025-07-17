import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items } = useCart();
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-15 w-auto" src={logo} alt="DagiTech" />
            </Link>
          </div>

          {/* Center links (desktop) */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 font-small">
              Home
            </Link>

            {/* Shop dropdown */}
            {/* <div className="relative group">
              <button className="flex items-center text-white hover:text-gray-300 px-3 py-2 font-small">
                Shop
                <svg
                  className="ml-1 h-4 w-4 text-gray-400 group-hover:text-gray-200 transition"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.66a.75.75 0 01-1.08 0l-4.25-4.66a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg hidden group-hover:block z-10">
                <Link to="/products?cat=laptops" className="block px-4 py-2 hover:bg-gray-100">
                  Laptops
                </Link>
                <Link to="/products?cat=desktops" className="block px-4 py-2 hover:bg-gray-100">
                  Desktops
                </Link>
                <Link to="/products?cat=accessories" className="block px-4 py-2 hover:bg-gray-100">
                  Accessories
                </Link>
              </div>
            </div> */}
          <Link to="/products" className="text-white hover:text-gray-300 px-3 py-2 font-small">
            Products
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 font-small">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2 font-small">
              Contact
            </Link>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-8 pr-3 py-2 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              />
              <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center">
            <Link to="/cart" className="relative text-white hover:text-gray-300 p-2">
              <ShoppingCartIcon className="h-6 w-6" />
              {totalCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {totalCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="md:hidden ml-2 p-2 text-white hover:text-gray-300 focus:outline-none"
            >
              {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white border-t">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-100">
            Home
          </Link>
          <Link to="/products" className="block px-3 py-2 rounded hover:bg-gray-100">
            Products
          </Link>
          <Link to="/abou" className="block px-3 py-2 rounded hover:bg-gray-100">
            About
          </Link>
          <Link to="/contact" className="block px-3 py-2 rounded hover:bg-gray-100">
            Contact
          </Link>
          {/* ...other mobile links... */}
        </div>
      )}
    </nav>
  );
}
