import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ElectricityAccessChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/ElectricityAccess.csv')
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          complete: (result) => {
            const parsedData = result.data;
            const chartData = [];

            
            const years = parsedData[0].slice(4);  

            
            const row = parsedData[1]; 
            const yearData = years.map((year, index) => ({
              year,
              value: row[4 + index] ? parseFloat(row[4 + index]) : 0,
            }));

            chartData.push(...yearData);  

            setData(chartData);
          },
        });
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Access to Electricity (Rural Population) in South Africa</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis 
          label={{value: "Percentage (%)", angle:-90, position:"insideLeft"}}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ElectricityAccessChart;
