import { useState, useEffect } from "react";
import { AptosClient } from "aptos";

export const useAptos = (nodeUrl: string) => {
  const [ client, setClient ] = useState<AptosClient>();
  useEffect(() => {
    nodeUrl && setClient(new AptosClient(nodeUrl));
  }, [nodeUrl]);
  return client;
}
