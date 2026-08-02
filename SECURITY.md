# Security Policy

## Responsible Disclosure

QuantumDEX takes the security of user funds and platform infrastructure seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Do not** open a public GitHub issue for security vulnerabilities.

Instead, please email: **contact@quantumpaychain.org**

Include:
- A description of the vulnerability
- Steps to reproduce
- Potential impact
- Any suggested remediation (optional)

### Response Timeline

We aim to:
- Acknowledge your report within **48 hours**
- Provide an initial assessment within **5 business days**
- Keep you updated on remediation progress

### Scope

This policy covers:
- QuantumDEX web application (dex.quantumpaychain.org)
- Public REST API
- The published `QuantumVault.sol` smart contract
- QuantumPay L1 RPC endpoints

Out of scope:
- Third-party integrations (wallets, RPC providers)
- Social engineering attacks
- Denial-of-service attacks

### Bug Bounty Program

We do not currently operate a formal bug bounty program. Responsible disclosure is nonetheless appreciated and will be acknowledged publicly (with your permission) once a report is resolved.

## Smart Contract Security

The `QuantumVault.sol` contract deployed on BNB Chain follows a self-custody model — user balances are tracked per-address (`balances[msg.sender][token]`), meaning only the depositing wallet can withdraw its own funds. The backend never holds custody of user trading collateral.

Contract address (BNB Chain Mainnet): see [`docs/smart-contracts`](./docs/smart-contracts) for verified deployment details.

---

Thank you for helping keep QuantumDEX and its users safe.
