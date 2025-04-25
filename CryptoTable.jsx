import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSlice';
import PriceChange from './PriceChange';
import SparklineChart from './SparklineChart';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  const formatNumber = (num) => {
    if (num === null || num === undefined) return 'N/A';
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  // ... rest of the CryptoTable component code ...
};

export default CryptoTable;