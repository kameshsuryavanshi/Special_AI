import React from 'react';
import { motion } from 'framer-motion';

// Removed TypeScript interface and type annotations

export const CTAButton = ({ 
  text, 
  href, 
  type = 'button', 
  variant = 'primary',
  onClick 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 to-coral-500 text-white hover:from-orange-600 hover:to-coral-600 shadow-lg hover:shadow-xl focus:ring-orange-500",
    secondary: "bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50 hover:border-orange-600 shadow-md hover:shadow-lg focus:ring-orange-300"
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );

  const linkContent = (
    <motion.a
      href={href}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );

  return href ? linkContent : buttonContent;
};