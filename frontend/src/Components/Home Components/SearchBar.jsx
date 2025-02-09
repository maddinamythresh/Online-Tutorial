export default function SearchBar() {
    return (
      <div className="flex bg-white rounded-md px-3 py-2 w-1/3">
        <input
          type="text"
          placeholder="Search for courses..."
          className="w-full outline-none text-black"
        />
        <button className="ml-2 text-purple-600 hover:text-purple-800">
          🔍
        </button>
      </div>
    );
  }
  