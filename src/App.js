import React, { useState } from 'react';
import './App.css';
function TextEditor() {
  const [text, setText] = useState('');

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function handleUppercaseClick() {
    setText(text.toUpperCase());
  }

  function handleLowercaseClick() {
    setText(text.toLowerCase());
  }

  function handleItalicClick() {
    setText(text + ' ');
    setText(text);
  }

  function handleUnderlineClick() {
    setText(text + ' ');
    setText(text);
  }

  function handleClearClick() {
    setText('');
  }

  return (
    <div className="container">
      <textarea className="input" value={text} onChange={handleInputChange} />

      <div className="buttons">
        <button className="uppercase" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        <button className="lowercase" onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button className="italic" onClick={handleItalicClick}>Italic</button>
        <button className="underline" onClick={handleUnderlineClick}>Underline</button>
        <button className="clear" onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className="output">
        <p style={{ fontStyle: 'italic', textDecoration: 'underline' }}>{text}</p>
      </div>
    </div>
  );
}

export default TextEditor;