
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/9cb7a997-b5fa-4a5b-9ea3-15e8b45d68b7.png" 
        alt="BioMindX Logo" 
        className="h-16 w-auto" 
      />
    </div>
  );
};

export default Logo;
