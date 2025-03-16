import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const RenewableEnergyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/EnergySupplySource.csv")
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { header: true }).data;
        
        const cleanedData = parsed.map(row => ({
          year: row.year,
          fossil_fuels: Number(row.coal) + Number(row.natural_gas) + Number(row.oil),
          renewable: Number(row.hydro) + Number(row.wind_solar_other) + Number(row.biofuels_waste),
        }));

        setData(cleanedData);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Renewable vs. Fossil Fuel Energy Supply</h1>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <XAxis dataKey="year" label={{ value: "Year", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Energy Supply (TWh)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value, name) => [`${value} TWh`, name === "renewable" ? "Renewable Energy" : "Fossil Fuels"]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend verticalAlign="top" height={36} />
          <Area type="monotone" dataKey="renewable" stackId="1" stroke="#28a745" fill="#28a745" name="Renewable Energy" />
          <Area type="monotone" dataKey="fossil_fuels" stackId="1" stroke="#dc3545" fill="#dc3545" name="Fossil Fuels" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RenewableEnergyChart;