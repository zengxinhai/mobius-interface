import React, {useCallback, useContext, useEffect, useState} from "react";
import { aptosContext } from "../store/state";
import {useAptos} from "../chain/client";
import {useNetwork} from "../services/network";
import { App, hippo_tutorial } from "../../sdk";
import Typography from "@mui/material/Typography";
import { u64 } from "@foxdao/move-to-ts";
import { HexString } from "aptos";
import {useWallet} from "@manahippo/aptos-wallet-adapter";
import Button from "@mui/material/Button";

const useLendApp = () => {
  const network = useNetwork();
  const client = useAptos(network.nodeUrl);
  const [lendApp, setLendApp] = useState<hippo_tutorial.Lend3.App>();
  useEffect(() => {
    if (!network || !client) return;
    let _app = new App(client);
    let _lendApp = _app.hippo_tutorial.lend3;
    setLendApp(_lendApp);
  }, [client])
  return lendApp;
}

const useStats = () => {
  const { account } = useContext(aptosContext);
  const lendApp = useLendApp();
  const [stats, setStats] = useState([0, 0]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    if (!account || !lendApp) return;
    (async () => {
      const user = await lendApp.loadUser(new HexString(account.address));
      const protocol = await lendApp.loadLendingProtocol(lendApp.moduleAddress, false);
      const [borrowed, deposit] = user.compute_borrow_deposit_value(protocol);
      setStats([ borrowed.toJsNumber(), deposit.toJsNumber() ]);
    })()
  }, [account, lendApp, refresh])
  return { stats, refreshStats: () => setRefresh(val => val + 1) };
}

const useBorrowDeposit = () => {
  const lendApp = useLendApp();
  const { signAndSubmitTransaction, connected } = useWallet();
  const borrow = useCallback(async (amount: number) => {
    if (!lendApp || !connected) return;
    const amountU64 = u64(amount);
    console.log(amountU64);
    const tag = lendApp.FakeBTC.getTag();
    const txn = lendApp.payload_borrow(amountU64, [lendApp.FakeBTC.getTag()]);
    // @ts-ignore
    return signAndSubmitTransaction(txn);
  }, [lendApp, connected, signAndSubmitTransaction])
  return borrow;
}

const SdkComp: React.FC = () => {
  const { stats, refreshStats } = useStats();
  const borrow = useBorrowDeposit();
  const handleBorrow = useCallback(async () => {
    await borrow(100);
    refreshStats();
  }, [refreshStats, borrow])
  return (
    <div style={{ width: '100%' }}>
      <Typography variant='h4' borderBottom={1} mb={2}>
        Borrow & Lend
      </Typography>
      <Typography>
        Borrowed: { stats[0] }
      </Typography>
      <Typography>
        Lended: { stats[1] }
      </Typography>
      <Button onClick={handleBorrow}>Borrow</Button>
    </div>
  )
}

export default SdkComp;
