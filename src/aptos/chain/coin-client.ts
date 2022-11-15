import { useCallback } from "react";
import { AptosClient, Types } from "aptos";
import { useAptos } from "./client";

export const useGetCoinBalances = (nodeUrl: string) => {
  const client = useAptos(nodeUrl);
  return useCallback(async (address: string, coinTypes: string[]) => {
    if (!client) return [] as number[];
    return _getCoinBalances(client, address, coinTypes);
  }, [client]);
}

/***
 *
 * @param client
 * @param address
 * @param coinTypes
 * @returns array of coinBalance
 */
const _getCoinBalances = async (client: AptosClient, address: string, coinTypes: string[]): Promise<number[]> => {
  console.log(address, coinTypes);
  if (!address || coinTypes.length === 0) return [];
  
  const resources = await client.getAccountResources(address);
  const coinResources = resources.filter(data => coinTypes.includes(data.type));
  console.log(address, coinTypes, coinResources);
  
  const coinValues: {[K in typeof coinTypes[number]]: number} = Object.create(null);
  coinResources.forEach(resource => {
    coinValues[resource.type] = extractCoinValue(resource);
  })
  
  return coinTypes.map(coinType => coinValues[coinType] || 0);
}

type CoinData = {
  coin: {
    value: number
  }
}
const extractCoinValue = (resource: Types.MoveResource) => {
  const coinData = resource.data as CoinData;
  return coinData.coin.value;
}
