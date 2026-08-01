# Minimal Market Data Client

A small reusable client for polling QuantumDEX market data.

```javascript
class QuantumDEXClient {
  constructor(baseUrl = "https://api.quantumpaychain.org") {
    this.baseUrl = baseUrl;
  }

  async getMarketStats(pair) {
    const res = await fetch(`${this.baseUrl}/api/v1/market-stats?pair=${pair}`);
    if (!res.ok) throw new Error(`Market stats request failed: ${res.status}`);
    return res.json();
  }

  async getOrderbook(pair) {
    const res = await fetch(`${this.baseUrl}/api/v1/orderbook/snapshot?pair=${pair}`);
    if (!res.ok) throw new Error(`Orderbook request failed: ${res.status}`);
    return res.json();
  }

  async getChains() {
    const res = await fetch(`${this.baseUrl}/api/v1/chains`);
    if (!res.ok) throw new Error(`Chains request failed: ${res.status}`);
    return res.json();
  }
}

// Usage
const client = new QuantumDEXClient();
const stats = await client.getMarketStats("BTC-USDT");
console.log(`BTC/USDT mark price: $${stats.markPrice}`);
```
