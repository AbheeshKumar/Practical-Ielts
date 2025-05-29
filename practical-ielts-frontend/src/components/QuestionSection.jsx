import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionSection = () => {
  const questions = [
    {
      id: 1,
      question: 'What is the main idea of the passage?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    {
      id: 2,
      question: 'Which statement is TRUE according to the passage?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
    },
    // Add more questions here
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Questions</h2>
      {questions.map((q) => (
        <QuestionCard key={q.id} {...q} />
      ))}
    </div>
  );
};

export default QuestionSection;
