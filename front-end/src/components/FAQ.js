import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-4 text-white text-left hover:bg-white/20 transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl">{question}</span>
        <ChevronDown 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={24}
        />
      </button>
      {isOpen && (
        <div className="p-4 text-white bg-white/[0.14] rounded-lg mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-red-950/40 rounded-xl">
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

      <FAQItem question="Who can join the Code With Ducks program?">
        <p>
          Any high school student can apply, especially those interested in learning about programming and AI.
        </p>
      </FAQItem>

      <FAQItem question="How are the classes conducted?">
        <p>
          A classroom remote link will be sent out to accepted students to join the sessions. Classes are held online, making it easy for students to participate from anywhere.
        </p>
      </FAQItem>

      <FAQItem question="Is the program free for students?">
        <p>Yes! The program is completely free.</p>
      </FAQItem>
    </div>
  );
};

export default FAQ;