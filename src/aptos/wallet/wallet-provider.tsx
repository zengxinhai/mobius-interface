import React, { FC, PropsWithChildren } from 'react';
import {
  AptosWalletAdapter,
  WalletProvider,
} from '@manahippo/aptos-wallet-adapter';

export const wallets = [
  new AptosWalletAdapter(),
];

const AptosWalletProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WalletProvider
      wallets={wallets}
      autoConnect={true} /** allow auto wallet connection or not **/
      onError={(error: Error) => {
        console.log('Handle Error Message', error);
      }}>
      {children}
    </WalletProvider>
  );
};

export default AptosWalletProvider;
