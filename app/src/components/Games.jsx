import React from 'react';
import { useNavigate } from 'react-router-dom';

const Games = () => {
  const navigate = useNavigate();

  const games = [
    { id: 1, title: 'Garbage pick up', description: 'Just like Snake, make the garbage truck clean the streets by picking up litter' },
    { id: 2, title: 'Puzzle Tile', description: 'Description for Game 2' },
    { id: 3, title: 'World-le', description: 'Like Wordle but with a sustainability theme' },
  ];

  const handleTileClick = (game) => {
    if (game.title === 'World-le') {
      navigate('/wordle');
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="border rounded-lg p-4 shadow-md cursor-pointer"
            onClick={() => handleTileClick(game)}
          >
            <h2 className="text-xl font-bold mb-2">{game.title}</h2>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;