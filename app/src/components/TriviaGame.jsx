import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = Array.from({ length: 17 }, (_, i) => ({ option: `Goal ${i + 1}` }));

const TriviaGame = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", minHeight: "500px" }}>
      <h1 className="text-[#1e8449] text-4xl font-bold mb-8">Trivia Game</h1>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", width: "100%", justifyContent: "center" }}>
        <div style={{ width: "500px", height: "500px" }}> {/* Fixed dimensions for the wheel container */}
          <Wheel
            outerBorderWidth={3}
            outerBorderColor="grey"
            radiusLineWidth={3}
            innerRadius={5}
            radiusLineColor="grey"
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={["#e5233d", "#dda73a", "#4ca146","#c7212f", "#ef402d", "#27bfe6","#fbc412","#a31c44","#f26a2e","#e01483", "#f89d2a", "#bf8d2c", "#407f46", "#1f97d4","#59ba47","#136a9f","#14496b"]}
            textColors={["#FFFFFF"]}
            onStopSpinning={() => setMustSpin(false)}
          />
        </div>
        <button onClick={handleSpinClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
          Spin the Wheel
        </button>
      </div>
    </div>
  );
};

export default TriviaGame;