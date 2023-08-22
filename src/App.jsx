import CheckboxQuestion from "./components/CheckboxQuestion";
import DropdownQuestion from "./components/DropdownQuestion";
import FileUploadQuestion from "./components/FileUploadQuestion";
import LinearScaleQuestion from "./components/LinearScaleQuestion";
import MCQQuestion from "./components/MCQQuestion";
import MultiChoiceGridQuestion from "./components/MultiChoiceGridQuestion";
import ParagraphQuestion from "./components/ParagraphQuestion";
import ShortAnswerQuestion from "./components/ShortAnswerQuestion";
import TickBoxGridQuestion from "./components/TickBoxGridQuestion";
import '../src/App.css'
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({}); 


  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleFormSubmit} action="/" method="GET">
        <MCQQuestion onChange={handleInputChange} />
        <CheckboxQuestion onChange={handleInputChange} />
        <ShortAnswerQuestion onChange={handleInputChange} />
        <ParagraphQuestion onChange={handleInputChange} />
        <DropdownQuestion onChange={handleInputChange} />
        <FileUploadQuestion onChange={handleInputChange} />
        <LinearScaleQuestion onChange={handleInputChange} />
        <MultiChoiceGridQuestion onChange={handleInputChange} />
        <TickBoxGridQuestion onChange={handleInputChange} />

        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

  


export default App
