import React from 'react';

const PriceChange = ({ value }) => {
  const isPositive = value >= 0;
  const color = isPositive ? 'text-green-500' : 'text-red-500';
  const symbol = isPositive ? '↑' : '↓';

  return (
    <span className={`${color} font-medium`}>
      {symbol} {Math.abs(value)}%
    </span>
  );
};

export default PriceChange;