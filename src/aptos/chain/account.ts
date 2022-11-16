import { useCallback } from "react";
import { AptosClient } from "aptos";
import { useAptos } from "./client";

const getAccount = async (client: AptosClient, address: string) => {
  return  await client.getAccount(address);
}

export const useGetAccount = (nodeUrl: string) => {
  const client = useAptos(nodeUrl);
  return useCallback(async (address: string) => {
    if (!client || !address) return null;
    return getAccount(client, address);
  }, [client]);
}
