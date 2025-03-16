import React from 'react';
import RenewableEnergyChart from './RenewableEnergyChart';
import TemperatureChart from './TemperatureChart';
import analyticsImage from "../assets/analytics.png"; 
import WorldHungerMap from './WorldHungerMap';

const Analytics = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <img src={analyticsImage} alt="Analytics" className="mb-8" style={{ width: '300px', height: 'auto' }} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="col-span-1">
          <RenewableEnergyChart />
        </div>
        <div className="col-span-1">
          <TemperatureChart />
        </div>
        <div className="col-span-1 md:col-span-2">
          <WorldHungerMap />
        </div>
      </div>
    </div>
  );
};

export default Analytics;