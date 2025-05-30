import SearchForm from '@components/SearchForm';

const Hero = ({ destination, onDestinationChange, date, onDateChange }) => {
  return (
    <header
      className="relative bg-cover bg-center py-24 md:py-32 lg:py-48"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 tracking-wide">Our packages</h2>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Search Your Destination
        </h1>
        <SearchForm
          destination={destination}
          onDestinationChange={onDestinationChange}
          date={date}
          onDateChange={onDateChange}
        />
      </div>
    </header>
  );
};

export default Hero;