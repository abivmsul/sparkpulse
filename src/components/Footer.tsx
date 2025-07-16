// src/components/Footer.tsx
import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Brand & Quick Blurb */}
        <div className="space-y-2">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-10 w-auto" src={logo} alt="DagiTech" />
            </Link>
          </div>

          <p className="text-sm">
            Premium tech accessories with fast shipping & top customer support.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <h3 className="font-medium">Shop</h3>
            <ul className="space-y-1">
              <li><a href="/products?cat=laptops" className="hover:text-white">Laptops</a></li>
              <li><a href="/products?cat=desktops" className="hover:text-white">Desktops</a></li>
              <li><a href="/products?cat=accessories" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">Support</h3>
            <ul className="space-y-1">
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div className="space-y-2 text-sm">
          <h3 className="font-medium">Stay Connected</h3>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-white"><FaTiktok size={16} /></a>
            <a href="#" className="hover:text-white"><FaTelegramPlane size={16} /></a>
            <a href="#" className="hover:text-white"><FaFacebookF size={16} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={16} /></a>
          </div>
          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-2 py-1 text-sm rounded-l bg-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 rounded-r text-sm hover:bg-blue-700"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-xs py-4">
        © {new Date().getFullYear()} Sparkpulse Accessories. All rights reserved.
      </div>
    </footer>
  );
}
