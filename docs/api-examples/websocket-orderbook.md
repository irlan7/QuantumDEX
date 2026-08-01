# WebSocket API — Live Orderbook & Trades

QuantumDEX broadcasts live trade and orderbook events over WebSocket.

## Connect

```javascript
const ws = new WebSocket("wss://api.quantumpaychain.org/ws/orderbook");

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  console.log(msg.type, msg);
};
```

## Message Types

| Type | Description |
|---|---|
| `TRADE` | A new trade was executed |
| `RISK_ALERT` | Fraud detector identified a suspicious order wall |
| `LIQUIDATION` | A position was liquidated |

**Example `TRADE` message:**
```json
{
  "type": "TRADE",
  "pair": "BTC/USDT",
  "side": "BUY",
  "price": 65729.30,
  "size": 0.001,
  "timestamp": 1721980800000
}
```
