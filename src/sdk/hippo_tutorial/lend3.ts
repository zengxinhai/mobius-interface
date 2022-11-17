import * as $ from "@foxdao/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@foxdao/move-to-ts";
import {U8, U64, U128} from "@foxdao/move-to-ts";
import {u8, u64, u128} from "@foxdao/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@foxdao/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@foxdao/move-to-ts";
import {OptionTransaction} from "@foxdao/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
import * as Stdlib from "../stdlib";
import * as Simple_map1 from "./simple_map1";
export const packageName = "LendingPlatform";
export const moduleAddress = new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661");
export const moduleName = "lend3";



export class AllUserInfo 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "AllUserInfo";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "healthy_users", typeTag: new VectorTag(new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "UserInfo", [])) },
  { name: "unhealthy_users", typeTag: new VectorTag(new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "UserInfo", [])) }];

  healthy_users: UserInfo[];
  unhealthy_users: UserInfo[];

  constructor(proto: any, public typeTag: TypeTag) {
    this.healthy_users = proto['healthy_users'] as UserInfo[];
    this.unhealthy_users = proto['unhealthy_users'] as UserInfo[];
  }

  static AllUserInfoParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : AllUserInfo {
    const proto = $.parseStructProto(data, typeTag, repo, AllUserInfo);
    return new AllUserInfo(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, AllUserInfo, typeParams);
    return result as unknown as AllUserInfo;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, AllUserInfo, typeParams);
    await result.loadFullState(app)
    return result as unknown as AllUserInfo;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "AllUserInfo", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class BorrowPosition 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "BorrowPosition";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "pool_id", typeTag: AtomicTypeTag.U64 },
  { name: "borrow_amount", typeTag: AtomicTypeTag.U64 }];

  pool_id: U64;
  borrow_amount: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.pool_id = proto['pool_id'] as U64;
    this.borrow_amount = proto['borrow_amount'] as U64;
  }

  static BorrowPositionParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : BorrowPosition {
    const proto = $.parseStructProto(data, typeTag, repo, BorrowPosition);
    return new BorrowPosition(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "BorrowPosition", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class DepositPosition 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "DepositPosition";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "pool_id", typeTag: AtomicTypeTag.U64 },
  { name: "deposit_amount", typeTag: AtomicTypeTag.U64 }];

  pool_id: U64;
  deposit_amount: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.pool_id = proto['pool_id'] as U64;
    this.deposit_amount = proto['deposit_amount'] as U64;
  }

  static DepositPositionParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DepositPosition {
    const proto = $.parseStructProto(data, typeTag, repo, DepositPosition);
    return new DepositPosition(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "DepositPosition", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class FakeBTC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "FakeBTC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static FakeBTCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : FakeBTC {
    const proto = $.parseStructProto(data, typeTag, repo, FakeBTC);
    return new FakeBTC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "FakeBTC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class FakeETH 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "FakeETH";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static FakeETHParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : FakeETH {
    const proto = $.parseStructProto(data, typeTag, repo, FakeETH);
    return new FakeETH(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "FakeETH", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class FakeUSDC 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "FakeUSDC";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static FakeUSDCParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : FakeUSDC {
    const proto = $.parseStructProto(data, typeTag, repo, FakeUSDC);
    return new FakeUSDC(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "FakeUSDC", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class FakeUSDT 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "FakeUSDT";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static FakeUSDTParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : FakeUSDT {
    const proto = $.parseStructProto(data, typeTag, repo, FakeUSDT);
    return new FakeUSDT(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "FakeUSDT", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}

export class FreeCoins 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "FreeCoins";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "btc_coin", typeTag: new StructTag(new HexString("0x1"), "coin", "Coin", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeBTC", [])]) },
  { name: "eth_coin", typeTag: new StructTag(new HexString("0x1"), "coin", "Coin", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeETH", [])]) },
  { name: "usdc_coin", typeTag: new StructTag(new HexString("0x1"), "coin", "Coin", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDC", [])]) },
  { name: "usdt_coin", typeTag: new StructTag(new HexString("0x1"), "coin", "Coin", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDT", [])]) },
  { name: "btc_cap", typeTag: new StructTag(new HexString("0x1"), "coin", "MintCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeBTC", [])]) },
  { name: "eth_cap", typeTag: new StructTag(new HexString("0x1"), "coin", "MintCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeETH", [])]) },
  { name: "usdc_cap", typeTag: new StructTag(new HexString("0x1"), "coin", "MintCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDC", [])]) },
  { name: "usdt_cap", typeTag: new StructTag(new HexString("0x1"), "coin", "MintCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDT", [])]) },
  { name: "btc_burn", typeTag: new StructTag(new HexString("0x1"), "coin", "BurnCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeBTC", [])]) },
  { name: "eth_burn", typeTag: new StructTag(new HexString("0x1"), "coin", "BurnCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeETH", [])]) },
  { name: "usdc_burn", typeTag: new StructTag(new HexString("0x1"), "coin", "BurnCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDC", [])]) },
  { name: "usdt_burn", typeTag: new StructTag(new HexString("0x1"), "coin", "BurnCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDT", [])]) },
  { name: "btc_freeze", typeTag: new StructTag(new HexString("0x1"), "coin", "FreezeCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeBTC", [])]) },
  { name: "eth_freeze", typeTag: new StructTag(new HexString("0x1"), "coin", "FreezeCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeETH", [])]) },
  { name: "usdc_freeze", typeTag: new StructTag(new HexString("0x1"), "coin", "FreezeCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDC", [])]) },
  { name: "usdt_freeze", typeTag: new StructTag(new HexString("0x1"), "coin", "FreezeCapability", [new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "FakeUSDT", [])]) }];

  btc_coin: Stdlib.Coin.Coin;
  eth_coin: Stdlib.Coin.Coin;
  usdc_coin: Stdlib.Coin.Coin;
  usdt_coin: Stdlib.Coin.Coin;
  btc_cap: Stdlib.Coin.MintCapability;
  eth_cap: Stdlib.Coin.MintCapability;
  usdc_cap: Stdlib.Coin.MintCapability;
  usdt_cap: Stdlib.Coin.MintCapability;
  btc_burn: Stdlib.Coin.BurnCapability;
  eth_burn: Stdlib.Coin.BurnCapability;
  usdc_burn: Stdlib.Coin.BurnCapability;
  usdt_burn: Stdlib.Coin.BurnCapability;
  btc_freeze: Stdlib.Coin.FreezeCapability;
  eth_freeze: Stdlib.Coin.FreezeCapability;
  usdc_freeze: Stdlib.Coin.FreezeCapability;
  usdt_freeze: Stdlib.Coin.FreezeCapability;

  constructor(proto: any, public typeTag: TypeTag) {
    this.btc_coin = proto['btc_coin'] as Stdlib.Coin.Coin;
    this.eth_coin = proto['eth_coin'] as Stdlib.Coin.Coin;
    this.usdc_coin = proto['usdc_coin'] as Stdlib.Coin.Coin;
    this.usdt_coin = proto['usdt_coin'] as Stdlib.Coin.Coin;
    this.btc_cap = proto['btc_cap'] as Stdlib.Coin.MintCapability;
    this.eth_cap = proto['eth_cap'] as Stdlib.Coin.MintCapability;
    this.usdc_cap = proto['usdc_cap'] as Stdlib.Coin.MintCapability;
    this.usdt_cap = proto['usdt_cap'] as Stdlib.Coin.MintCapability;
    this.btc_burn = proto['btc_burn'] as Stdlib.Coin.BurnCapability;
    this.eth_burn = proto['eth_burn'] as Stdlib.Coin.BurnCapability;
    this.usdc_burn = proto['usdc_burn'] as Stdlib.Coin.BurnCapability;
    this.usdt_burn = proto['usdt_burn'] as Stdlib.Coin.BurnCapability;
    this.btc_freeze = proto['btc_freeze'] as Stdlib.Coin.FreezeCapability;
    this.eth_freeze = proto['eth_freeze'] as Stdlib.Coin.FreezeCapability;
    this.usdc_freeze = proto['usdc_freeze'] as Stdlib.Coin.FreezeCapability;
    this.usdt_freeze = proto['usdt_freeze'] as Stdlib.Coin.FreezeCapability;
  }

  static FreeCoinsParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : FreeCoins {
    const proto = $.parseStructProto(data, typeTag, repo, FreeCoins);
    return new FreeCoins(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, FreeCoins, typeParams);
    return result as unknown as FreeCoins;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, FreeCoins, typeParams);
    await result.loadFullState(app)
    return result as unknown as FreeCoins;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "FreeCoins", []);
  }
  async loadFullState(app: $.AppType) {
    await this.btc_coin.loadFullState(app);
    await this.eth_coin.loadFullState(app);
    await this.usdc_coin.loadFullState(app);
    await this.usdt_coin.loadFullState(app);
    await this.btc_cap.loadFullState(app);
    await this.eth_cap.loadFullState(app);
    await this.usdc_cap.loadFullState(app);
    await this.usdt_cap.loadFullState(app);
    await this.btc_burn.loadFullState(app);
    await this.eth_burn.loadFullState(app);
    await this.usdc_burn.loadFullState(app);
    await this.usdt_burn.loadFullState(app);
    await this.btc_freeze.loadFullState(app);
    await this.eth_freeze.loadFullState(app);
    await this.usdc_freeze.loadFullState(app);
    await this.usdt_freeze.loadFullState(app);
    this.__app = app;
  }

}

