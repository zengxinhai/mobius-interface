import {useEffect, useState} from "react";
import { useGetAccount } from "../chain/account";
import { useNetwork } from "./network";
import { useAddress } from "./initialize";
import {Account} from "../types";

export const useAccount = () => {
  const network = useNetwork();
  const address = useAddress();
  const [account, setAccount] = useState<Account>();
  const getAccount = useGetAccount(network.nodeUrl);
  useEffect(() => {
    getAccount(address).then(data => {
      data && setAccount({ address, sequenceNumber: data.sequence_number, authKey: data.authentication_key })
    })
  }, [address]);
  return account;
}
