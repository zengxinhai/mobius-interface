import React, { CSSProperties } from 'react';
import AptosWalletProvider from './wallet/wallet-provider';
import WalletConnect from './wallet/wallet-connect';
import AccountComp from "./components/Account.";

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  margin: 'auto'
}

const App: React.FC = () => {
  return (
    <AptosWalletProvider>
      <div style={style}>
        <WalletConnect />
        <AccountComp />
      </div>
    </AptosWalletProvider>
  );
};

export default App;
