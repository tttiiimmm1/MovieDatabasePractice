import React, { useState } from "react";
import DefaultButton from "./DefaultButton.js";

export default function SearchInput() {
  const [textInput, setTextInput] = useState("");

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = () => {
    if (textInput !== "") {
      return textInput;
    }
    
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      return handleSubmit();
    }
  };
 /*
  Problems:
    clicking the button doesn't print to console (But any input does)

 */
  return (
    <div className="input-box">
      <DefaultButton
        type1="search-button"
        action={console.log(textInput)}
        text="Search"
      />
      <input
        value={textInput}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        placeholder="Search our database for a movie"
      />
    </div>
  )
}