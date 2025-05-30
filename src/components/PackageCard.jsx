const PackageCard = ({ index }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={`https://placehold.co/600x400/E2E8F0/AAAAAA?text=Package+${index + 1}`}
        alt={`Package ${index + 1}`}
        className="w-full h-48 object-cover rounded-md mb-4"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/CCCCCC/AAAAAA?text=Image+Error'; }}
      />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">Amazing Destination {index + 1}</h3>
      <p className="text-gray-600 mb-4">A short description of this wonderful package. Explore scenic views and enjoy unique experiences.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
        View Details
      </button>
    </div>
  );
};

export default PackageCard;