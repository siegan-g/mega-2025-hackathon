import React, { useState, useEffect } from "react";
import appleIcon from "../assets/apple.png";
import paperIcon from "../assets/paper.png";
import canIcon from "../assets/can.png";
import coinIcon from "../assets/coin.png";
import snakeGameImage from "../assets/snake-game.png"; 
import { FaRedo } from "react-icons/fa";
import backgroundImage from "../assets/background.jpg";

const GRID_SIZE = 20;
const CELL_SIZE = 25;
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5, icon: appleIcon });
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0); 

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (DIRECTIONS[e.key]) {
        setDirection(DIRECTIONS[e.key]);
        if (!isGameStarted) {
          setIsGameStarted(true);
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isGameStarted]);

  useEffect(() => {
    if (isGameOver || !isGameStarted) return;
    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [snake, direction, isGameOver, isGameStarted]);

  const moveSnake = () => {
    const newHead = {
      x: snake[0].x + direction.x,
      y: snake[0].y + direction.y,
    };

    if (checkCollision(newHead)) {
      setIsGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(generateFood());
      setScore(score + 1); 
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const checkCollision = (head) => {
    return (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      snake.some((segment) => segment.x === head.x && segment.y === head.y)
    );
  };

  const generateFood = () => {
    let newFood;
    const icons = [paperIcon, canIcon, appleIcon];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
        icon: randomIcon,
      };
    } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5, icon: appleIcon });
    setDirection(DIRECTIONS.ArrowRight);
    setIsGameOver(false);
    setIsGameStarted(false);
    setScore(0); 
  };

  return (
    <div style={{ backgroundColor: "#d5d8dc", backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }} className="flex flex-col items-center h-screen p-8">
      <img src={snakeGameImage} alt="Snake Game" className="mb-8" style={{ width: '300px', height: 'auto' }} />

      <div className="flex items-start space-x-8">
        <div className="flex flex-col">
          <div className="w-64 p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-[#1e8449] text-xl font-bold mb-4">Instructions</h2>
            <p className="text-gray-700">
              Use the arrow keys to help the snake. Eat the garbage to grow and help the environment. Avoid colliding with
              the walls or yourself, have fun and help keep the planet clean!
            </p>
          </div>
        </div>

        <div
          className="grid border border-gray-300 p-2 bg-white rounded-lg shadow-md"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gap: "1px",
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            return (
              <div
                key={index}
                style={{
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  backgroundColor: isSnake ? "#1e8449" : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isFood && <img src={food.icon} alt="food" style={{ width: "100%", height: "100%" }} />}
              </div>
            );
          })}
        </div>

        <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-md border border-gray-300">
          <img src={coinIcon} alt="coin" style={{ width: "24px", height: "24px" }} />
          <span className="text-xl font-bold">{score}</span>
        </div>
      </div>

      {isGameOver && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-[#ec7063] text-lg font-semibold mb-4">Game Over!</h3>
            <button
              onClick={resetGame}
              style={{ backgroundColor: "#52be80" }}
              className="px-4 py-2 text-white rounded flex items-center space-x-2"
            >
              <FaRedo className="w-5 h-5" />
              <span>Play Again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;