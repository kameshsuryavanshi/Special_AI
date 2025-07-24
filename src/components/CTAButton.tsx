import React from 'react';

export const CTAButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = ''
}) => {
  const baseClasses = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm";
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl"
    : "bg-white text-blue-600 border-2 border-blue-500 hover:bg-blue-50 hover:shadow-lg";

  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </Component>
  );
};
