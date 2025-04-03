
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl p-8 card-shadow border border-gray-100 hover:border-medai-blue/20 transition-colors">
      <div className="p-4 bg-medai-light-gray inline-block rounded-lg mb-6 text-medai-blue">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-medai-dark-gray mb-3">{title}</h3>
      <p className="text-medai-medium-gray">{description}</p>
    </div>
  );
};

export default ServiceCard;
