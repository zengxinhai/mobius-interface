import { useState, useEffect } from "react";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { MAIN_NET, TEST_NET, DEV_NET } from "../config";
import { Network } from "../types";

export const useNetwork = () => {
  const { network: _network, connected } = useWallet();
  const [network, setNetwork] = useState<Network>(MAIN_NET);
  useEffect(() => {
    if (!connected || !_network.name) return;
    if (_network.name.toLowerCase() === "mainnet") {
      setNetwork(MAIN_NET);
    } else if (_network.name.toLowerCase() === "testnet") {
      setNetwork(TEST_NET);
    } else {
      setNetwork(DEV_NET);
    }
  }, [_network, connected])
  return network
}
