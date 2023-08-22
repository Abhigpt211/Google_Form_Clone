import React from 'react';

const CheckboxQuestion = () => {
  return (
    <div className="question-section">
      <label className="question-label">Checkbox</label>
      <input type="checkbox" value="Option 1" /> Option 1
      <input type="checkbox" value="Option 2" /> Option 2
      <input type="checkbox" value="Option 3" /> Option 3
    </div>
  );
};

export default CheckboxQuestion;