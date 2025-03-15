import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

import goal1 from "../SDGImages/goal1.png";
import goal2 from "../SDGImages/goal2.png";
import goal3 from "../SDGImages/goal3.png";
import goal4 from "../SDGImages/goal4.png";
import goal5 from "../SDGImages/goal5.png";
import goal6 from "../SDGImages/goal6.png";
import goal7 from "../SDGImages/goal7.png";
import goal8 from "../SDGImages/goal8.png";
import goal9 from "../SDGImages/goal9.png";
import goal10 from "../SDGImages/goal10.png";
import goal11 from "../SDGImages/goal11.png";
import goal12 from "../SDGImages/goal12.png";
import goal13 from "../SDGImages/goal13.png";
import goal14 from "../SDGImages/goal14.png";
import goal15 from "../SDGImages/goal15.png";
import goal16 from "../SDGImages/goal16.png";
import goal17 from "../SDGImages/goal17.png";

const goals = [
  { option: "Goal 1", image: { uri: goal1, sizeMultiplier: 0.3, offsetY: 300 }, definition: "No Poverty" },
  { option: "Goal 2", image: { uri: goal2, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Zero Hunger" },
  { option: "Goal 3", image: { uri: goal3, sizeMultiplier: 0.4, offsetY: 300 }, definition: "Good Health and Well-being" },
  { option: "Goal 4", image: { uri: goal4, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Quality Education" },
  { option: "Goal 5", image: { uri: goal5, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Gender Equality" },
  { option: "Goal 6", image: { uri: goal6, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Clean Water and Sanitation" },
  { option: "Goal 7", image: { uri: goal7, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Affordable and Clean Energy" },
  { option: "Goal 8", image: { uri: goal8, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Decent Work and Economic Growth" },
  { option: "Goal 9", image: { uri: goal9, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Industry, Innovation, and Infrastructure" },
  { option: "Goal 10", image: { uri: goal10, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Reduced Inequalities" },
  { option: "Goal 11", image: { uri: goal11, sizeMultiplier: 0.3, offsetY: 300 }, definition: "Sustainable Cities and Communities" },
  { option: "Goal 12", image: { uri: goal12, sizeMultiplier: 0.3, offsetY: 300 }, definition: "Responsible Consumption and Production" },
  { option: "Goal 13", image: { uri: goal13, sizeMultiplier: 0.3, offsetY: 300 }, definition: "Climate Action" },
  { option: "Goal 14", image: { uri: goal14, sizeMultiplier: 0.3, offsetY: 300 }, definition: "Life Below Water" },
  { option: "Goal 15", image: { uri: goal15, sizeMultiplier: 0.3, offsetY: 300 }, definition: "Life on Land" },
  { option: "Goal 16", image: { uri: goal16, sizeMultiplier: 0.5, offsetY: 300 }, definition: "Peace, Justice, and Strong Institutions" },
  { option: "Goal 17", image: { uri: goal17, sizeMultiplier: 0.4, offsetY: 300 }, definition: "Partnerships for the Goals" }
];

const TriviaGame = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * goals.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setQuestion(null);
    setOptions([]);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const generateQuestion = (correctGoal) => {
    let incorrectOptions = goals
      .filter(goal => goal.option !== correctGoal.option)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    let allOptions = [...incorrectOptions, correctGoal].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
    setQuestion(`Which SDG does this image represent?`);
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === goals[prizeNumber].definition);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", minHeight: "500px" }} className="flex flex-col items-center h-screen p-8">
      <h1 className="text-[#1e8449] text-4xl font-bold mb-8">Trivia Game</h1>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "100%", justifyContent: "center" }}>
      <div style={{ marginLeft: "20px", padding: "15px", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <h2 style={{ fontSize: "22px", color: "#333", marginBottom: "10px" }}>Instructions</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#333" }}>
            <li>Click the "Spin the Wheel" button to start the game.</li>
            <li>Wait for the wheel to stop spinning.</li>
            <li>A question will appear based on the selected goal.</li>
            <li>Select the correct answer from the options provided.</li>
            <li>You will be notified if your answer is correct or incorrect.</li>
          </ul>
        </div>
        <Wheel
          outerBorderColor="grey"
          radiusLineColor="grey"
          mustStartSpinning={mustSpin}
          backgroundColors={[
            "#e5233d", "#dda73a", "#4ca146", "#c7212f", "#ef402d",
            "#27bfe6", "#fbc412", "#a31c44", "#f26a2e", "#e01483",
            "#f89d2a", "#bf8d2c", "#407f46", "#1f97d4", "#59ba47",
            "#136a9f", "#14496b"
          ]}
          prizeNumber={prizeNumber}
          data={goals}
          onStopSpinning={() => {
            setMustSpin(false);
            generateQuestion(goals[prizeNumber]);
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", justifyContent: "center" }}>
          <button
            onClick={handleSpinClick}
            disabled={mustSpin}
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: mustSpin ? "#ccc" : "#1e8449",
              color: "#fff",
              borderRadius: "8px",
              cursor: mustSpin ? "not-allowed" : "pointer",
              transition: "background 0.3s ease",
              border: "none"
            }}
          >
            {mustSpin ? "Spinning..." : "Spin the Wheel"}
          </button>

          {question && (
            <div style={{
              textAlign: "center",
              marginTop: "20px",
              padding: "15px",
              background: "#f9f9f9",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
            }}>
              <h2 style={{ fontSize: "22px", color: "#333" }}>{question}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option.definition)}
                    disabled={isCorrect !== null}
                    style={{
                      padding: "10px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      backgroundColor: isCorrect === null ? "#fff" :
                        option.definition === goals[prizeNumber].definition ? "#4CAF50" : "#FF4F4F",
                      color: isCorrect === null ? "#333" : "#fff",
                      cursor: isCorrect === null ? "pointer" : "not-allowed",
                      transition: "background 0.3s ease"
                    }}
                  >
                    {option.definition}
                  </button>
                ))}
              </div>
              {isCorrect !== null && (
                <p style={{
                  marginTop: "15px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: isCorrect ? "#4CAF50" : "#FF4F4F"
                }}>
                  {isCorrect ? "Correct! 🎉" : "Incorrect 😞"}
                </p>
              )}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default TriviaGame;