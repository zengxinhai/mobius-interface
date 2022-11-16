import React, { CSSProperties } from 'react';
import AptosWalletProvider from './wallet/wallet-provider';
import { AptosStateProvider } from "./store/state";
import WalletConnect from './wallet/wallet-connect';
import AccountComp from "./components/Account";
import CoinsComp from "./components/Coin";
import TransferComp from "./components/Transfer";
import Box from "@mui/material/Box";

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
      <AptosStateProvider>
        <div style={style}>
          <AccountComp />
          <Box mb={3} />
          <CoinsComp />
          <Box mb={3} />
          <TransferComp />
          <WalletConnect />
        </div>
      </AptosStateProvider>
    </AptosWalletProvider>
  );
};

export default App;
