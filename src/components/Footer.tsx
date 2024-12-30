import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Juja Mabati Factory</h3>
            <p className="text-gray-400 mb-2">The Forever Roof</p>
            <div className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded inline-block">
              FREE DELIVERY COUNTRYWIDE WITHIN 48HRS
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about-us" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-gray-400" />
                <span>0769600200</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-gray-400" />
                <span>jujamabatiltd@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-gray-400" />
                <span>Kenyatta Road, Next to Traqo Lounge</span>
              </li>
              <li>📬 P.O. Box 57920, Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Juja Mabati Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;