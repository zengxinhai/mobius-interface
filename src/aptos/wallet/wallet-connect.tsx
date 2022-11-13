import React from 'react';
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import { supportWallets } from './support-wallets';

const WalletConnect: React.FC = () => {
  const { connect } = useWallet();
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

type ButtonProps = {
  walletName: string
  onClick: () => void
}
const WalletConnectButton: React.FC<ButtonProps> = ({ walletName, onClick }) => {
  return (
    <button onClick={onClick}>
      { walletName }
    </button>
  )
}

export default WalletConnect;
