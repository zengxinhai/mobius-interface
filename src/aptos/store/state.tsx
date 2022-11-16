import { createContext } from "react";
import { useUserCoinData  } from "../services/coin";
import { useAccount  } from "../services/account";
import { Coin, Account } from "../types";

export const initialAptosState = {
  coins: [] as Coin[],
  account: undefined as Account | undefined,
  refreshAccount: () => {},
  refreshCoins: () => {},
}

export const aptosContext = createContext(initialAptosState)

export const AptosStateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { coins, refreshCoins } = useUserCoinData();
  const { account, refreshAccount } = useAccount();
  const state = { coins, account, refreshCoins, refreshAccount };
  return (<aptosContext.Provider value={state} children={children} />)
}
