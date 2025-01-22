return (
      <div>
        <h2>Artificial Intelligence</h2>
        <p>Use artificial intelligence to ask questions and enhance your productivity!</p>
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
          rows="10" 
          cols="50" 
          placeholder="AI response will appear here"
        />
      </div>
    );
  }
    
    export default ArtificialIntelligence;