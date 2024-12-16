import React, { useState } from 'react';
import axios from 'axios';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

function App() {
  const [equation, setEquation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/equation', { equation });
      console.log('Equation inserted:', response.data);
    } catch (error) {
      console.error('Error inserting equation:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 p-4">
      <h1 className="text-3xl font-bold mb-4">LaTeX Equation Converter</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 bg-gray-300 border border-gray-300 rounded">
        <textarea
          className="w-full p-2 border bg-gray-400 border-gray-300 rounded mb-4"
          rows="4"
          placeholder="Enter your equation here..."
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
      <div className="w-full max-w-lg p-4 bg-gray-400 border border-gray-300 rounded mt-4">
        <Latex>{`$${equation}$`}</Latex>
      </div>
    </div>
  );
}

export default App;
