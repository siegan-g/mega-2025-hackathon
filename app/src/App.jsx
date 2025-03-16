import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Features } from "./components/Features";

import Analytics from './components/Analytics';
import Hero from "./components/Hero";
import Ngo from "./components/Ngo";
import Layout from './components/Layout';
import Games from './components/Games';
import WordleGame from './components/Wordle';
import SnakeGame from './components/SnakeGame';
import TriviaGame from './components/TriviaGame';
import LearningHub from './components/LearningHub';

function App() {
  return (
    <Router>
      <Layout >
      <Routes>
        <Route path="/" element={<><Hero /><Features /><Ngo /></>} />
        <Route path="/games" element={<Games />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/learn" element={<LearningHub />} />
        <Route path="/wordle" element={<WordleGame />} />
        <Route path="/snake" element={<SnakeGame />} />
        <Route path="/trivia" element={<TriviaGame />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
