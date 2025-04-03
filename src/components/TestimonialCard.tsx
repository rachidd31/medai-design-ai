
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, company }) => {
  return (
    <div className="glass-card p-8 card-shadow">
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 mr-1">★</span>
        ))}
      </div>
      <p className="dark:text-gray-300 text-biomindx-medium-gray italic mb-6">{quote}</p>
      <div>
        <div className="font-medium dark:text-white text-biomindx-dark-gray">{author}</div>
        <div className="text-sm dark:text-gray-400 text-biomindx-medium-gray">{title}, {company}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
