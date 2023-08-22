import React from 'react';

const MultiChoiceGridQuestion = () => {
  return (
    <div className="question-section">
      <label className="question-label">Multi choice Grid</label>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1<input type="radio" name="grid-row1" value="Row 1" /></td>
            <td><input type="radio" name="grid-row1" value="Row 1" /></td>
            <td><input type="radio" name="grid-row1" value="Row 1" /></td>
          </tr>
          <tr>
            <td>Row 2<input type="radio" name="grid-row2" value="Row 2" /></td>
            <td><input type="radio" name="grid-row2" value="Row 2" /></td>
            <td><input type="radio" name="grid-row2" value="Row 2" /></td>
          </tr>
          <tr>
            <td>Row 3<input type="radio" name="grid-row3" value="Row 3" /></td>
            <td><input type="radio" name="grid-row3" value="Row 3" /></td>
            <td><input type="radio" name="grid-row3" value="Row 3" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MultiChoiceGridQuestion;