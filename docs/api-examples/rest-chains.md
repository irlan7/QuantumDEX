# REST API — Multi-Chain

## List Supported Chains

Returns every chain currently registered in QuantumDEX's Chain Adapter Layer, along with health status and supported tokens.

```bash
curl "https://api.quantumpaychain.org/api/v1/chains"
```

**Response:**
```json
{
  "chains": [
    { "chain_name": "BSC", "chain_id": "56", "is_healthy": true, "tokens": ["USDT"] },
    { "chain_name": "XRP", "chain_id": "mainnet", "is_healthy": true, "tokens": ["XRP"] },
    { "chain_name": "Ethereum", "chain_id": "11155111", "is_healthy": true, "tokens": ["USDC"] },
    { "chain_name": "Arbitrum", "chain_id": "421614", "is_healthy": true, "tokens": [] }
  ]
}
```

## Get Cross-Chain Balance

Reads a user's on-chain vault balance for a specific chain and token.

```bash
curl "https://api.quantumpaychain.org/api/v1/chains/balance?chain=BSC&address=0xYOUR_ADDRESS&token=USDT"
```

**Response:**
```json
{
  "chain": "BSC",
  "address": "0xYOUR_ADDRESS",
  "token": "USDT",
  "balance": 1.5
}
```
