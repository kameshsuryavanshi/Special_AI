// import React from 'react';
// import { motion } from 'framer-motion';

// // Removed TypeScript interface and type annotations

// export const CTAButton = ({ 
//   text, 
//   href, 
//   type = 'button', 
//   variant = 'primary',
//   onClick 
// }) => {
//   const baseClasses = "inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto";
  
//   const variants = {
//     primary: "bg-gradient-to-r from-orange-500 to-coral-500 text-white hover:from-orange-600 hover:to-coral-600 shadow-lg hover:shadow-xl focus:ring-orange-500",
//     secondary: "bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50 hover:border-orange-600 shadow-md hover:shadow-lg focus:ring-orange-300"
//   };

//   const classes = `${baseClasses} ${variants[variant]}`;

//   const buttonContent = (
//     <motion.button
//       type={type}
//       onClick={onClick}
//       className={classes}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {text}
//     </motion.button>
//   );

//   const linkContent = (
//     <motion.a
//       href={href}
//       className={classes}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {text}
//     </motion.a>
//   );

//   return href ? linkContent : buttonContent;
// };




import React from 'react';
import { motion } from 'framer-motion';

// Removed TypeScript interface and type annotations

export const CTAButton = ({ 
  href, 
  children, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseClasses = "inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 text-center";
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-2xl hover:scale-105",
    secondary: "bg-white text-blue-600 border-2 border-blue-500 hover:bg-blue-50 hover:shadow-xl"
  };

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};