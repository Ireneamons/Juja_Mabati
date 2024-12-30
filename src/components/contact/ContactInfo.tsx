import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactItem from './ContactItem';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
      <div className="space-y-4">
        <ContactItem
          Icon={Phone}
          title="Call/WhatsApp"
          content="0769600200"
        />
        <ContactItem
          Icon={Mail}
          title="Email"
          content="jujamabatiltd@gmail.com"
        />
        <ContactItem
          Icon={MapPin}
          title="Location"
          content="Kenyatta Road, next to Traqo Lounge"
        />
      </div>
    </div>
  );
};

export default ContactInfo;