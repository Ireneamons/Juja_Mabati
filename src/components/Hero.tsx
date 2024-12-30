import React from 'react';
import ScrollButton from './common/ScrollButton';

const Hero = () => {
  return (
    <div 
      className="min-h-screen relative flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Juja Mabati Factory
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Home to Quality Roofing Sheets
        </p>
        <div className="mb-12">
          <div className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg mb-6">
            FREE DELIVERY COUNTRYWIDE WITHIN 48HRS
          </div>
        </div>
        <ScrollButton
          text="Order Now"
          message="Hi, I'm interested in ordering roofing sheets from Juja Mabati Factory. Please provide me with more information about your products and pricing."
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          showIcon={true}
        />
      </div>
    </div>
  );
};

export default Hero;