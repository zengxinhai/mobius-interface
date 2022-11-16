import { BCS, TxnBuilderTypes } from "aptos";
const {
  AccountAddress,
  TypeTagStruct,
  EntryFunction,
  StructTag,
  TransactionPayloadEntryFunction,
  RawTransaction,
  ChainId,
} = TxnBuilderTypes;

const formatTyArg = (arg: string) => new TypeTagStruct(StructTag.fromString(arg));
const formatArg = (arg: string) => BCS.bcsSerializeStr(arg);

export const buildEntryFuncTxn = (
  module: string,
  func: string,
  _tyArgs: string[],
  _args: string[],
  address: string,
  sequenceNumber: string,
  gas: number = 200,
  gasPrice: number = 100,
  chainId: number = 1,
) => {
  const ty_args = _tyArgs.map(arg => formatTyArg(arg));
  const args = _args.map(arg => formatArg(arg));
  const entryFunctionPayload = new TransactionPayloadEntryFunction(
    EntryFunction.natural(module, func, ty_args, args)
  );
  return new RawTransaction(
    // Transaction sender account address
    AccountAddress.fromHex(address),
    // Transaction sequence number
    BigInt(sequenceNumber),
    // Payload
    entryFunctionPayload,
    // Max gas unit to spend
    BigInt(2000),
    // Gas price per unit
    BigInt(100),
    // Expiration timestamp. Transaction is discarded if it is not executed within 10 seconds from now.
    BigInt(Math.floor(Date.now() / 1000) + 10),
    new ChainId(chainId),
  );
}

export const buildEntryFuncPayload = (
  module: string,
  func: string,
  tyArgs: string[],
  args: string[],
) => {
  return {
    type: "entry_function_payload",
    function: `${module}::${func}`,
    type_arguments: tyArgs,
    arguments: args,
  };
}
