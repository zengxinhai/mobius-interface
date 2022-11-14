import { useState, useEffect } from "react";
import { AptosAccount, AptosClient, CoinClient } from "aptos";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { getCoins } from "./util";

export const useAptos = () => {
  const { signAndSubmitTransaction } = useWallet();
  const [ client, setClient ] = useState<AptosClient>();
  useEffect(() => {
    const nodeUrl = 'https://fullnode.mainnet.aptoslabs.com';
    const newClient = new AptosClient(nodeUrl);
    setClient(newClient);
  }, []);
  return { client, signAndSubmitTransaction }
}

export const useCoins = (address: string, coinTypes: string[]) => {
  const { client } = useAptos();
  const [coins, setCoins] = useState<{[key: string]: number}>({});
  useEffect(() => {
    client && getCoins(client, address, coinTypes).then(setCoins);
  }, [address, client, coinTypes]);
  return coins;
}
