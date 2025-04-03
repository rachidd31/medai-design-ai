
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, company }) => {
  return (
    <div className="bg-white rounded-xl p-8 card-shadow border border-gray-100">
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 mr-1">★</span>
        ))}
      </div>
      <p className="text-medai-medium-gray italic mb-6">{quote}</p>
      <div>
        <div className="font-medium text-medai-dark-gray">{author}</div>
        <div className="text-sm text-medai-medium-gray">{title}, {company}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
