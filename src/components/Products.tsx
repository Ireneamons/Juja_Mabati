import React from 'react';
import ScrollButton from './common/ScrollButton';

const products = [
  {
    name: 'Box Profile',
    image: 'https://github.com/Ireneamons/Juja_Mabati/blob/main/src/components/Box%20Profile%20Roofing%20Sheets.jpeg?raw=true',
    description: 'Modern design with superior strength and water resistance.',
    specs: [
      'Thickness: 0.32mm - 0.5mm',
      'Width: 1060mm',
      'Length: Customizable'
    ]
  },
  {
    name: 'Corrugated',
    image: 'https://raw.githubusercontent.com/Ireneamons/Juja_Mabati/refs/heads/main/src/components/Corrugated%20Iron%20Sheets.webp',
    description: 'Traditional wave pattern perfect for various applications.',
    specs: [
      'Thickness: 0.30mm - 0.45mm',
      'Width: 1050mm',
      'Length: Customizable'
    ]
  },
  {
    name: 'Tile',
    image: 'https://github.com/Ireneamons/Juja_Mabati/blob/main/src/components/Tile%20Roofing%20Sheets.jpg?raw=true',
    description: 'Elegant tile appearance with metal sheet durability.',
    specs: [
      'Thickness: 0.35mm - 0.55mm',
      'Width: 1080mm',
      'Length: Customizable'
    ]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <p key={i} className="text-sm text-gray-600">{spec}</p>
                  ))}
                </div>
                <ScrollButton
                  text="Get Quote"
                  message={`I'm interested in getting a quote for the ${product.name} roofing sheets. Please provide pricing information for the following specifications:\n\n${product.specs.join('\n')}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
