import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  icon: Icon, 
  variant = 'primary',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
}