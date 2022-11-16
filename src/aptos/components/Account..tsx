import React from "react";
import { useAccount } from "../services/account";

const AccountComp: React.FC = () => {
  const account = useAccount();
  if (!account) return null;
  return (
    <div>
      {`account sequence: ${account.sequenceNumber}`}
    </div>
  )
}

export default  AccountComp;
