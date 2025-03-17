import React, { useState, useEffect, useRef } from "react";
import worldleImage from "../assets/worldle.png"; 

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;
const WORD_LIST = ["EARTH", "WATER", "SOLAR", "FLORA", "FAUNA", "REUSE", "GREEN", "WASTE", "OCEAN", "PLANT", "LEARN", "PEACE"];
const getRandomWord = () => WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

const WordleGame = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(Array(WORD_LENGTH).fill(""));
  const [activeRow, setActiveRow] = useState(0);
  const [message, setMessage] = useState("");
  const [keyboardColors, setKeyboardColors] = useState({});
  const [secretWord, setSecretWord] = useState(getRandomWord);
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRefs = useRef([...Array(MAX_ATTEMPTS)].map(() => Array(WORD_LENGTH).fill(null)));

  useEffect(() => {
    if (activeRow < MAX_ATTEMPTS) {
      inputRefs.current[activeRow][0]?.focus();
    }
  }, [activeRow]);

  const handleKeyPress = (event, row, col) => {
    let value = event.key.toUpperCase();
    let newGuess = [...currentGuess];

    if (/^[A-Z]$/.test(value) && col < WORD_LENGTH) {
      newGuess[col] = value;
      setCurrentGuess(newGuess);

      if (col < WORD_LENGTH - 1) {
        inputRefs.current[row][col + 1]?.focus();
      }
    } else if (event.key === "Backspace") {
      newGuess[col] = "";
      setCurrentGuess(newGuess);

      if (col > 0) {
        inputRefs.current[row][col - 1]?.focus();
      }
    } else if (event.key === "Enter") {
      checkGuess();
    }
  };

  const checkGuess = () => {
    if (currentGuess.join("").length !== WORD_LENGTH) {
      setMessage("Enter a full 5-letter word!");
      return;
    }

    setGuesses([...guesses, currentGuess.join("")]);

    let newKeyboardColors = { ...keyboardColors };

    currentGuess.forEach((letter, i) => {
      if (secretWord[i] === letter) {
        newKeyboardColors[letter] = "bg-green-500 text-white";
      } else if (secretWord.includes(letter)) {
        newKeyboardColors[letter] = "bg-yellow-500 text-black";
      } else {
        newKeyboardColors[letter] = "bg-gray-500 text-white";
      }
    });

    setKeyboardColors(newKeyboardColors);

    if (currentGuess.join("") === secretWord) {
      setMessage("🎉 Congrats! You guessed the word right!");
      setIsDisabled(true);

      // added flip animation to the tiles with delay
      inputRefs.current[activeRow].forEach((input, index) => {
        input.style.animation = `flip-vertical 0.6s ease-in-out ${index * 0.1}s`;
      });

    } else if (guesses.length + 1 === MAX_ATTEMPTS) {
      setMessage(`Game Over! The word was: ${secretWord}`);
    }

    setCurrentGuess(Array(WORD_LENGTH).fill(""));
    setActiveRow(activeRow + 1);
  };

  const getLetterStyle = (letter, index) => {
    if (secretWord[index] === letter) {
      return "bg-green-500 text-white";
    } else if (secretWord.includes(letter)) {
      return "bg-yellow-500 text-black";
    }
    return "bg-gray-500 text-white";
  };

  const resetGame = () => {
    setGuesses([]);
    setCurrentGuess(Array(WORD_LENGTH).fill(""));
    setIsDisabled(false);
    setActiveRow(0);
    setMessage("");
    setKeyboardColors({});
    setSecretWord(getRandomWord());
    inputRefs.current = [...Array(MAX_ATTEMPTS)].map(() => Array(WORD_LENGTH).fill(null));
  };

  return (
    <div className="flex flex-col items-center h-screen p-4 sm:p-8">
      <style>
        {`
          @keyframes flip-vertical {
            0% {
              transform: rotateX(0);
            }
            50% {
              transform: rotateX(90deg);
            }
            100% {
              transform: rotateX(0);
            }
          }
        `}
      </style> 
      <img src={worldleImage} alt="Worldle" className="mb-8" style={{ width: '300px', height: 'auto' }} />
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
        <h3 className="text-lg sm:text-xl">Guess the 5-letter word:</h3>
        <button
          onClick={resetGame}
          className="bg-green-500 text-white px-2 py-2 rounded"
        >
          New Game
        </button>
      </div>
      
      {message && <p className="mt-2 text-lg sm:text-xl">{message}</p>}
      
      <div className={isDisabled ? "grid grid-rows-6 gap-2 mb-4 pointer-events-none opacity-50" : "grid grid-rows-6 gap-2 mb-4 py-2"}>
        {[...Array(MAX_ATTEMPTS)].map((_, row) => (
          <div key={row} className="flex gap-1 sm:gap-2">
            {[...Array(WORD_LENGTH)].map((_, col) => {
              const letter = guesses[row]?.[col] || (row === activeRow ? currentGuess[col] : "");
              return (
                <input
                  key={col}
                  ref={(el) => (inputRefs.current[row][col] = el)}
                  value={letter}
                  onChange={() => {}}
                  onKeyDown={(e) => handleKeyPress(e, row, col)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 text-center border-2 border-gray-300 text-lg sm:text-xl font-bold uppercase focus:outline-none ${
                    row < activeRow ? getLetterStyle(letter, col) : ""
                  }`}
                  maxLength={1}
                  disabled={row !== activeRow}
                />
              );
            })}
          </div>
        ))}
      </div>
  
      <div className="grid grid-rows-3 gap-1 sm:gap-2">
        {["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 sm:gap-2 justify-center">
            {row.split("").map((key) => (
              <button
                key={key}
                className={`w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-xl font-bold rounded-md ${keyboardColors[key] || "bg-gray-300"}`}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordleGame;