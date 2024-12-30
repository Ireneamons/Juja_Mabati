import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ScrollButtonProps {
  text: string;
  message: string;
  className?: string;
  showIcon?: boolean;
}

const ScrollButton = ({ text, message, className = '', showIcon = false }: ScrollButtonProps) => {
  const handleClick = () => {
    const messageArea = document.querySelector('#contact-message') as HTMLTextAreaElement;
    const contactSection = document.querySelector('#contact');
    
    if (messageArea && contactSection) {
      messageArea.value = message;
      contactSection.scrollIntoView({ behavior: 'smooth' });
      messageArea.focus();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 transition-colors ${className}`}
    >
      {text}
      {showIcon && <ArrowRight size={20} />}
    </button>
  );
};

export default ScrollButton;