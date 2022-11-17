import * as $ from "@foxdao/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@foxdao/move-to-ts";
import {U8, U64, U128} from "@foxdao/move-to-ts";
import {u8, u64, u128} from "@foxdao/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@foxdao/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@foxdao/move-to-ts";
import {OptionTransaction} from "@foxdao/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
export const packageName = "MoveStdlib";
export const moduleAddress = new HexString("0x1");
export const moduleName = "signer";


export function address_of_ (
  s: HexString,
  $c: AptosDataCache,
): HexString {
  return $.copy(borrow_address_(s, $c));
}

export function borrow_address_ (
  s: HexString,
  $c: AptosDataCache,
): HexString {
  return $.std_signer_borrow_address(s, $c);

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

