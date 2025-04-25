import React, { useEffect } from 'react';
import { CryptoWebSocket } from './features/crypto/cryptoWebSocket';
import { store } from './store';
import CryptoTable from './components/CryptoTable';

function App() {
  useEffect(() => {
    const cryptoWS = new CryptoWebSocket(store);
    cryptoWS.connect();

    return () => {
      cryptoWS.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Real-Time Crypto Price Tracker</h1>
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <CryptoTable />
        </div>
      </div>
    </div>
  );
}

export default App;