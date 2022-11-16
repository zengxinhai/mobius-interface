import {useCallback} from "react";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { buildEntryFuncPayload } from "../chain/entry-function-txn";
import {useAccount} from "./account";

export const useCoinTransfer = () => {
  const { connected, signAndSubmitTransaction } = useWallet();
  const account = useAccount();
  return useCallback(async (recipient: string, amount: string) => {
    if (!connected || !account) return null;
    const transferTxnPayload = buildEntryFuncPayload(
      "0x1::coin",
      "transfer",
      ["0x1::aptos_coin::AptosCoin"],
      [recipient, amount],
    );
    return signAndSubmitTransaction(transferTxnPayload);
  }, [signAndSubmitTransaction, account])
}