export class LendingPool 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "LendingPool";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "pool_id", typeTag: AtomicTypeTag.U64 },
  { name: "coin_type", typeTag: new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []) },
  { name: "coin_price", typeTag: AtomicTypeTag.U64 },
  { name: "total_deposit", typeTag: AtomicTypeTag.U64 },
  { name: "total_borrow", typeTag: AtomicTypeTag.U64 }];

  pool_id: U64;
  coin_type: Stdlib.Type_info.TypeInfo;
  coin_price: U64;
  total_deposit: U64;
  total_borrow: U64;

  constructor(proto: any, public typeTag: TypeTag) {
    this.pool_id = proto['pool_id'] as U64;
    this.coin_type = proto['coin_type'] as Stdlib.Type_info.TypeInfo;
    this.coin_price = proto['coin_price'] as U64;
    this.total_deposit = proto['total_deposit'] as U64;
    this.total_borrow = proto['total_borrow'] as U64;
  }

  static LendingPoolParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : LendingPool {
    const proto = $.parseStructProto(data, typeTag, repo, LendingPool);
    return new LendingPool(proto, typeTag);
  }

  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "LendingPool", []);
  }
  async loadFullState(app: $.AppType) {
    await this.coin_type.loadFullState(app);
    this.__app = app;
  }

}

export class LendingPoolReserve 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "LendingPoolReserve";
  static typeParameters: TypeParamDeclType[] = [
    { name: "CoinType", isPhantom: true }
  ];
  static fields: FieldDeclType[] = [
  { name: "reserve", typeTag: new StructTag(new HexString("0x1"), "coin", "Coin", [new $.TypeParamIdx(0)]) }];

  reserve: Stdlib.Coin.Coin;

  constructor(proto: any, public typeTag: TypeTag) {
    this.reserve = proto['reserve'] as Stdlib.Coin.Coin;
  }

  static LendingPoolReserveParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : LendingPoolReserve {
    const proto = $.parseStructProto(data, typeTag, repo, LendingPoolReserve);
    return new LendingPoolReserve(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, LendingPoolReserve, typeParams);
    return result as unknown as LendingPoolReserve;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, LendingPoolReserve, typeParams);
    await result.loadFullState(app)
    return result as unknown as LendingPoolReserve;
  }
  static makeTag($p: TypeTag[]): StructTag {
    return new StructTag(moduleAddress, moduleName, "LendingPoolReserve", $p);
  }
  async loadFullState(app: $.AppType) {
    await this.reserve.loadFullState(app);
    this.__app = app;
  }

}

