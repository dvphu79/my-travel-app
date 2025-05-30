import { Phone, Tag } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-teal-500 text-white py-2 px-4 md:px-8 text-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-1 sm:mb-0">
          <Tag size={16} className="mr-2" />
          <span>20% off on next booking</span>
        </div>
        <div className="flex items-center">
          <Phone size={16} className="mr-2" />
          <span>Mobile No. +91 1234567890</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;