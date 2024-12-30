import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import SocialLinks from './contact/SocialLinks';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const position: [number, number] = [-1.1022, 37.0128];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
            <SocialLinks />
          </div>

          <ContactForm />
        </div>

        <div className="mt-12 h-96 rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Juja Mabati Factory <br />
                Kenyatta Road, next to Traqo Lounge
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;