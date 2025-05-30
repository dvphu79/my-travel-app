import TravelLogo from '@components/TravelLogo';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex justify-center"> {/* Added flex justify-center for the logo */}
            <TravelLogo />
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Travellogo. All rights reserved.</p>
        <p className="text-sm mt-2">Your adventure starts here.</p>
      </div>
    </footer>
  );
};

export default Footer;