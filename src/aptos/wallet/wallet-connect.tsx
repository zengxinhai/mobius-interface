import React from 'react';
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { supportWallets } from './support-wallets';
import Button from '../../components/button/button';

const WalletConnect: React.FC = () => {
  const { connect, connected, disconnect, account } = useWallet();
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
    <>
      {supportWallets.map(wallet =>
        <WalletConnectButton
          key={wallet.name}
          walletName={wallet.name}
          onClick={() => connect(wallet.name)}
        />
      )}
    </>
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
    <Button size={'medium'} variant={'contained'} onClick={onClick}>
      { walletName }
    </Button>
  )
}

export default WalletConnect;
