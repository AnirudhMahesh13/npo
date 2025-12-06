import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
  asChild?: boolean; // Add asChild prop here
}

export const Button = ({ children, variant = 'primary', size = 'md', asChild, className, ...props }: ButtonProps) => {
  const baseStyles = 'font-bold rounded-lg transition duration-300 ease-in-out';

  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700',
    secondary: 'bg-secondary text-gray-900 hover:bg-yellow-400',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const sizes = {
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const Component = asChild ? React.Fragment : 'button'; // Conditionally render children or button

  return (
    <Component className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`} {...props}>
      {children}
    </Component>
  );
};
