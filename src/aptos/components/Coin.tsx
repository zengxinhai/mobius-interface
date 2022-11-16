import React, {useContext} from 'react';
import Typography from "@mui/material/Typography";
import { aptosContext } from "../store/state";
import {useWallet} from "@manahippo/aptos-wallet-adapter";

const CoinsComp: React.FC = () => {
  const { connected } = useWallet();
  const { coins } = useContext(aptosContext);
  if (!connected) return null;
  const coinItems = coins.map(coin => (
    <div key={coin.meta.symbol}>
      <strong>{coin.meta.symbol}</strong>: { (coin.value / 10**8).toFixed(4) }
    </div>
  ))
  return (
    <div style={{ width: '100%' }}>
      <Typography variant='h4' mb={2} borderBottom={1}>Your balance</Typography>
      {coinItems}
    </div>
  )
}

export default CoinsComp;
