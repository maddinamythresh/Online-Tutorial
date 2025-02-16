import { useState } from "react";

export default function SearchBar() {
  const [dropdown, setDropdown] = useState(null);

  const handleDisplay = (e) => {
    setDropdown(e.target.value);
  };

  return (
    <div className="relative flex bg-white rounded-md px-3 py-2 w-1/3">
      <input
        type="text"
        placeholder="Search for courses..."
        className="w-full outline-none text-black"
        onChange={handleDisplay}
      />
      <button className="ml-2 text-purple-600 hover:text-purple-800">
        🔍
      </button>

      {/* Dropdown */}
      {dropdown && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white text-black shadow-lg rounded-md z-50">
          <ul>
            <li className="p-2 hover:bg-gray-100">Web Development</li>
            <li className="p-2 hover:bg-gray-100">Data Science</li>
            <li className="p-2 hover:bg-gray-100">Machine Learning</li>
            <li className="p-2 hover:bg-gray-100">DevOps</li>
          </ul>
        </div>
      )}
    </div>
  );
}
