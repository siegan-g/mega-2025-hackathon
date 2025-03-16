import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './components/Games';
import WordleGame from './components/Wordle';
import SnakeGame from './components/SnakeGame';
import TriviaGame from './components/TriviaGame';
import LearningHub from './components/LearningHub';
import SDGChatbot from './components/SDGChatbot';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Hero /><Games /><LearningHub /><Analytics /></>} />
        <Route path="/wordle" element={<WordleGame />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/trivia" element={<TriviaGame />} />
      </Routes>
    </Router>
  );
}

export default App;