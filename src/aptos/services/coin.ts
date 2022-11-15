import { useState, useEffect } from "react";
import { useGetCoinBalances } from "../chain/coin-client";
import { COINS } from "../config";
import { Coin } from "../types";
import { useAddress, useNetwork } from "./initialize";

export const useUserCoinData = () => {
  const address = useAddress();
  const network = useNetwork();
  const getCoinBalances = useGetCoinBalances(network.nodeUrl);
  const [coins, setCoins] = useState<Coin[]>([]);
  useEffect(() => {
    const coinTypes = COINS[network.mode].map(coin => coin.type);
    getCoinBalances(address, coinTypes).then(balances => {
      setCoins(
        balances.map((balance, i) => ({ value: balance, meta: COINS[network.mode][i] }))
      )
    });
  }, [address, getCoinBalances]);
  return coins;
}
