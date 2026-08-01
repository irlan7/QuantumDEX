# REST API — Market Data

## Get Market Stats

Returns real-time mark price, 24h volume, open interest, and 24h change for a given pair.

```bash
curl "https://api.quantumpaychain.org/api/v1/market-stats?pair=BTC-USDT"
```

**Response:**
```json
{
  "pair": "BTC-USDT",
  "markPrice": 65729.30,
  "change24h": -0.59,
  "volume24h": 6208.40,
  "open_interest": 27942.49,
  "data_quality": "real"
}
```

## Get Orderbook Snapshot

```bash
curl "https://api.quantumpaychain.org/api/v1/orderbook/snapshot?pair=BTC/USDT"
```

**Response:**
```json
{
  "pair": "BTC/USDT",
  "asks": [{ "price": 65740.12, "size": 0.023 }],
  "bids": [{ "price": 65720.45, "size": 0.018 }]
}
```

## Get Candle History

```bash
curl "https://api.quantumpaychain.org/api/v1/pricehistory/candles?pair=BTC/USDT&interval=1h&limit=200"
```

**Response:**
```json
{
  "candles": [
    { "time": 1721980800000, "open": 65200, "high": 65450, "low": 65100, "close": 65380 }
  ]
}
```
