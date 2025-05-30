import { Search, Calendar } from 'lucide-react';

const SearchForm = ({ destination, onDestinationChange, date, onDateChange }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        {/* Destination Input */}
        <div className="relative">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1 text-left">Search your Destination</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={onDestinationChange}
              placeholder="Enter a destination (e.g., Paris, Tokyo)"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>

        {/* Date Input */}
        <div className="relative">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1 text-left">Date</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text" // Using text for dd/mm/yyyy placeholder, for actual date picker, use type="date" and style accordingly
              id="date"
              value={date}
              onChange={onDateChange}
              placeholder="dd/mm/yyyy"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => {if (!e.target.value) e.target.type = 'text'}}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;