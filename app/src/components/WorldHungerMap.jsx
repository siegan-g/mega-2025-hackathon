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
      text: hungerData.map((item) => `Country: ${item.country}<br>Undernourishment: ${item.undernourished}%`), // Add hover text
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
      showcoastlines: true,
      coastlinecolor: "rgb(255, 255, 255)",
      projection: {
        type: "Mercator",
      },
      scope: "world",
      countrycolor: "rgb(255, 255, 255)",
    },
    title: "Global Undernourishment Rates (2022)",
    margin: {
      l: 0,
      r: 0,
      t: 50,
      b: 0,
    },
  };

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <h1 className="text-2xl font-bold mb-4 text-center">Global Undernourishment Rates (2022)</h1>
      <Plot
        data={data}
        layout={layout}
        config={{
          displayModeBar: true,
          responsive: true,
        }}
      />
    </div>
  );
};

export default WorldHungerMap;