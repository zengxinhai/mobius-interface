import {
  AptosWalletAdapter,
  MartianWalletAdapter,
} from '@manahippo/aptos-wallet-adapter';

export const supportWallets = [
  new AptosWalletAdapter(),
  new MartianWalletAdapter()
];
