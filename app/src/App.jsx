import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './components/Games';
import WordleGame from './components/Wordle';
import SnakeGame from './components/SnakeGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/wordle" element={<WordleGame />} />
        <Route path="/snake" element={<SnakeGame />} />
      </Routes>
    </Router>
  );
}

export default App;