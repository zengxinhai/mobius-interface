import * as $ from "@foxdao/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@foxdao/move-to-ts";
import {U8, U64, U128} from "@foxdao/move-to-ts";
import {u8, u64, u128} from "@foxdao/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@foxdao/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@foxdao/move-to-ts";
import {OptionTransaction} from "@foxdao/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
export const packageName = "AptosStdlib";
export const moduleAddress = new HexString("0x1");
export const moduleName = "debug";


export function print_ (
  x: any,
  $c: AptosDataCache,
  $p: TypeTag[], /* <T>*/
): void {
  return $.aptos_std_debug_print(x, $c, [$p[0]]);

}
export function print_stack_trace_ (
  $c: AptosDataCache,
): void {
  return $.aptos_std_debug_print_stack_trace($c);

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

