import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TemperatureChart = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch("/data/GlobalTemperature.csv");
        if (!response.ok) {
          throw new Error("Failed to fetch CSV data");
        }
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (result) => {
            const formattedData = result.data
              .filter((row) => row.Year && row["J-D"] !== "***") 
              .map((row) => ({
                year: parseInt(row.Year),
                temperature: parseFloat(row["J-D"]), 
              }))
              .filter((row) => !isNaN(row.temperature)) 
              .slice(-20); 

            console.log("Formatted Data:", formattedData); 

            setTemperatureData(formattedData);
            setLoading(false);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
            setError("Failed to parse CSV data.");
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV data:", error);
        setError("Failed to load CSV data.");
        setLoading(false);
      }
    };

    fetchCSVData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (<div>
    
    <h1 className="text-2xl font-bold mb-4 text-center">Average Global Temperature Increase Over the Last 20 Years</h1>
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={temperatureData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: "°C", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#FF5733"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default TemperatureChart;