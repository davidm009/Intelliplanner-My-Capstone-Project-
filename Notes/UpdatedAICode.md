*Updated code edited for the server below*

const ArtificialIntelligence = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.text);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('An error occurred while fetching the response. Please try again.');
    }
  };

  return (
    <div>
      <h2>Artificial Intelligence</h2>
      <p>Use artificial intelligence to ask questions and enhance your productivity!</p>
      <form onSubmit={handleSubmit}>
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
      <p>{response}</p>
    </div>
  );
};

export default ArtificialIntelligence;