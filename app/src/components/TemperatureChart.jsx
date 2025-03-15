import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TemperatureChart = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch("/GlobalTemperature.csv"); 
        const csvText = await response.text();


        Papa.parse(csvText, {
            header: true, 
            dynamicTyping: true, 
            skipEmptyLines: true,
            complete: (result) => {
              console.log("Parsed CSV Data:", result.data);
  
              const formattedData = result.data.map((row) => ({
                year: row.Year, 
                temperature: row["J-D"], 
              })).filter(row => row.temperature !== "***"); 
              setTemperatureData(formattedData);
              setLoading(false); 
            },
          });
        } catch (error) {
          console.error("Error loading CSV:", error);
          setError("Failed to load CSV data.");  
          setLoading(false);
        }
      };
  
      fetchCSV();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;    
    }
  
    if (error) {
      return <div>{error}</div>;  
    }
  
    return (
      <div>
        <h2>Global Temperature Change Over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={temperatureData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: "°C", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#FF5733" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default TemperatureChart;