import React from 'react';
import RenewableEnergyChart from './RenewableEnergyChart';
import TemperatureChart from './TemperatureChart';
import analyticsImage from "../assets/analytics.png"; 
import WorldHungerMap from './WorldHungerMap';
import HungerBarChart from './HungerBarChart';
import ElectricityAccessChart from './ElectricityAccessChart';
import FisheriesProductionChart from './FisheriesProductionChart';

import '../styles/App.css'; 

const Analytics = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <img src={analyticsImage} alt="Analytics" className="mb-8" style={{ width: '300px', height: 'auto' }} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="card">
          <WorldHungerMap />
        </div>
        <div className="card">
          <TemperatureChart />
        </div>
        <div className="card md:col-span-2">
          <RenewableEnergyChart />
        </div>
        <div className="card ">
          <HungerBarChart />
        </div>
        <div className='card'>
          <ElectricityAccessChart />
        </div>
        <div className="card">
        <FisheriesProductionChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;