export class LendingProtocol 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "LendingProtocol";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "users", typeTag: new VectorTag(AtomicTypeTag.Address) },
  { name: "pools", typeTag: new VectorTag(new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "LendingPool", [])) },
  { name: "pool_index", typeTag: new StructTag(new HexString("0x1"), "table", "Table", [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]) }];

  users: HexString[];
  pools: LendingPool[];
  pool_index: Stdlib.Table.Table;

  constructor(proto: any, public typeTag: TypeTag) {
    this.users = proto['users'] as HexString[];
    this.pools = proto['pools'] as LendingPool[];
    this.pool_index = proto['pool_index'] as Stdlib.Table.Table;
  }

  static LendingProtocolParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : LendingProtocol {
    const proto = $.parseStructProto(data, typeTag, repo, LendingProtocol);
    return new LendingProtocol(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, LendingProtocol, typeParams);
    return result as unknown as LendingProtocol;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, LendingProtocol, typeParams);
    await result.loadFullState(app)
    return result as unknown as LendingProtocol;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "LendingProtocol", []);
  }
  async loadFullState(app: $.AppType) {
    await this.pool_index.loadFullState(app);
    this.__app = app;
  }

}

export class User 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "User";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "deposits", typeTag: new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "simple_map1", "SimpleMap", [AtomicTypeTag.U64, new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "DepositPosition", [])]) },
  { name: "borrows", typeTag: new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "simple_map1", "SimpleMap", [AtomicTypeTag.U64, new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "BorrowPosition", [])]) }];

  deposits: Simple_map1.SimpleMap;
  borrows: Simple_map1.SimpleMap;

  constructor(proto: any, public typeTag: TypeTag) {
    this.deposits = proto['deposits'] as Simple_map1.SimpleMap;
    this.borrows = proto['borrows'] as Simple_map1.SimpleMap;
  }

  static UserParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : User {
    const proto = $.parseStructProto(data, typeTag, repo, User);
    return new User(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, User, typeParams);
    return result as unknown as User;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, User, typeParams);
    await result.loadFullState(app)
    return result as unknown as User;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "User", []);
  }
  async loadFullState(app: $.AppType) {
    await this.deposits.loadFullState(app);
    await this.borrows.loadFullState(app);
    this.__app = app;
  }


  check_borrow_within_limit(
    protocol: LendingProtocol,
  ) {
    const cache = this.__app?.cache || new AptosLocalCache();
    const tags = (this.typeTag as StructTag).typeParams;
    return check_borrow_within_limit_(this, protocol, cache);
  }

  compute_borrow_deposit_value(
    protocol: LendingProtocol,
  ) {
    const cache = this.__app?.cache || new AptosLocalCache();
    const tags = (this.typeTag as StructTag).typeParams;
    return compute_borrow_deposit_value_(this, protocol, cache);
  }

  user_get_limits(
    protocol: LendingProtocol,
  ) {
    const cache = this.__app?.cache || new AptosLocalCache();
    const tags = (this.typeTag as StructTag).typeParams;
    return user_get_limits_(this, protocol, cache);
  }

}

