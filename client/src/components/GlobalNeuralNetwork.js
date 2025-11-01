import React from 'react';
import './GlobalNeuralNetwork.css';

const GlobalNeuralNetwork = () => {
  return (
    <div className="global-neural-network">
      {[...Array(80)].map((_, i) => (
        <div key={i} className={`global-neural-node node-${i}`}></div>
      ))}
    </div>
  );
};

export default GlobalNeuralNetwork;
