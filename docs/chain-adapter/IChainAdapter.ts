/**
 * IChainAdapter — Public interface definition for QuantumDEX's
 * multi-chain abstraction layer.
 *
 * This is the PUBLIC INTERFACE ONLY. Production implementations
 * (BNB Chain, XRP Ledger, Ethereum, Arbitrum) contain proprietary
 * signing, verification, and security logic and are not published
 * in this repository.
 *
 * Every chain supported by QuantumDEX implements this interface,
 * allowing the core trading engine to remain chain-agnostic.
 */

export interface ChainAdapter {
  /** Human-readable chain name, e.g. "BNB Chain", "XRP Ledger" */
  getChainName(): string;

  /** Chain ID as used by the network (e.g. "56" for BNB Chain Mainnet) */
  getChainID(): string;

  /** Returns true if the adapter can currently reach the chain's RPC/API */
  isHealthy(): boolean;

  /** List of tokens currently whitelisted for this chain's vault */
  getSupportedTokens(): string[];

  /**
   * Reads a user's balance for a given token from the on-chain vault
   * (or, for non-EVM chains, the native ledger balance).
   */
  getBalance(userAddress: string, token: string): Promise<number>;

  /**
   * Initiates a withdrawal. Note: for EVM chains using the self-custody
   * vault model, withdrawals are signed directly by the user's own
   * wallet — this method may not be implemented at the backend level
   * for those chains by design.
   */
  withdraw(toAddress: string, token: string, amount: number): Promise<string>;

  /**
   * Verifies an on-chain deposit transaction and returns the
   * confirmed amount and token, decoded directly from the
   * transaction's event logs.
   */
  verifyDeposit(txHash: string): Promise<{ amount: number; token: string }>;
}

/**
 * Example usage:
 *
 * const registry = new AdapterRegistry();
 * registry.register(bnbChainAdapter);
 * registry.register(xrpLedgerAdapter);
 *
 * const balance = await registry
 *   .get("BNB Chain")
 *   .getBalance(userAddress, "USDT");
 */