export class UserInfo 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  __app: $.AppType | null = null;
  static structName: string = "UserInfo";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "address", typeTag: AtomicTypeTag.Address },
  { name: "deposits", typeTag: new VectorTag(new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "DepositPosition", [])) },
  { name: "borrows", typeTag: new VectorTag(new StructTag(new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"), "lend3", "BorrowPosition", [])) },
  { name: "borrow_value", typeTag: AtomicTypeTag.U64 },
  { name: "deposit_value", typeTag: AtomicTypeTag.U64 },
  { name: "is_healthy", typeTag: AtomicTypeTag.Bool }];

  address: HexString;
  deposits: DepositPosition[];
  borrows: BorrowPosition[];
  borrow_value: U64;
  deposit_value: U64;
  is_healthy: boolean;

  constructor(proto: any, public typeTag: TypeTag) {
    this.address = proto['address'] as HexString;
    this.deposits = proto['deposits'] as DepositPosition[];
    this.borrows = proto['borrows'] as BorrowPosition[];
    this.borrow_value = proto['borrow_value'] as U64;
    this.deposit_value = proto['deposit_value'] as U64;
    this.is_healthy = proto['is_healthy'] as boolean;
  }

  static UserInfoParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : UserInfo {
    const proto = $.parseStructProto(data, typeTag, repo, UserInfo);
    return new UserInfo(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, UserInfo, typeParams);
    return result as unknown as UserInfo;
  }
  static async loadByApp(app: $.AppType, address: HexString, typeParams: TypeTag[]) {
    const result = await app.repo.loadResource(app.client, address, UserInfo, typeParams);
    await result.loadFullState(app)
    return result as unknown as UserInfo;
  }
  static getTag(): StructTag {
    return new StructTag(moduleAddress, moduleName, "UserInfo", []);
  }
  async loadFullState(app: $.AppType) {
    this.__app = app;
  }

}
export function admin_add_pool_ (
  admin: HexString,
  initial_price: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin_type, pool, pool_id, protocol;
  if (!((Stdlib.Signer.address_of_(admin, $c)).hex() === (new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661")).hex())) {
    throw $.abortCode(u64("1000"));
  }
  if (!!$c.exists(new SimpleStructTag(LendingPoolReserve, [$p[0]]), Stdlib.Signer.address_of_(admin, $c))) {
    throw $.abortCode(u64("1001"));
  }
  if (!Stdlib.Coin.is_coin_initialized_($c, [$p[0]])) {
    throw $.abortCode(u64("1002"));
  }
  protocol = $c.borrow_global_mut<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  pool_id = Stdlib.Vector.length_(protocol.pools, $c, [new SimpleStructTag(LendingPool)]);
  coin_type = Stdlib.Type_info.type_of_($c, [$p[0]]);
  pool = new LendingPool({ pool_id: $.copy(pool_id), coin_type: $.copy(coin_type), coin_price: $.copy(initial_price), total_deposit: u64("0"), total_borrow: u64("0") }, new SimpleStructTag(LendingPool));
  $c.move_to(new SimpleStructTag(LendingPoolReserve, [$p[0]]), admin, new LendingPoolReserve({ reserve: Stdlib.Coin.zero_($c, [$p[0]]) }, new SimpleStructTag(LendingPoolReserve, [$p[0]])));
  Stdlib.Vector.push_back_(protocol.pools, pool, $c, [new SimpleStructTag(LendingPool)]);
  return Stdlib.Table.add_(protocol.pool_index, Stdlib.Type_info.type_of_($c, [$p[0]]), $.copy(pool_id), $c, [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]);
}


export function buildPayload_admin_add_pool (
  initial_price: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "admin_add_pool",
    typeParamStrings,
    [
      initial_price,
    ],
    isJSON,
  );

}

export function admin_init_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  if (!((Stdlib.Signer.address_of_(admin, $c)).hex() === (new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661")).hex())) {
    throw $.abortCode(u64("1000"));
  }
  return $c.move_to(new SimpleStructTag(LendingProtocol), admin, new LendingProtocol({ users: Stdlib.Vector.empty_($c, [AtomicTypeTag.Address]), pools: Stdlib.Vector.empty_($c, [new SimpleStructTag(LendingPool)]), pool_index: Stdlib.Table.new___($c, [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]) }, new SimpleStructTag(LendingProtocol)));
}


export function buildPayload_admin_init (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "admin_init",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function admin_update_price_ (
  admin: HexString,
  price: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin_type, pool, pool_id, protocol;
  if (!((Stdlib.Signer.address_of_(admin, $c)).hex() === (new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661")).hex())) {
    throw $.abortCode(u64("1000"));
  }
  protocol = $c.borrow_global_mut<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  coin_type = Stdlib.Type_info.type_of_($c, [$p[0]]);
  pool_id = $.copy(Stdlib.Table.borrow_(protocol.pool_index, $.copy(coin_type), $c, [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]));
  pool = Stdlib.Vector.borrow_mut_(protocol.pools, $.copy(pool_id), $c, [new SimpleStructTag(LendingPool)]);
  pool.coin_price = $.copy(price);
  return;
}


export function buildPayload_admin_update_price (
  price: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "admin_update_price",
    typeParamStrings,
    [
      price,
    ],
    isJSON,
  );

}

export function borrow_ (
  user: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let temp$1, temp$2, coin, coin_type, pool, pool_id, protocol, reserve, user_assets;
  protocol = $c.borrow_global_mut<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  ensure_user_exists_(user, protocol, $c);
  coin_type = Stdlib.Type_info.type_of_($c, [$p[0]]);
  pool_id = $.copy(Stdlib.Table.borrow_(protocol.pool_index, $.copy(coin_type), $c, [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]));
  pool = Stdlib.Vector.borrow_mut_(protocol.pools, $.copy(pool_id), $c, [new SimpleStructTag(LendingPool)]);
  reserve = $c.borrow_global_mut<LendingPoolReserve>(new SimpleStructTag(LendingPoolReserve, [$p[0]]), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  user_assets = $c.borrow_global_mut<User>(new SimpleStructTag(User), Stdlib.Signer.address_of_(user, $c));
  coin = make_borrow_(user_assets, pool, $.copy(amount), reserve, $c, [$p[0]]);
  if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [$p[0]])) {
    Stdlib.Coin.register_(user, $c, [$p[0]]);
  }
  else{
  }
  Stdlib.Coin.deposit_(Stdlib.Signer.address_of_(user, $c), coin, $c, [$p[0]]);
  [temp$1, temp$2] = [user_assets, protocol];
  if (!check_borrow_within_limit_(temp$1, temp$2, $c)) {
    throw $.abortCode(u64("4000"));
  }
  return;
}


export function buildPayload_borrow (
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "borrow",
    typeParamStrings,
    [
      amount,
    ],
    isJSON,
  );

}

export function check_borrow_within_limit_ (
  user: User,
  protocol: LendingProtocol,
  $c: AptosDataCache,
): boolean {
  let borrow_value, deposit_value;
  [borrow_value, deposit_value] = compute_borrow_deposit_value_(user, protocol, $c);
  return (($.copy(borrow_value)).mul(u64("100"))).lt(($.copy(deposit_value)).mul(u64("90")));
}

export function compute_borrow_deposit_value_ (
  user: User,
  protocol: LendingProtocol,
  $c: AptosDataCache,
): [U64, U64] {
  let borrow, borrow_value, deposit, deposit_value, index, length, pool, pool__1, value, value__2;
  deposit_value = u64("0");
  index = u64("0");
  length = Simple_map1.length_(user.deposits, $c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)]);
  while (($.copy(index)).lt($.copy(length))) {
    {
      deposit = Simple_map1.borrow_by_index_(user.deposits, $.copy(index), $c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)]);
      pool = Stdlib.Vector.borrow_(protocol.pools, $.copy(deposit.pool_id), $c, [new SimpleStructTag(LendingPool)]);
      value = ($.copy(deposit.deposit_amount)).mul($.copy(pool.coin_price));
      deposit_value = ($.copy(deposit_value)).add($.copy(value));
      index = ($.copy(index)).add(u64("1"));
    }

  }borrow_value = u64("0");
  index = u64("0");
  length = Simple_map1.length_(user.borrows, $c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)]);
  while (($.copy(index)).lt($.copy(length))) {
    {
      borrow = Simple_map1.borrow_by_index_(user.borrows, $.copy(index), $c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)]);
      pool__1 = Stdlib.Vector.borrow_(protocol.pools, $.copy(borrow.pool_id), $c, [new SimpleStructTag(LendingPool)]);
      value__2 = ($.copy(borrow.borrow_amount)).mul($.copy(pool__1.coin_price));
      borrow_value = ($.copy(borrow_value)).add($.copy(value__2));
      index = ($.copy(index)).add(u64("1"));
    }

  }return [$.copy(borrow_value), $.copy(deposit_value)];
}

export function create_fake_user1_ (
  user: HexString,
  $c: AptosDataCache,
): void {
  init_coin_stores_(user, $c);
  deposit_(user, u64("10000000"), $c, [new SimpleStructTag(FakeBTC)]);
  deposit_(user, u64("10000000"), $c, [new SimpleStructTag(FakeETH)]);
  deposit_(user, u64("10000000"), $c, [new SimpleStructTag(FakeUSDC)]);
  deposit_(user, u64("10000000"), $c, [new SimpleStructTag(FakeUSDT)]);
  return;
}


