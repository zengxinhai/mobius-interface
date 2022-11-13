import React from 'react';
import AptosWalletProvider from './wallet/wallet-provider';
import WalletConnect from './wallet/wallet-connect';

const App: React.FC = () => {
  return (
    <AptosWalletProvider>
      <WalletConnect />
    </AptosWalletProvider>
  );
};

export default App;
