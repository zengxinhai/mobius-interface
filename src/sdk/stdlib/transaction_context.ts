import * as $ from "@foxdao/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@foxdao/move-to-ts";
import {U8, U64, U128} from "@foxdao/move-to-ts";
import {u8, u64, u128} from "@foxdao/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@foxdao/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@foxdao/move-to-ts";
import {OptionTransaction} from "@foxdao/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "transaction_context";


export function get_script_hash_ (
  $c: AptosDataCache,
): U8[] {
  return $.aptos_framework_transaction_context_get_script_hash($c);

}
export function loadParsers(repo: AptosParserRepo) {
}
export class App {
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
  }
  get moduleAddress() {{ return moduleAddress; }}
  get moduleName() {{ return moduleName; }}
}

