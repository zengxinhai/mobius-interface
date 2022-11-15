import { useState, useEffect } from "react";
import { useWallet } from "@manahippo/aptos-wallet-adapter";

export const useAddress = () => {
  const { account } = useWallet();
  const [address, setAddress] = useState("");
  useEffect(() => {
    setAddress(account?.address?.toString() || "")
  }, [account?.address])
  return address
}
