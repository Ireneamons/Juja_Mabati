import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  Icon: LucideIcon;
  title: string;
  content: string;
}

const ContactItem = ({ Icon, title, content }: ContactItemProps) => (
  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-md">
    <div className="bg-blue-100 p-3 rounded-full">
      <Icon className="text-blue-600" size={24} />
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactItem;