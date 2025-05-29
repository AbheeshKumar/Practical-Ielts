import React, { useState } from "react";

const tests = [
  { id: 1, title: "IELTS Reading Practice Test 1" },
  { id: 2, title: "IELTS Reading Practice Test 2" },
  { id: 3, title: "IELTS Reading Practice Test 3" },
];

const passages = {
  1: {
    title: "The History of IELTS",
    text: `IELTS (International English Language Testing System) was introduced in 1989 to provide a reliable measure of English proficiency for non-native speakers. It is widely accepted by universities, employers, and governments worldwide.\n\nThe test consists of four sections: Listening, Reading, Writing, and Speaking.\n\nThis passage will focus on the Reading section.`,
    questions: [
      {
        id: 1,
        text: "What does IELTS stand for?",
        options: [
          "International English Language Testing System",
          "International English Learning Test Service",
          "Internet English Language Test System",
        ],
        correctIndex: 0,
      },
      {
        id: 2,
        text: "When was IELTS introduced?",
        options: ["1989", "1995", "2000"],
        correctIndex: 0,
      },
    ],
  },
  2: {
    title: "English Language Learning",
    text: `English language skills are critical for success in the global environment. IELTS is a standard test used to assess these skills and facilitate international education and work opportunities.\n\nThe reading section tests comprehension and vocabulary skills.`,
    questions: [
      {
        id: 1,
        text: "What is the purpose of IELTS?",
        options: [
          "To assess English proficiency",
          "To teach English grammar",
          "To translate English documents",
        ],
        correctIndex: 0,
      },
    ],
  },
  3: {
    title: "Study Tips",
    text: `Effective preparation for IELTS includes regular practice, understanding the test format, and time management.\n\nReading comprehension can be improved by reading English newspapers, books, and practice tests.`,
    questions: [
      {
        id: 1,
        text: "Which of the following is recommended for IELTS preparation?",
        options: [
          "Ignoring practice tests",
          "Regular practice and time management",
          "Studying unrelated topics",
        ],
        correctIndex: 1,
      },
    ],
  },
};

function App() {
  const [selectedTest, setSelectedTest] = useState(1);
  const [answers, setAnswers] = useState({});

  const passage = passages[selectedTest];

  const handleOptionSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          IELTS Reading Practice
        </h1>
        <nav>
          <ul className="flex space-x-4 text-gray-700 font-semibold">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#practice" className="hover:text-blue-600">
                Practice Tests
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-300 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Select Reading Test
          </h2>
          <ul>
            {tests.map((test) => (
              <li
                key={test.id}
                className={`cursor-pointer mb-3 p-2 rounded ${
                  selectedTest === test.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
                onClick={() => {
                  setSelectedTest(test.id);
                  setAnswers({}); // reset answers on test switch
                }}
              >
                {test.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <article>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              {passage.title}
            </h3>
            <p className="mb-8 whitespace-pre-line leading-relaxed text-gray-800">
              {passage.text}
            </p>

            <section>
              <h4 className="text-2xl font-semibold mb-6 text-gray-900">
                Questions
              </h4>
              <ol className="space-y-8">
                {passage.questions.map((question) => (
                  <li key={question.id}>
                    <p className="font-semibold mb-3 text-gray-800">
                      {question.id}. {question.text}
                    </p>
                    <ul>
                      {question.options.map((option, idx) => {
                        const selected = answers[question.id] === idx;
                        const isCorrect = question.correctIndex === idx;
                        const showCorrect = selected && isCorrect;
                        const showIncorrect = selected && !isCorrect;
                        return (
                          <li
                            key={idx}
                            onClick={() => handleOptionSelect(question.id, idx)}
                            className={`cursor-pointer p-2 rounded mb-1
                              ${
                                showCorrect
                                  ? "bg-green-200 text-green-900 font-bold"
                                  : ""
                              }
                              ${showIncorrect ? "bg-red-200 text-red-900" : ""}
                              ${!selected ? "hover:bg-gray-200" : ""}
                            `}
                          >
                            {option}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>
          </article>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-4 border-t border-gray-300 text-gray-600">
        © 2025 IELTS Practice App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
