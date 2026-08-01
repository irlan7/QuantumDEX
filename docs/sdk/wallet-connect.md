# Wallet Connect Example

QuantumDEX is self-custodial — users sign every deposit and withdrawal transaction with their own wallet (MetaMask, Rabby, or any EIP-1193-compatible wallet).

## Basic Connection

```javascript
import { ethers } from "ethers";

async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("No wallet found. Please install MetaMask or Rabby.");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  const address = accounts[0];

  console.log("Connected:", address);
  return { provider, address };
}
```

## Checking / Switching Network

QuantumDEX supports multiple EVM chains. Before a deposit or withdrawal, verify the wallet is on the correct network:

```javascript
async function ensureNetwork(targetChainIdHex) {
  const currentChainId = await window.ethereum.request({ method: "eth_chainId" });

  if (currentChainId !== targetChainIdHex) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: targetChainIdHex }],
      });
    } catch (err) {
      if (err.code === 4902) {
        // Chain not yet added to wallet — see wallet_addEthereumChain
        console.log("Chain not found in wallet, add it first.");
      }
      throw err;
    }
  }
}

// BNB Chain Mainnet
await ensureNetwork("0x38");
```
