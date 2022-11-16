import React, {useCallback, useContext, useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useCoinTransfer } from "../services/coin-transfer";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import {aptosContext} from "../store/state";
import { useWallet } from "@manahippo/aptos-wallet-adapter";

const TransferComp: React.FC = () => {
  const { connected } = useWallet();
  const { refreshAccount, refreshCoins } = useContext(aptosContext);
  const coinTransfer = useCoinTransfer();
  const [recipient, setRecipient] = useState('');
  const [amount, setAMount] = useState('');
  const handleTransfer = useCallback(async (recipient: string, amount: string | number) => {
    await coinTransfer(recipient, Number(amount) * (10 ** 8));
    refreshCoins();
    refreshAccount();
  }, [refreshAccount, refreshCoins, coinTransfer])
  if (!connected || !coinTransfer) return null;
  return (
    <div style={{ width: '100%' }}>
      <Typography mb={2}>Transfer APT</Typography>
      <div>
        <TextField
          label='Recipient'
          value={recipient}
          style={{ width: '480px' }}
          onChange={({target}) => setRecipient(target.value)}
        />
      </div>
      <Box mb={2} />
      <TextField
        label='Amount'
        value={amount}
        InputProps={{
          endAdornment: <InputAdornment position='start'>APT</InputAdornment>
        }}
        onChange={({target}) => setAMount(target.value)}
      />
      <Box mb={2} />
      <div>
        <Button onClick={() => handleTransfer(recipient, amount)}>
          Transfer
        </Button>
      </div>
    </div>
  )
}

export default  TransferComp;
