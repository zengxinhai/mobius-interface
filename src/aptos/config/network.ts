import {Network} from "../types";

export const MAIN_NET: Network = {
  nodeUrl: "https://fullnode.mainnet.aptoslabs.com",
  mode: "main",
  chainId: 1,
}
export const TEST_NET: Network = {
  nodeUrl: "https://fullnode.testnet.aptoslabs.com",
  mode: "test",
  chainId: 2,
}
export const DEV_NET: Network = {
  nodeUrl: "https://fullnode.devnet.aptoslabs.com",
  mode: "dev",
  chainId: 37,
}
