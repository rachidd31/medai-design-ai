
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
        className="h-10 w-10 mr-2" 
      />
      <span className="text-xl font-semibold">
        <span className="text-biomindx-blue">Bio</span>
        <span className="text-biomindx-teal">Mind</span>
        <span className="text-white">X</span>
      </span>
    </div>
  );
};

export default Logo;
