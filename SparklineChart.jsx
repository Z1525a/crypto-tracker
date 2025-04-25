import React from 'react';

const SparklineChart = ({ data, width = 100, height = 30 }) => {
  if (!data || data.length < 2) return null;

  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const range = maxValue - minValue || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - minValue) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  const isPositive = data[data.length - 1] >= data[0];
  const lineColor = isPositive ? '#10B981' : '#EF4444';

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        fill="none"
        stroke={lineColor}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

export default SparklineChart;