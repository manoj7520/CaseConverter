import React from 'react'
import './home.css'

function HOME() {
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
    <div className="App">
      <h1>Case Converter</h1>
      <div className="input-container">
        <textarea
          rows="5"
          className="input-textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text"
        ></textarea>
        <select
          className="conversion-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="kebab-case">Kebab Case</option>
          <option value="snake-case">Snake Case</option>
          <option value="camel-case">Camel Case</option>
          <option value="pascal-case">Pascal Case</option>
        </select>
      </div>
      <button className="convert-button" onClick
    </div>
  )
}

export default HOME
