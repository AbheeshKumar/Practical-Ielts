import React from 'react';

const QuestionCard = ({ id, question, options }) => {
  return (
    <div className="mb-4 p-4 border rounded">
      <p className="font-medium">{id}. {question}</p>
      <div className="mt-2">
        {options.map((opt, index) => (
          <label key={index} className="block">
            <input
              type="radio"
              name={`question-${id}`}
              value={opt}
              className="mr-2"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
