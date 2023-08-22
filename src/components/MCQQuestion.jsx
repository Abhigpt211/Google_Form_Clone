import React from 'react';

const MCQQuestion = () => {
  return (
    <div className="question-section">
      <label className="question-label">MCQ</label>
      <input type="radio" name="mcq" value="Option 1" /> Option 1
      <input type="radio" name="mcq" value="Option 2" /> Option 2
      <input type="radio" name="mcq" value="Option 3" /> Option 3
    </div>
  );
};

export default MCQQuestion;