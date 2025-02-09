export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between mb-6">
            <div className="text-lg font-semibold">Udemy</div>
            <div className="flex space-x-6">
              <a href="#home" className="hover:text-gray-400">Home</a>
              <a href="#courses" className="hover:text-gray-400">Courses</a>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
              <a href="#about" className="hover:text-gray-400">About Us</a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400">
            &copy; 2025 Udemy. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  