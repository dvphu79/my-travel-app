import TravelLogo from '@components/TravelLogo';
import { Menu } from 'lucide-react';

const Navbar = ({ onMobileMenuToggle, isMobileMenuOpen }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <TravelLogo />
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Packages</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Destinations</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Contact</a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
            Book Now
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={onMobileMenuToggle}
            className="text-gray-600 hover:text-blue-500 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a href="#" className="block py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-500">Home</a>
          <a href="#" className="block py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-500">Packages</a>
          <a href="#" className="block py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-500">Destinations</a>
          <a href="#" className="block py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-blue-500">Contact</a>
          <div className="p-4">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;