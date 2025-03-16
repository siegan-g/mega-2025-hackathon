import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const HungerBarChart = () => {
  const [hungerData, setHungerData] = useState([]);
  
  const years = [
    "2013", "2014", "2015", "2016", "2017", 
    "2018", "2019", "2020", "2021", "2022"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.worldbank.org/v2/country/ZAF/indicator/SN.ITK.DEFC.ZS?date=2013:2022&format=json"
        );
        const data = await response.json();

        const processedData = data[1].map((item) => ({
          year: item.date,
          undernourished_percent: item.value || 0, 
        }));

        const filteredData = processedData.filter((item) =>
          years.includes(item.year.toString())
        );

        setHungerData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h1 className="text-2xl font-bold mb-4 text-center">Undernourishment in South Africa (10 years)</h1>
      <BarChart width={800} height={400} data={hungerData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="undernourished_percent" fill="#ffcc00" />
      </BarChart>
    </div>
  );
};

export default HungerBarChart;
