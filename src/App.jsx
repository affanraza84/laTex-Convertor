import React, { useState } from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

function App() {
  const [equation, setEquation] = useState('');

  const handleChange = (event) => {
    setEquation(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500 p-4">
      <h1 className="text-3xl font-bold mb-4">LaTeX Equation Converter</h1>
      <textarea
        className="w-full max-w-lg p-2 border bg-gray-200 border-gray-300 rounded mb-4"
        rows="4"
        placeholder="Enter your equation here..."
        value={equation}
        onChange={handleChange}
      />
      <div className="w-full max-w-lg p-4 bg-gray-200 border border-gray-300 rounded">
        <Latex>{`$${equation}$`}</Latex>
      </div>
    </div>
  );
}

export default App;
