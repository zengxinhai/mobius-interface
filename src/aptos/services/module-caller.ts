import { useCallback } from "react";
import { useWallet } from "@manahippo/aptos-wallet-adapter";
import { buildEntryFuncPayload } from "../chain/entry-function-txn";
import {useAccount} from "./account";

export const useModuleCaller = () => {
  const { connected, signAndSubmitTransaction } = useWallet();
  const account = useAccount();
  return useCallback(async (module: string, func: string, tyArgs: string[], args: string[]) => {
    if (!connected || !account) return null;
    const transferTxnPayload = buildEntryFuncPayload(module, func, tyArgs, args);
    return signAndSubmitTransaction(transferTxnPayload);
  }, [signAndSubmitTransaction, account])
}
