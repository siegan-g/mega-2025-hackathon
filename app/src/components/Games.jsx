import React from 'react';
import { useNavigate } from 'react-router-dom';
import gamesImage from "../assets/games.png"; 
import '../styles/GradientShadow.css'; 

const Games = () => {
  const navigate = useNavigate();

  const games = [
    { 
      id: 1, 
      title: 'Garbage pick up', 
      description: 'Just like Snake, make the snake clean the streets by picking up litter' 
    },
    { 
      id: 2, 
      title: 'Trivia Game', 
      description: 'Time to spin!  Spin the wheel and answer the correct SDG goal by the Icon' 
    },
    { 
      id: 3, 
      title: 'World-le', 
      description: 'Like Wordle but with a sustainability theme' 
    },
  ];

  const handleTileClick = (game) => {
    if (game.title === 'World-le') {
      navigate('/wordle');
    }
    if(game.title === 'Garbage pick up'){
      navigate('/snake');
    }
    if(game.title === 'Trivia Game'){
      navigate('/trivia');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <img src={gamesImage} alt="Games" className="mb-8" style={{ width: '300px', height: 'auto' }} />
      <h2 className="text-2xl font-bold mb-4 text-center">Choose a game to play!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="border rounded-lg p-6 shadow-lg cursor-pointer transform transition-transform duration-200 hover:shadow-xl hover:scale-105 gradient-border bg-white"
            onClick={() => handleTileClick(game)}
          >
            <h2 className="text-2xl font-bold mb-4">{game.title}</h2>
            <p className="text-gray-700">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;