export function buildPayload_create_fake_user1 (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "create_fake_user1",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function create_fake_user2_ (
  user: HexString,
  $c: AptosDataCache,
): void {
  init_coin_stores_(user, $c);
  deposit_(user, u64("100"), $c, [new SimpleStructTag(FakeBTC)]);
  deposit_(user, u64("100"), $c, [new SimpleStructTag(FakeETH)]);
  borrow_(user, u64("100"), $c, [new SimpleStructTag(FakeUSDC)]);
  return;
}


export function buildPayload_create_fake_user2 (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "create_fake_user2",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function create_fake_user3_ (
  user: HexString,
  $c: AptosDataCache,
): void {
  init_coin_stores_(user, $c);
  deposit_(user, u64("100"), $c, [new SimpleStructTag(FakeBTC)]);
  deposit_(user, u64("100"), $c, [new SimpleStructTag(FakeETH)]);
  borrow_(user, u64("800000"), $c, [new SimpleStructTag(FakeUSDC)]);
  return;
}


export function buildPayload_create_fake_user3 (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "create_fake_user3",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function deposit_ (
  user: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin, coin_type, pool, pool_id, protocol, reserve, user_assets;
  protocol = $c.borrow_global_mut<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  ensure_user_exists_(user, protocol, $c);
  coin_type = Stdlib.Type_info.type_of_($c, [$p[0]]);
  pool_id = $.copy(Stdlib.Table.borrow_(protocol.pool_index, $.copy(coin_type), $c, [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]));
  pool = Stdlib.Vector.borrow_mut_(protocol.pools, $.copy(pool_id), $c, [new SimpleStructTag(LendingPool)]);
  reserve = $c.borrow_global_mut<LendingPoolReserve>(new SimpleStructTag(LendingPoolReserve, [$p[0]]), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  user_assets = $c.borrow_global_mut<User>(new SimpleStructTag(User), Stdlib.Signer.address_of_(user, $c));
  coin = Stdlib.Coin.withdraw_(user, $.copy(amount), $c, [$p[0]]);
  make_deposit_(user_assets, pool, coin, reserve, $c, [$p[0]]);
  return;
}


export function buildPayload_deposit (
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "deposit",
    typeParamStrings,
    [
      amount,
    ],
    isJSON,
  );

}

export function ensure_user_exists_ (
  user: HexString,
  protocol: LendingProtocol,
  $c: AptosDataCache,
): void {
  if (!$c.exists(new SimpleStructTag(User), Stdlib.Signer.address_of_(user, $c))) {
    Stdlib.Vector.push_back_(protocol.users, Stdlib.Signer.address_of_(user, $c), $c, [AtomicTypeTag.Address]);
    $c.move_to(new SimpleStructTag(User), user, new User({ deposits: Simple_map1.create_($c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)]), borrows: Simple_map1.create_($c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)]) }, new SimpleStructTag(User)));
  }
  else{
  }
  return;
}

export function get_all_users_ (
  initiator: HexString,
  $c: AptosDataCache,
): void {
  let borrow_value, deposit_value, i, is_healthy, len, list, protocol, user, user_addr, user_info;
  protocol = $c.borrow_global<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  i = u64("0");
  len = Stdlib.Vector.length_(protocol.users, $c, [AtomicTypeTag.Address]);
  list = new AllUserInfo({ healthy_users: Stdlib.Vector.empty_($c, [new SimpleStructTag(UserInfo)]), unhealthy_users: Stdlib.Vector.empty_($c, [new SimpleStructTag(UserInfo)]) }, new SimpleStructTag(AllUserInfo));
  while (($.copy(i)).lt($.copy(len))) {
    {
      user_addr = Stdlib.Vector.borrow_(protocol.users, $.copy(i), $c, [AtomicTypeTag.Address]);
      user = $c.borrow_global<User>(new SimpleStructTag(User), $.copy(user_addr));
      [is_healthy, borrow_value, deposit_value] = user_get_limits_(user, protocol, $c);
      user_info = new UserInfo({ address: $.copy(user_addr), deposits: get_values_(user.deposits, $c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)]), borrows: get_values_(user.borrows, $c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)]), borrow_value: $.copy(borrow_value), deposit_value: $.copy(deposit_value), is_healthy: is_healthy }, new SimpleStructTag(UserInfo));
      if (is_healthy) {
        Stdlib.Vector.push_back_(list.healthy_users, user_info, $c, [new SimpleStructTag(UserInfo)]);
      }
      else{
        Stdlib.Vector.push_back_(list.unhealthy_users, user_info, $c, [new SimpleStructTag(UserInfo)]);
      }
      i = ($.copy(i)).add(u64("1"));
    }

  }return $c.move_to(new SimpleStructTag(AllUserInfo), initiator, list);
}


export function buildPayload_get_all_users (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "get_all_users",
    typeParamStrings,
    [],
    isJSON,
  );

}

export async function query_get_all_users(
  client: AptosClient,
  fetcher: $.SimulationKeys,
  repo: AptosParserRepo,
  $p: TypeTag[],
  option?: OptionTransaction,
  _isJSON = false
) {
  const payload__ = buildPayload_get_all_users(_isJSON);
  const outputTypeTag = new SimpleStructTag(AllUserInfo);
  const output = await $.simulatePayloadTx(client, fetcher, payload__, option);
  return $.takeSimulationValue<AllUserInfo>(output, outputTypeTag, repo)
}
export function get_values_ (
  table: Simple_map1.SimpleMap,
  $c: AptosDataCache,
  $p: TypeTag[], /* <K, V>*/
): any[] {
  let index, length, list, value;
  list = Stdlib.Vector.empty_($c, [$p[1]]);
  index = u64("0");
  length = Simple_map1.length_(table, $c, [$p[0], $p[1]]);
  while (($.copy(index)).lt($.copy(length))) {
    {
      value = Simple_map1.borrow_by_index_(table, $.copy(index), $c, [$p[0], $p[1]]);
      Stdlib.Vector.push_back_(list, $.copy(value), $c, [$p[1]]);
      index = ($.copy(index)).add(u64("1"));
    }

  }return $.copy(list);
}

