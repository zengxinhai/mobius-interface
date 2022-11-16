import React, { CSSProperties } from 'react';
import AptosWalletProvider from './wallet/wallet-provider';
import WalletConnect from './wallet/wallet-connect';
import AccountComp from "./components/Account";
import CoinsComp from "./components/Coin";
import TransferComp from "./components/Transfer";

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '768px',
  margin: 'auto'
}

const App: React.FC = () => {
  return (
    <AptosWalletProvider>
      <div style={style}>
        <AccountComp />
        <CoinsComp />
        <WalletConnect />
        <TransferComp />
      </div>
    </AptosWalletProvider>
  );
};

export default App;
