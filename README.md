<div align="center">

# QuantumDEX

**AI-Powered Multi-Chain Decentralized Exchange**
*Built within the QuantumPay Ecosystem*

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://dex.quantumpaychain.org)
[![License](https://img.shields.io/badge/license-proprietary-blue)](#license)
[![BNB Chain](https://img.shields.io/badge/BNB%20Chain-integrated-F0B90B)](#bnb-chain-integration)

[Live Demo](https://dex.quantumpaychain.org) · [Documentation](./docs) · [Whitepaper](./docs/whitepaper) · [Architecture](./docs/architecture)

</div>

---

## Introduction

QuantumDEX is an AI-powered, multi-chain decentralized exchange built within the QuantumPay ecosystem by **PT Teknologi Quantum Nusantara** (Indonesia). It combines enterprise-grade trading infrastructure with **AetraAI**, an autonomous agentic trading engine that creates and executes strategies with on-chain-auditable decision logs.

Key pillars:
- **Enterprise-grade architecture** — modular services (matching engine, risk engine, price oracle, chain adapters) running as independent containers
- **AI-assisted trading** — AetraAI evaluates technical indicators (RSI, EMA) and executes trades automatically within trader-defined risk limits
- **Modular infrastructure** — a Chain Adapter Layer abstracts blockchain-specific logic behind a single interface
- **Multi-chain roadmap** — BNB Chain in production; Ethereum, Arbitrum, and XRP Ledger integrated at testnet/read stage

---

## Current Capabilities

*Only features that are implemented and verifiable are listed below.*

| Capability | Status |
|---|---|
| Perpetual Futures Trading (BTC/USDT, ETH/USDT, and more) | ✅ Live |
| Wallet Integration (MetaMask, Rabby, WalletConnect-compatible) | ✅ Live |
| Deposit — BNB (BEP-20 native) | ✅ Live |
| Withdrawal — BNB (BEP-20 native) | ✅ Live |
| Deposit — USDT (BEP-20) | ✅ Live |
| Withdrawal — USDT (BEP-20) | ✅ Live |
| AetraAI Agentic Trading Engine | ✅ Live (RSI-based skills, real on-chain execution) |
| Strategy Backtester | ✅ Live |
| Analytics Dashboard | ✅ Live |
| Responsive UI (desktop & mobile) | ✅ Live |
| Public REST API | ✅ Live |
| Escrow AI *(Stellar network — separate module)* | ✅ Live on Stellar Testnet |

All deposit/withdraw flows are **self-custodial** — trades and fund movements are signed directly by the user's own wallet. The backend never holds user private keys.

---

## Roadmap

### Available Today
- Perpetual futures trading on BNB Chain
- AI agentic trading (AetraAI)
- Strategy backtesting
- BNB & USDT (BEP-20) deposit/withdrawal
- Escrow AI (Stellar network)

### In Development
- Chain Adapter Layer — unified interface for multi-chain balance reading and deposit verification (BNB Chain, XRP Ledger, Ethereum Sepolia, and Arbitrum Sepolia adapters implemented at testnet stage)
- USDC support on Ethereum & Arbitrum testnets
- Cross-chain settlement

### Planned
- Solana integration
- Stellar integration for QuantumDEX trading (currently Stellar hosts Escrow AI only)
- QuantumSwap (spot AMM module)
- Native multi-chain liquidity routing

---

## Why QuantumDEX

QuantumDEX is built on the thesis that the next generation of DeFi infrastructure needs to be:

1. **AI-assisted, not AI-decorated** — AetraAI actually executes trades based on real technical indicators, not simulated or templated outputs. Every execution is logged and auditable.
2. **Multi-chain from the architecture up** — a Chain Adapter Layer means adding a new chain does not require rewriting the core trading engine.
3. **Self-custodial by default** — users always sign their own transactions; the platform never takes custody of user funds for trading collateral.
4. **Enterprise-scalable** — modular microservices architecture built in Go, deployed via Docker, backed by a distributed SQL database (CockroachDB).

---

## BNB Chain Integration

### Current Integration
- Wallet Connect (MetaMask, Rabby)
- BNB (BEP-20 native) Deposit
- BNB (BEP-20 native) Withdrawal
- USDT (BEP-20) Deposit
- USDT (BEP-20) Withdrawal
- On-chain vault contract (`QuantumVault.sol`) — deposits and withdrawals are verifiable directly on BscScan

### Future Integration
- Native liquidity provisioning on BNB Chain
- Multi-chain settlement (BNB Chain as primary settlement layer)
- Cross-chain asset routing via the Chain Adapter Layer

---

## Screenshots

*(See [`docs/screenshots`](./docs/screenshots) for the full set — landing page, trading interface, wallet, deposit/withdrawal flow, Escrow AI, analytics, mobile view, dark theme.)*

---

## Documentation

| Folder | Contents |
|---|---|
| [`docs/architecture`](./docs/architecture) | System architecture diagrams (high-level) |
| [`docs/whitepaper`](./docs/whitepaper) | Latest QuantumDEX whitepaper |
| [`docs/sdk`](./docs/sdk) | Starter SDK examples (wallet connect, market data) |
| [`docs/api-examples`](./docs/api-examples) | REST & WebSocket API usage examples |
| [`docs/smart-contracts`](./docs/smart-contracts) | Public-facing contract interfaces |
| [`docs/chain-adapter`](./docs/chain-adapter) | Chain Adapter Layer interface definitions |

---

## Demo

- **Live Demo:** [dex.quantumpaychain.org](https://dex.quantumpaychain.org)
- **Demo Video (YouTube):** [youtu.be/FWLdytj8N0I](https://youtu.be/FWLdytj8N0I)
- **Demo Video (TikTok):** [vt.tiktok.com/ZS4kH3LVj](https://vt.tiktok.com/ZS4kH3LVj/)

---

## Security

See [SECURITY.md](./SECURITY.md) for our responsible disclosure policy and security contact information.

---

## Community

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- [CHANGELOG.md](./CHANGELOG.md)
- [ROADMAP.md](./ROADMAP.md)

---

## License

This repository is published for evaluation, partnership, and community purposes. Core trading engine, matching engine, risk engine, and AI models remain proprietary to PT Teknologi Quantum Nusantara. See individual files for licensing notes.

---

<div align="center">

Built by **PT Teknologi Quantum Nusantara** · Indonesia

[dex.quantumpaychain.org](https://dex.quantumpaychain.org) · [aetraai.com](https://aetraai.com)

</div>
