import React, {useContext} from "react";
import Typography from "@mui/material/Typography";
import { aptosContext } from "../store/state";
import {useWallet} from "@manahippo/aptos-wallet-adapter";

const AccountComp: React.FC = () => {
  const { connected } = useWallet();
  const { account } = useContext(aptosContext);
  if (!connected || !account) return null;
  return (
    <div style={{ width: '100%' }}>
      <Typography variant='h4' borderBottom={1} mb={2}>
        Your account info
      </Typography>
      <Typography mb={1}>{`Address: ${account.address}`}</Typography>
      <Typography>{`Sequence: ${account.sequenceNumber}`}</Typography>
    </div>
  )
}

export default  AccountComp;
