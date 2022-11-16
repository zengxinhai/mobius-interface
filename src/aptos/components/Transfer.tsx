import React, {useState} from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useCoinTransfer } from "../services/coin-transfer";

const TransferComp: React.FC = () => {
  const coinTransfer = useCoinTransfer();
  const [recipient, setRecipient] = useState('');
  const [amount, setAMount] = useState('');
  if (!coinTransfer) return null;
  return (
    <div style={{ width: '100%' }}>
      <div>
        <label>Recipient:</label>
        <Input type='text' value={recipient} onChange={({target}) => setRecipient(target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <Input type='text' value={amount} onChange={({target}) => setAMount(target.value)} />
      </div>
      <Button onClick={() => coinTransfer(recipient, amount)}>
        Transfer
      </Button>
    </div>
  )
}

export default  TransferComp;
