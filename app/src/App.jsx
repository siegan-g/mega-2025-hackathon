import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './components/Games';
import WordleGame from './components/Wordle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/wordle" element={<WordleGame />} />
      </Routes>
    </Router>
  );
}

export default App;