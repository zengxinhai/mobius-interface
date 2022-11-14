import {AptosClient, Types} from "aptos";

export const getCoins = async (client: AptosClient, address: string, coinTypes: string[]) => {
  if (!address || coinTypes.length === 0) return [];
  const fullTypes = coinTypes.map(type => getFullType(type));
  const resources = await client.getAccountResources(address);
  const coinResources = resources.filter(data => fullTypes.includes(data.type));
  const coinValues = Object.create(null);
  coinResources.forEach(resource => {
    coinValues[resource.type] = extractCoinValue(resource);
  })
  
  const result = Object.create(null);
  for (const coinType of coinTypes) {
    const fullType = getFullType(coinType);
    if (coinValues[fullType]) {
      result[coinType] = coinValues[fullType];
    } else {
      result[coinType] = 0;
    }
  }
  console.log(result);
  return result;
}

const getFullType = (typeName: string) => `0x1::coin::CoinStore<${typeName}>`

type CoinData = {
  coin: {
    value: number
  }
}
const extractCoinValue = (resource: Types.MoveResource) => {
  const coinData = resource.data as CoinData;
  return coinData.coin.value;
}
