import React from 'react';
import PassageSection from '../components/PassageSection';
import QuestionSection from '../components/QuestionSection';

const ReadingTestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">IELTS Reading Practice Test</h1>
      <p className="max-w-3xl mx-auto text-center text-sm mb-6">
        Read the passage on the left and answer the questions on the right. Scroll each section independently.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 bg-white rounded p-4 overflow-y-auto h-[75vh] shadow">
          <PassageSection />
        </div>
        <div className="md:w-1/2 bg-white rounded p-4 overflow-y-auto h-[75vh] shadow">
          <QuestionSection />
        </div>
      </div>
    </div>
  );
};

export default ReadingTestPage;