export function global_get_user_limits_ (
  user: HexString,
  $c: AptosDataCache,
): [boolean, U64, U64] {
  let protocol, user__1;
  user__1 = $c.borrow_global<User>(new SimpleStructTag(User), $.copy(user));
  protocol = $c.borrow_global<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  return user_get_limits_(user__1, protocol, $c);
}


export function init_coin_stores_ (
  user: HexString,
  $c: AptosDataCache,
): void {
  let addr, btc, eth, faucet_amount, free_coins, usdc, usdt;
  Stdlib.Coin.register_(user, $c, [new SimpleStructTag(FakeBTC)]);
  Stdlib.Coin.register_(user, $c, [new SimpleStructTag(FakeETH)]);
  Stdlib.Coin.register_(user, $c, [new SimpleStructTag(FakeUSDC)]);
  Stdlib.Coin.register_(user, $c, [new SimpleStructTag(FakeUSDT)]);
  faucet_amount = u64("1000000000");
  free_coins = $c.borrow_global_mut<FreeCoins>(new SimpleStructTag(FreeCoins), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  btc = Stdlib.Coin.extract_(free_coins.btc_coin, $.copy(faucet_amount), $c, [new SimpleStructTag(FakeBTC)]);
  eth = Stdlib.Coin.extract_(free_coins.eth_coin, $.copy(faucet_amount), $c, [new SimpleStructTag(FakeETH)]);
  usdc = Stdlib.Coin.extract_(free_coins.usdc_coin, $.copy(faucet_amount), $c, [new SimpleStructTag(FakeUSDC)]);
  usdt = Stdlib.Coin.extract_(free_coins.usdt_coin, $.copy(faucet_amount), $c, [new SimpleStructTag(FakeUSDT)]);
  addr = Stdlib.Signer.address_of_(user, $c);
  Stdlib.Coin.deposit_($.copy(addr), btc, $c, [new SimpleStructTag(FakeBTC)]);
  Stdlib.Coin.deposit_($.copy(addr), eth, $c, [new SimpleStructTag(FakeETH)]);
  Stdlib.Coin.deposit_($.copy(addr), usdc, $c, [new SimpleStructTag(FakeUSDC)]);
  Stdlib.Coin.deposit_($.copy(addr), usdt, $c, [new SimpleStructTag(FakeUSDT)]);
  return;
}

export function init_fake_pools_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  let btc_burn, btc_cap, btc_freeze, eth_burn, eth_cap, eth_freeze, mint_amount, name, usdc_burn, usdc_cap, usdc_freeze, usdt_burn, usdt_cap, usdt_freeze;
  name = Stdlib.String.utf8_([u8("110"), u8("97"), u8("109"), u8("101")], $c);
  [btc_burn, btc_freeze, btc_cap] = Stdlib.Coin.initialize_(admin, $.copy(name), $.copy(name), u8("0"), false, $c, [new SimpleStructTag(FakeBTC)]);
  [eth_burn, eth_freeze, eth_cap] = Stdlib.Coin.initialize_(admin, $.copy(name), $.copy(name), u8("0"), false, $c, [new SimpleStructTag(FakeETH)]);
  [usdc_burn, usdc_freeze, usdc_cap] = Stdlib.Coin.initialize_(admin, $.copy(name), $.copy(name), u8("0"), false, $c, [new SimpleStructTag(FakeUSDC)]);
  [usdt_burn, usdt_freeze, usdt_cap] = Stdlib.Coin.initialize_(admin, $.copy(name), $.copy(name), u8("0"), false, $c, [new SimpleStructTag(FakeUSDT)]);
  mint_amount = u64("1000000000000");
  $c.move_to(new SimpleStructTag(FreeCoins), admin, new FreeCoins({ btc_coin: Stdlib.Coin.mint_($.copy(mint_amount), btc_cap, $c, [new SimpleStructTag(FakeBTC)]), eth_coin: Stdlib.Coin.mint_($.copy(mint_amount), eth_cap, $c, [new SimpleStructTag(FakeETH)]), usdc_coin: Stdlib.Coin.mint_($.copy(mint_amount), usdc_cap, $c, [new SimpleStructTag(FakeUSDC)]), usdt_coin: Stdlib.Coin.mint_($.copy(mint_amount), usdt_cap, $c, [new SimpleStructTag(FakeUSDT)]), btc_cap: $.copy(btc_cap), eth_cap: $.copy(eth_cap), usdc_cap: $.copy(usdc_cap), usdt_cap: $.copy(usdt_cap), btc_burn: $.copy(btc_burn), eth_burn: $.copy(eth_burn), usdc_burn: $.copy(usdc_burn), usdt_burn: $.copy(usdt_burn), btc_freeze: $.copy(btc_freeze), eth_freeze: $.copy(eth_freeze), usdc_freeze: $.copy(usdc_freeze), usdt_freeze: $.copy(usdt_freeze) }, new SimpleStructTag(FreeCoins)));
  admin_init_(admin, $c);
  admin_add_pool_(admin, u64("10000"), $c, [new SimpleStructTag(FakeBTC)]);
  admin_add_pool_(admin, u64("1000"), $c, [new SimpleStructTag(FakeETH)]);
  admin_add_pool_(admin, u64("1"), $c, [new SimpleStructTag(FakeUSDC)]);
  admin_add_pool_(admin, u64("1"), $c, [new SimpleStructTag(FakeUSDT)]);
  return;
}


export function buildPayload_init_fake_pools (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "init_fake_pools",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function make_borrow_ (
  user: User,
  pool: LendingPool,
  amount: U64,
  reserve: LendingPoolReserve,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Stdlib.Coin.Coin {
  let coin, pool_id, position;
  coin = Stdlib.Coin.extract_(reserve.reserve, $.copy(amount), $c, [$p[0]]);
  if (!$.deep_eq($.copy(pool.coin_type), Stdlib.Type_info.type_of_($c, [$p[0]]))) {
    throw $.abortCode(u64("2001"));
  }
  pool_id = $.copy(pool.pool_id);
  pool.total_borrow = ($.copy(pool.total_borrow)).add($.copy(amount));
  if (!Simple_map1.contains_key_(user.borrows, pool_id, $c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)])) {
    Simple_map1.add_(user.borrows, $.copy(pool_id), new BorrowPosition({ pool_id: $.copy(pool_id), borrow_amount: $.copy(amount) }, new SimpleStructTag(BorrowPosition)), $c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)]);
  }
  else{
    position = Simple_map1.borrow_mut_(user.borrows, pool_id, $c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)]);
    position.borrow_amount = ($.copy(position.borrow_amount)).add($.copy(amount));
  }
  return coin;
}

