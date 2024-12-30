import React from 'react';
import ScrollButton from './common/ScrollButton';

const products = [
  {
    name: 'Box Profile',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80',
    description: 'Modern design with superior strength and water resistance.',
    specs: [
      'Thickness: 0.32mm - 0.5mm',
      'Width: 1060mm',
      'Length: Customizable'
    ]
  },
  {
    name: 'Corrugated',
    image: 'https://images.unsplash.com/photo-1518618750560-8f07abde4c6c?auto=format&fit=crop&q=80',
    description: 'Traditional wave pattern perfect for various applications.',
    specs: [
      'Thickness: 0.30mm - 0.45mm',
      'Width: 1050mm',
      'Length: Customizable'
    ]
  },
  {
    name: 'Tile',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80',
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