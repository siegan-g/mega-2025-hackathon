import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const WorldHungerMap = () => {
  const [hungerData, setHungerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Malnourishment.csv");
        const csvText = await response.text();

        Papa.parse(csvText, {
          complete: (result) => {
            const processedData = result.data
              .filter((row) => row["Country Code"] && row["2022"]) 
              .map((row) => ({
                country: row["Country Code"], 
                undernourished: parseFloat(row["2022"]) || 0, 
              }));

            setHungerData(processedData);
          },
          header: true,
        });
      } catch (error) {
        console.error("Error fetching or parsing CSV:", error);
      }
    };

    fetchData();
  }, []);

  const data = [
    {
      type: "choropleth",
      locations: hungerData.map((item) => item.country),
      z: hungerData.map((item) => item.undernourished), 
      text: hungerData.map((item) => `Country: ${item.country}<br>Undernourishment: ${item.undernourished}%`), 
      hoverinfo: "text",
      colorscale: [
        [0, 'rgb(255, 245, 240)'],
        [0.2, 'rgb(254, 224, 210)'],
        [0.4, 'rgb(252, 187, 161)'],
        [0.6, 'rgb(252, 146, 114)'],
        [0.8, 'rgb(251, 106, 74)'],
        [1, 'rgb(222, 45, 38)']
      ],
      colorbar: {
        title: "Undernourishment (%)",
        thickness: 15,
      },
      locationmode: "ISO-3", 
    },
  ];

  const layout = {
    geo: {
      coastlinecolor: "rgb(255, 255, 255)",
      projection: {
        type: "Mercator",
      },
      scope: "world",
      countrycolor: "rgb(255, 255, 255)",
    },
    margin: {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
    },
  };

  return (
    <div className="flex flex-col items-left">
    <h1 className="text-2xl font-bold mb-4">Global Undernourishment Rates (2022)</h1>
    <div style={{ width: "100%", height: "600px" }}>
      <Plot
        data={data}
        layout={layout}
        config={{
          displayModeBar: true,
          responsive: true,
        }}
      />
    </div>
  </div>
  );
};

export default WorldHungerMap;