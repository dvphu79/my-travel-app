import React, { useState } from 'react';
import TopBar from '@components/TopBar';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import PackageCard from '@components/PackageCard';
import Footer from '@components/Footer';

const App = () => {
  const [destination, setDestination] = useState('Dubai');
  const [date, setDate] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <TopBar />
      <Navbar onMobileMenuToggle={handleMobileMenuToggle} isMobileMenuOpen={isMobileMenuOpen} />
      <Hero
        destination={destination}
        onDestinationChange={(e) => setDestination(e.target.value)}
        date={date}
        onDateChange={(e) => setDate(e.target.value)}
      />

      {/* Placeholder for other content */}
      <main className="container mx-auto p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <PackageCard key={index} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;