import React, { useState } from 'react';
import axios from 'axios';

function ArtificialIntelligence() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const getMessages = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post('http://localhost:3000/completions', { prompt });
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('An error occurred while fetching the response. Please try again.');
    }
  };

  return (
    <div>
      <h2>Artificial Intelligence</h2>
      <p><b>Use artificial intelligence to ask questions and enhance your productivity!</b></p>
      <p><b>*Note: AI Response may take a few seconds to come in.*</b></p>
      <p><b>Feel free to copy AI responses into your notes if you need to save them!</b></p>
      <form onSubmit={getMessages}>
        <input 
          type="text" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
          placeholder="Ask your question" 
        />
        <button type="submit">Ask</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <h3>Response:</h3>
      <textarea 
        value={response} 
        readOnly 
        rows="20" 
        cols="100" 
        placeholder="AI response will appear here"
        className="aiResponse"
      />
    </div>
  );
}

export default ArtificialIntelligence;