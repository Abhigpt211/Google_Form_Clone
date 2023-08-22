import React from 'react';

const FileUploadQuestion = () => {
  return (
    <div className="question-section">
      <label className="question-label" >File Upload</label>
      <input type="file" className="file-upload-input" />
    </div>
  );
};

export default FileUploadQuestion;