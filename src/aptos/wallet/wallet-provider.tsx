import React, { FC, PropsWithChildren } from 'react';
import {
  WalletProvider,
} from '@manahippo/aptos-wallet-adapter';
import { supportWallets } from './support-wallets';


const AptosWalletProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WalletProvider
      wallets={supportWallets}
      autoConnect={true} /** allow auto wallet connection or not **/
      onError={(error: Error) => {
        console.log('Handle Error Message', error);
      }}>
      {children}
    </WalletProvider>
  );
};

export default AptosWalletProvider;
