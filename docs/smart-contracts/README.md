# Smart Contracts

## QuantumVault

`QuantumVault.sol` is QuantumDEX's self-custodial collateral vault. It powers all deposit/withdrawal flows across every supported chain.

### Design Principles

- **Self-custodial by design.** User balances are tracked per-address in `balances[msg.sender][token]`. Only the depositing wallet can withdraw its own funds — the contract owner/operator **cannot** move user funds out of the vault.
- **Deterministic address across chains.** Because the contract is deployed by the same address with the same nonce sequence, `QuantumVault` resolves to the identical address on every EVM chain QuantumDEX supports.

### Deployed Addresses

| Chain | Address | Explorer |
|---|---|---|
| BNB Chain (Mainnet) | `0xDDD16A76dd8cF5F4b870D166aEf2A38Ea994629F` | [BscScan](https://bscscan.com/address/0xDDD16A76dd8cF5F4b870D166aEf2A38Ea994629F) |
| Ethereum (Sepolia Testnet) | `0xDDD16A76dd8cF5F4b870D166aEf2A38Ea994629F` | [Etherscan Sepolia](https://sepolia.etherscan.io/address/0xDDD16A76dd8cF5F4b870D166aEf2A38Ea994629F) |
| Arbitrum (Sepolia Testnet) | `0xDDD16A76dd8cF5F4b870D166aEf2A38Ea994629F` | [Arbiscan Sepolia](https://sepolia.arbiscan.io/address/0xDDD16A76dd8cF5F4b870D166aEf2A38Ea994629F) |

### Key Functions

| Function | Description |
|---|---|
| `depositToken(address token, uint256 amount)` | Deposit an ERC-20 token (e.g. USDT, USDC) into the vault |
| `depositNative()` | Deposit the chain's native currency (BNB, ETH) |
| `withdrawToken(address token, uint256 amount)` | Withdraw a previously deposited ERC-20 token |
| `withdrawNative(uint256 amount)` | Withdraw native currency |
| `getBalance(address trader, address token)` | Read a user's vault balance for a token |
| `getNativeBalance(address trader)` | Read a user's native currency vault balance |
| `acceptedTokens(address token)` | Check if a token is whitelisted for deposits |
| `whitelistToken(address token, bool status)` | *(Owner only)* Whitelist or de-whitelist a token |

### ABI

See [`QuantumVault.abi.json`](./QuantumVault.abi.json) for the complete, unmodified ABI as used in production.

### Verification

Every deposit and withdrawal can be independently verified on-chain via the block explorer links above, or by parsing the `Deposited` and `Withdrawn` events emitted by the contract.
