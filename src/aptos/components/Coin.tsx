import React from 'react';
import { useUserCoinData } from '../services/coin';

const CoinsComp: React.FC = () => {
  const coins = useUserCoinData();
  const coinItems = coins.map(coin => (
    <p key={coin.meta.symbol}>
      {coin.meta.symbol}: {coin.value}
    </p>
  ))
  return (
    <div style={{ width: '100%' }}>
      {coinItems}
    </div>
  )
}

export default CoinsComp;