export function make_deposit_ (
  user: User,
  pool: LendingPool,
  coin: Stdlib.Coin.Coin,
  reserve: LendingPoolReserve,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let amount, pool_id, position;
  amount = Stdlib.Coin.value_(coin, $c, [$p[0]]);
  Stdlib.Coin.merge_(reserve.reserve, coin, $c, [$p[0]]);
  if (!$.deep_eq($.copy(pool.coin_type), Stdlib.Type_info.type_of_($c, [$p[0]]))) {
    throw $.abortCode(u64("2001"));
  }
  pool_id = $.copy(pool.pool_id);
  pool.total_deposit = ($.copy(pool.total_deposit)).add($.copy(amount));
  if (!Simple_map1.contains_key_(user.deposits, pool_id, $c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)])) {
    Simple_map1.add_(user.deposits, $.copy(pool_id), new DepositPosition({ pool_id: $.copy(pool_id), deposit_amount: $.copy(amount) }, new SimpleStructTag(DepositPosition)), $c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)]);
  }
  else{
    position = Simple_map1.borrow_mut_(user.deposits, pool_id, $c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)]);
    position.deposit_amount = ($.copy(position.deposit_amount)).add($.copy(amount));
  }
  return;
}

export function make_repayment_ (
  user: User,
  pool: LendingPool,
  coin: Stdlib.Coin.Coin,
  reserve: LendingPoolReserve,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let amount, pool_id, position;
  amount = Stdlib.Coin.value_(coin, $c, [$p[0]]);
  Stdlib.Coin.merge_(reserve.reserve, coin, $c, [$p[0]]);
  if (!$.deep_eq($.copy(pool.coin_type), Stdlib.Type_info.type_of_($c, [$p[0]]))) {
    throw $.abortCode(u64("2001"));
  }
  pool_id = $.copy(pool.pool_id);
  pool.total_borrow = ($.copy(pool.total_borrow)).sub($.copy(amount));
  position = Simple_map1.borrow_mut_(user.borrows, pool_id, $c, [AtomicTypeTag.U64, new SimpleStructTag(BorrowPosition)]);
  position.borrow_amount = ($.copy(position.borrow_amount)).sub($.copy(amount));
  return;
}

export function make_withdrawal_ (
  user: User,
  pool: LendingPool,
  amount: U64,
  reserve: LendingPoolReserve,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): Stdlib.Coin.Coin {
  let coin, pool_id, position;
  coin = Stdlib.Coin.extract_(reserve.reserve, $.copy(amount), $c, [$p[0]]);
  if (!$.deep_eq($.copy(pool.coin_type), Stdlib.Type_info.type_of_($c, [$p[0]]))) {
    throw $.abortCode(u64("2001"));
  }
  pool_id = $.copy(pool.pool_id);
  pool.total_deposit = ($.copy(pool.total_deposit)).sub($.copy(amount));
  position = Simple_map1.borrow_mut_(user.deposits, pool_id, $c, [AtomicTypeTag.U64, new SimpleStructTag(DepositPosition)]);
  position.deposit_amount = ($.copy(position.deposit_amount)).sub($.copy(amount));
  return coin;
}

export function price_drop_ (
  admin: HexString,
  $c: AptosDataCache,
): void {
  admin_update_price_(admin, u64("5000"), $c, [new SimpleStructTag(FakeBTC)]);
  admin_update_price_(admin, u64("500"), $c, [new SimpleStructTag(FakeETH)]);
  return;
}


export function buildPayload_price_drop (
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "price_drop",
    typeParamStrings,
    [],
    isJSON,
  );

}

export function repay_ (
  user: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let coin, coin_type, pool, pool_id, protocol, reserve, user_assets;
  protocol = $c.borrow_global_mut<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  ensure_user_exists_(user, protocol, $c);
  coin_type = Stdlib.Type_info.type_of_($c, [$p[0]]);
  pool_id = $.copy(Stdlib.Table.borrow_(protocol.pool_index, $.copy(coin_type), $c, [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]));
  pool = Stdlib.Vector.borrow_mut_(protocol.pools, $.copy(pool_id), $c, [new SimpleStructTag(LendingPool)]);
  reserve = $c.borrow_global_mut<LendingPoolReserve>(new SimpleStructTag(LendingPoolReserve, [$p[0]]), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  user_assets = $c.borrow_global_mut<User>(new SimpleStructTag(User), Stdlib.Signer.address_of_(user, $c));
  coin = Stdlib.Coin.withdraw_(user, $.copy(amount), $c, [$p[0]]);
  make_repayment_(user_assets, pool, coin, reserve, $c, [$p[0]]);
  return;
}


export function buildPayload_repay (
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "repay",
    typeParamStrings,
    [
      amount,
    ],
    isJSON,
  );

}

export function user_get_limits_ (
  user: User,
  protocol: LendingProtocol,
  $c: AptosDataCache,
): [boolean, U64, U64] {
  let borrow_value, deposit_value;
  [borrow_value, deposit_value] = compute_borrow_deposit_value_(user, protocol, $c);
  return [(($.copy(borrow_value)).mul(u64("100"))).lt(($.copy(deposit_value)).mul(u64("90"))), $.copy(borrow_value), $.copy(deposit_value)];
}

