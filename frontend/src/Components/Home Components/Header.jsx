import { useState } from 'react';
import SearchBar from "./SearchBar";
import CategoriesDropdown from './CategoriesDropdown';  // Import CategoriesDropdown

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-purple-700 flex justify-between items-center px-10 py-4 text-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold">Udemy</div>

      {/* Search Bar Component */}
      <SearchBar />

      {/* Navigation */}
      <nav className="flex items-center">
        <ol className="flex space-x-6 text-gray-200">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          
          {/* Categories Button and Dropdown */}
          <li 
            className="relative hover:text-white cursor-pointer transition"
            onClick={toggleDropdown}
          >
            Categories
            {isDropdownOpen && <CategoriesDropdown />} {/* Show dropdown when open */}
          </li>
          
          <li className="hover:text-white cursor-pointer transition">Cart</li>
          <li className="hover:text-white cursor-pointer transition">Support</li>
        </ol>

        {/* Login Button */}
        <button className="ml-6 bg-white text-purple-700 px-4 py-2 rounded-md font-semibold transition duration-300 hover:bg-purple-800 hover:text-white">
          Login/Sign Up
        </button>
      </nav>
    </header>
  );
}
