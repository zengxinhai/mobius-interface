import React from "react";
import { useAccount } from "../services/account";

const AccountComp: React.FC = () => {
  const account = useAccount();
  if (!account) return null;
  return (
    <div style={{ width: '100%' }}>
      <p>{`Address: ${account.address}`}</p>
      <p>{`Sequence: ${account.sequenceNumber}`}</p>
    </div>
  )
}

export default  AccountComp;
