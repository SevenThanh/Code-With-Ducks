import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-4 text-white text-left hover:bg-red-950/30 transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">{question}</span>
        <ChevronDown 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={24}
        />
      </button>
      {isOpen && (
        <div className="p-4 text-white bg-red-950/20 rounded-lg mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-red-900/90 rounded-xl">
      <h1 className="text-4xl font-bold text-white mb-8">FAQs</h1>
      
      <FAQItem question="How do I apply?">
        <div className="space-y-4">
          <p>To apply, please follow these steps:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click on the link provided below.</li>
            <li>You will be redirected to a Google Forms page.</li>
            <li>Fill out all the required fields in the form with accurate and up-to-date information.</li>
            <li>Once you have completed the form, review your responses to ensure everything is correct.</li>
            <li>Submit the form by clicking the "Submit" button at the end.</li>
          </ol>
          <p>
            Click <a href="#" className="text-blue-300 hover:text-blue-400 underline">here</a> to apply now!
          </p>
          <p>We look forward to receiving your application!</p>
        </div>
      </FAQItem>

      <FAQItem question="Where will the program take place?">
        <p>
          [Program location details would go here]
        </p>
      </FAQItem>

      <FAQItem question="What is the cost of the program, and are there any scholarships or financial aid available?">
        <p>
          [Program cost and financial aid information would go here]
        </p>
      </FAQItem>
    </div>
  );
};

export default FAQ;