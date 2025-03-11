import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './components/Games';
import WordleGame from './components/Wordle';
import SnakeGame from './components/SnakeGame';
import TriviaGame from './components/TriviaGame';
import LearningHub from './components/LearningHub';
import SDGChatbot from './components/SDGChatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Games /><LearningHub/><SDGChatbot/></>} />
        <Route path="/wordle" element={<WordleGame />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/trivia" element={<TriviaGame />} />
      </Routes>
    </Router>
  );
}

export default App;