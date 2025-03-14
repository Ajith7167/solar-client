import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">SolarXpert</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Home</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Dashboard</Link>
            <Link to="/profile" className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Profile</Link>
            <Link to="/login" className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Login</Link>
            <Link to="/register" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Register</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Home</Link>
              <Link to="/dashboard" className="block text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Dashboard</Link>
              <Link to="/profile" className="block text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Profile</Link>
              <Link to="/login" className="block text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md">Login</Link>
              <Link to="/register" className="block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Register</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;