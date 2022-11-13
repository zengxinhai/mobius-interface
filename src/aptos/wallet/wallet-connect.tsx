import React from 'react';
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import Button from '../../components/button/button';

const WalletConnect: React.FC = () => {
  const { connect, connected, disconnect, account, wallets } = useWallet();
  if (connected) {
    return (
      <>
        <WalletAddress address={account?.address?.toString() || ''} />
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
