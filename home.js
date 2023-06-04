import React, { useState } from 'react';
import './home.css'

function App() {
  const [input, setInput] = useState('');
  const [type, setType] = useState('kebab-case');
  const [output, setOutput] = useState('');

  const convertCase = async () => {
    try {
      const response = await fetch('/api/convert?type=' + type, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });
      const data = await response.text();
      setOutput(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="main">
      <h1>Case Converter</h1>
      <textarea
      className='input'
        rows="5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="kebab-case">Kebab Case</option>
        <option value="snake_case">Snake Case</option>
        <option value="camelCase">camelCase</option>
        <option value="PascalCase">PascalCase</option>
      </select>
      <button onClick={convertCase}>Convert</button>
      <h2>Output:</h2>
      <div className='input'>{output}</div>
    </div>
  );
}

export default App;
