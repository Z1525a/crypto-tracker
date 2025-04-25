export class CryptoWebSocket {
  constructor(store) {
    this.store = store;
    this.interval = null;
  }

  connect() {
    this.interval = setInterval(() => {
      this.generateRandomUpdates();
    }, 1500);
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  generateRandomUpdates() {
    const { assets } = this.store.getState().crypto;
    
    assets.forEach(asset => {
      if (asset.symbol === 'USDT') return;

      const priceChange = (Math.random() - 0.5) * 2;
      const newPrice = asset.price * (1 + priceChange / 100);
      
      const priceChange1h = asset.priceChange1h + (Math.random() - 0.5) * 0.5;
      const priceChange24h = asset.priceChange24h + (Math.random() - 0.5) * 1;
      const priceChange7d = asset.priceChange7d + (Math.random() - 0.5) * 0.3;
      
      const volumeChange = (Math.random() - 0.5) * 0.2;
      const newVolume = asset.volume24h * (1 + volumeChange);
      
      this.store.dispatch(updatePrice({
        id: asset.id,
        price: parseFloat(newPrice.toFixed(2)),
        priceChange1h: parseFloat(priceChange1h.toFixed(2)),
        priceChange24h: parseFloat(priceChange24h.toFixed(2)),
        priceChange7d: parseFloat(priceChange7d.toFixed(2)),
        volume24h: parseFloat(newVolume.toFixed(2)),
      }));
    });
  }
}