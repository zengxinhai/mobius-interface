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
  const [refresh, setRefresh] = useState(1);
  useEffect(() => {
    getAccount(address).then(data => {
      data && setAccount({ address, sequenceNumber: data.sequence_number, authKey: data.authentication_key })
    })
  }, [address, getAccount, refresh]);
  return { account, refreshAccount: () => setRefresh((val) => val + 1) };
}
