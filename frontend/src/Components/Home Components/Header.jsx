import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon from React Icons
import SearchBar from "./SearchBar";
import CategoriesDropdown from './CategoriesDropdown';  // Import CategoriesDropdown
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0); // State to track the number of items in the cart

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to simulate adding items to the cart
  const addToCart = () => {
    setCartItems(cartItems + 1); // Simulate adding 1 item to the cart
  };

  return (
    <header className="bg-purple-700 flex justify-between items-center px-10 py-4 text-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold"><Link to="/">Learnify</Link></div>

      {/* Search Bar Component */}
      <SearchBar />

      {/* Navigation */}
      <nav className="flex items-center">
        <ol className="flex space-x-6 text-gray-200">
          <li className="hover:text-white cursor-pointer transition"><Link to="/">Home</Link></li>
          
          {/* Categories Button and Dropdown */}
          <li 
            className="relative hover:text-white cursor-pointer transition"
            onClick={toggleDropdown}
          >
            Categories
            {isDropdownOpen && <CategoriesDropdown />} {/* Show dropdown when open */}
          </li>
          
          {/* Cart Button with Icon and Item Count */}
          <li className="relative hover:text-white cursor-pointer transition">
            <Link to="/cart">
              <FaShoppingCart className="text-xl" />
              {/* Cart Badge */}
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </li>
          <li className="hover:text-white cursor-pointer transition">Support</li>
        </ol>

        {/* Login Button */}
        <button className="ml-6 bg-white text-purple-700 px-4 py-2 rounded-md font-semibold transition duration-300 hover:bg-purple-800 hover:text-white">
          <Link to="/login">Login/Sign Up</Link>
        </button>
      </nav>
    </header>
  );
}
