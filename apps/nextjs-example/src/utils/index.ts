import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { NetworkInfo } from "@nightlylabs/wallet-adapter-core";

export const aptosClient = (network?: NetworkInfo | null) => {
  if (network?.name === Network.DEVNET) {
    return DEVNET_CLIENT;
  } else if (network?.name === Network.TESTNET) {
    return TESTNET_CLIENT;
  } else if (network?.name === Network.MAINNET) {
    return MAINNET_CLIENT;
  } else {
    const CUSTOM_CONFIG = new AptosConfig({
      network: Network.CUSTOM,
      fullnode: network?.url,
    });
    return new Aptos(CUSTOM_CONFIG);
  }
};

// Devnet client
export const DEVNET_CONFIG = new AptosConfig({
  network: Network.DEVNET,
});
export const DEVNET_CLIENT = new Aptos(DEVNET_CONFIG);

// Testnet client
export const TESTNET_CONFIG = new AptosConfig({ network: Network.TESTNET });
export const TESTNET_CLIENT = new Aptos(TESTNET_CONFIG);

// Mainnet client
export const MAINNET_CONFIG = new AptosConfig({ network: Network.MAINNET });
export const MAINNET_CLIENT = new Aptos(MAINNET_CONFIG);

export const isSendableNetwork = (
  connected: boolean,
  networkName?: string
): boolean => {
  return connected;
};

export const isMainnet = (
  connected: boolean,
  networkName?: string
): boolean => {
  return connected && false;
};
