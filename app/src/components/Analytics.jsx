import React from 'react';
import RenewableEnergyChart from './RenewableEnergyChart';
import TemperatureChart from './TemperatureChart';
import analyticsImage from "../assets/analytics.png"; 
import WorldHungerMap from './WorldHungerMap';
import HungerBarChart from './HungerBarChart';
import ElectricityAccessChart from './ElectricityAccessChart';
import FisheriesProductionChart from './FisheriesProductionChart';

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

      <style jsx>{`
        .grid {
          display: grid;
          gap: 2rem;
        }
        .card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        @media (min-width: 768px) {
          .grid-cols-1 {
            grid-template-columns: repeat(1, 1fr);
          }
          .grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Analytics;