export function withdraw_ (
  user: HexString,
  amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  let temp$1, temp$2, coin, coin_type, pool, pool_id, protocol, reserve, user_assets;
  protocol = $c.borrow_global_mut<LendingProtocol>(new SimpleStructTag(LendingProtocol), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  ensure_user_exists_(user, protocol, $c);
  coin_type = Stdlib.Type_info.type_of_($c, [$p[0]]);
  pool_id = $.copy(Stdlib.Table.borrow_(protocol.pool_index, $.copy(coin_type), $c, [new StructTag(new HexString("0x1"), "type_info", "TypeInfo", []), AtomicTypeTag.U64]));
  pool = Stdlib.Vector.borrow_mut_(protocol.pools, $.copy(pool_id), $c, [new SimpleStructTag(LendingPool)]);
  reserve = $c.borrow_global_mut<LendingPoolReserve>(new SimpleStructTag(LendingPoolReserve, [$p[0]]), new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"));
  user_assets = $c.borrow_global_mut<User>(new SimpleStructTag(User), Stdlib.Signer.address_of_(user, $c));
  coin = make_withdrawal_(user_assets, pool, $.copy(amount), reserve, $c, [$p[0]]);
  if (!Stdlib.Coin.is_account_registered_(Stdlib.Signer.address_of_(user, $c), $c, [$p[0]])) {
    Stdlib.Coin.register_(user, $c, [$p[0]]);
  }
  else{
  }
  Stdlib.Coin.deposit_(Stdlib.Signer.address_of_(user, $c), coin, $c, [$p[0]]);
  [temp$1, temp$2] = [user_assets, protocol];
  if (!check_borrow_within_limit_(temp$1, temp$2, $c)) {
    throw $.abortCode(u64("4000"));
  }
  return;
}


export function buildPayload_withdraw (
  amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661"),
    "lend3",
    "withdraw",
    typeParamStrings,
    [
      amount,
    ],
    isJSON,
  );

}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::AllUserInfo", AllUserInfo.AllUserInfoParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::BorrowPosition", BorrowPosition.BorrowPositionParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::DepositPosition", DepositPosition.DepositPositionParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::FakeBTC", FakeBTC.FakeBTCParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::FakeETH", FakeETH.FakeETHParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::FakeUSDC", FakeUSDC.FakeUSDCParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::FakeUSDT", FakeUSDT.FakeUSDTParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::FreeCoins", FreeCoins.FreeCoinsParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::LendingPool", LendingPool.LendingPoolParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::LendingPoolReserve", LendingPoolReserve.LendingPoolReserveParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::LendingProtocol", LendingProtocol.LendingProtocolParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::User", User.UserParser);
  repo.addParser("0x3d4f2d8c266f568aa7721dd01e4cd7366fcc7b632aa2d5eeef9fbbc62f4e3661::lend3::UserInfo", UserInfo.UserInfoParser);
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
  get AllUserInfo() { return AllUserInfo; }
  async loadAllUserInfo(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await AllUserInfo.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get BorrowPosition() { return BorrowPosition; }
  get DepositPosition() { return DepositPosition; }
  get FakeBTC() { return FakeBTC; }
  get FakeETH() { return FakeETH; }
  get FakeUSDC() { return FakeUSDC; }
  get FakeUSDT() { return FakeUSDT; }
  get FreeCoins() { return FreeCoins; }
  async loadFreeCoins(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await FreeCoins.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get LendingPool() { return LendingPool; }
  get LendingPoolReserve() { return LendingPoolReserve; }
  async loadLendingPoolReserve(
    owner: HexString,
    $p: TypeTag[], /* <CoinType> */
    loadFull=true,
    fillCache=true,
  ) {
    const val = await LendingPoolReserve.load(this.repo, this.client, owner, $p);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get LendingProtocol() { return LendingProtocol; }
  async loadLendingProtocol(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await LendingProtocol.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get User() { return User; }
  async loadUser(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await User.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  get UserInfo() { return UserInfo; }
  async loadUserInfo(
    owner: HexString,
    loadFull=true,
    fillCache=true,
  ) {
    const val = await UserInfo.load(this.repo, this.client, owner, [] as TypeTag[]);
    if (loadFull) {
      await val.loadFullState(this);
    }
    if (fillCache) {
      this.cache.set(val.typeTag, owner, val);
    }
    return val;
  }
  payload_admin_add_pool(
    initial_price: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_admin_add_pool(initial_price, $p, isJSON);
  }
  async admin_add_pool(
    _account: AptosAccount,
    initial_price: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_admin_add_pool(initial_price, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_admin_init(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_admin_init(isJSON);
  }
  async admin_init(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_admin_init(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_admin_update_price(
    price: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_admin_update_price(price, $p, isJSON);
  }
  async admin_update_price(
    _account: AptosAccount,
    price: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_admin_update_price(price, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_borrow(
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_borrow(amount, $p, isJSON);
  }
  async borrow(
    _account: AptosAccount,
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_borrow(amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_create_fake_user1(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_create_fake_user1(isJSON);
  }
  async create_fake_user1(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_create_fake_user1(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_create_fake_user2(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_create_fake_user2(isJSON);
  }
  async create_fake_user2(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_create_fake_user2(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_create_fake_user3(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_create_fake_user3(isJSON);
  }
  async create_fake_user3(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_create_fake_user3(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_deposit(
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_deposit(amount, $p, isJSON);
  }
  async deposit(
    _account: AptosAccount,
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_deposit(amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_get_all_users(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_get_all_users(isJSON);
  }
  async get_all_users(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_get_all_users(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  async query_get_all_users(
    $p: TypeTag[],
    option?: OptionTransaction,
    _isJSON = false,
    fetcher: $.SimulationKeys = $.SIM_KEYS,
  ) {
  return query_get_all_users(this.client, fetcher, this.repo, $p, option);
  }
  payload_init_fake_pools(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_init_fake_pools(isJSON);
  }
  async init_fake_pools(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_init_fake_pools(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_price_drop(
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_price_drop(isJSON);
  }
  async price_drop(
    _account: AptosAccount,
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_price_drop(_isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_repay(
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_repay(amount, $p, isJSON);
  }
  async repay(
    _account: AptosAccount,
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_repay(amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_withdraw(
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_withdraw(amount, $p, isJSON);
  }
  async withdraw(
    _account: AptosAccount,
    amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_withdraw(amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  app_global_get_user_limits(
      user: HexString,
  ) {
    return global_get_user_limits_(user, this.cache);
  }
}

