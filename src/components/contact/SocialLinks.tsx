import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
      <div className="flex gap-4">
        <a href="https://www.facebook.com/PreciseGeotech?mibextid=ZbWKwL" className="text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-transform">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-transform">
          <Twitter size={24} />
        </a>
        <a href="https://www.instagram.com/jujamabatifactory?igsh=MTB4cm9pd3Z0ejdjMA==" className="text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-transform">
          <Instagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
