
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, category, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden card-shadow group">
      <div className="h-48 bg-medai-light-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="h-full w-full bg-medai-blue/10 flex items-center justify-center">
          <div className="text-4xl text-medai-blue/40 font-bold">{image}</div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-medai-teal mb-2 font-medium">{category}</div>
        <h3 className="text-xl font-medium text-medai-dark-gray mb-3">{title}</h3>
        <p className="text-medai-medium-gray mb-4">{description}</p>
        <a href="#" className="inline-flex items-center gap-2 text-medai-blue font-medium group-hover:gap-3 transition-all">
          Read Case Study <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
