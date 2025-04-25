import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: '/btc.png',
      price: 50000,
      priceChange1h: 0.5,
      priceChange24h: 2.3,
      priceChange7d: -1.2,
      marketCap: 950000000000,
      volume24h: 25000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      sparkline: [49000, 49500, 50200, 49800, 50500, 50300, 50000],
    },
    // Other cryptocurrencies...
  ],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      const { id, price, priceChange1h, priceChange24h, priceChange7d, volume24h } = action.payload;
      const asset = state.assets.find(asset => asset.id === id);
      if (asset) {
        asset.price = price;
        asset.priceChange1h = priceChange1h;
        asset.priceChange24h = priceChange24h;
        asset.priceChange7d = priceChange7d;
        asset.volume24h = volume24h;
      }
    },
  },
});

export const { updatePrice } = cryptoSlice.actions;
export const selectAllAssets = (state) => state.crypto.assets;
export const selectAssetById = (id) => (state) => state.crypto.assets.find(asset => asset.id === id);
export default cryptoSlice.reducer;