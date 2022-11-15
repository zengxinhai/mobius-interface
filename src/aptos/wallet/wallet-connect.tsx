import React, {useMemo} from 'react';
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { useUserCoinData } from '../services/coin';
import Button from '../../components/button/button';

const WalletConnect: React.FC = () => {
  const { connect, connected, disconnect, account, wallets, network } = useWallet();
  if (connected) {
    return (
      <>
        <WalletAddress address={account?.address?.toString() || ''} />
        <Coins address={account?.address?.toString() || ''} />
        <Button onClick={() => disconnect()}>
          Disconnect
        </Button>
      </>
    )
  }
  return (
    <div>
      <h3>Aptos Wallet Connectors</h3>
      {wallets.map(wallet =>
        <WalletConnectButton
          key={wallet.adapter.name}
          walletName={wallet.adapter.name}
          onClick={() => connect(wallet.adapter.name)}
        />
      )}
    </div>
  )
}

const WalletAddress: React.FC<{address: string}> = ({address}) => {
  return (
    <div>
      <p>Your address:</p>
      <p>{ address }</p>
    </div>
  )
}

const Coins: React.FC<{address: string}> = ({ address }) => {
  const coins = useUserCoinData();
  const coinItems = coins.map(coin => (
    <li key={coin.meta.symbol}>
      {coin.meta.symbol}: {coin.value}
    </li>
  ))
  return (
    <ul>
      {coinItems}
    </ul>
  )
}

type ButtonProps = {
  walletName: string
  onClick: () => void
}
const WalletConnectButton: React.FC<ButtonProps> = ({ walletName, onClick }) => {
  return (
    <Button size={'medium'} variant={'contained'} onClick={onClick} style={{marginRight: '16px'}}>
      { walletName }
    </Button>
  )
}

export default WalletConnect;
