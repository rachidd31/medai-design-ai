
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="glass-card p-8 card-shadow hover:border-biomindx-blue/20 transition-colors">
      <div className="p-4 dark:bg-biomindx-blue/20 bg-biomindx-light-gray inline-block rounded-lg mb-6 text-biomindx-blue">
        {icon}
      </div>
      <h3 className="text-xl font-medium dark:text-white text-biomindx-dark-gray mb-3">{title}</h3>
      <p className="dark:text-gray-300 text-biomindx-medium-gray">{description}</p>
    </div>
  );
};

export default ServiceCard;
