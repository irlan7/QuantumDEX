# QuantumDEX Roadmap

## Available Today

- Perpetual futures trading (BTC/USDT, ETH/USDT, and additional pairs)
- AetraAI agentic trading engine — RSI-based strategy execution with on-chain-auditable logs
- Strategy Backtester
- BNB Chain: BNB (native) deposit & withdrawal
- BNB Chain: USDT (BEP-20) deposit & withdrawal
- Self-custodial wallet integration (MetaMask, Rabby)
- Escrow AI (Stellar network, Soroban smart contracts)
- Analytics dashboard
- Public REST API

## In Development

- **Chain Adapter Layer** — a unified interface (`ChainAdapter`) that abstracts blockchain-specific logic behind a single contract. Implemented for:
  - BNB Chain (production)
  - XRP Ledger (read-only, mainnet)
  - Ethereum Sepolia (testnet, USDC whitelisted)
  - Arbitrum Sepolia (testnet)
- Multi-chain deposit verification via on-chain event log parsing
- Cross-chain balance aggregation

## Planned

- Solana integration (Chain Adapter)
- Stellar integration for QuantumDEX trading (beyond the existing Escrow AI module)
- QuantumSwap — spot AMM module
- Native multi-chain liquidity routing
- Withdrawal automation research for non-EVM chains (requires a separate custody architecture decision)

## Notes on Scope

This roadmap reflects the public-facing QuantumDEX product. Internal infrastructure — matching engine internals, risk engine logic, AI model internals, and production configuration — is intentionally not detailed here, in line with our [Security Policy](./SECURITY.md).
