import {AptosClient, AptosAccount, HexString} from "aptos";
import { App } from "./index";
import {u64} from "@foxdao/move-to-ts";

async function appDemo() {
  const nodeUrl = "https://fullnode.devnet.aptoslabs.com";
  const client = new AptosClient(nodeUrl);
  const address = new HexString("0x4f322203788168cdac3c358081e3f0159670f9ac74377bf245fad785b236e61f");
  
  
  // Load auto-generated App
  const app = new App(client).hippo_tutorial.lend3;
  const user = await app.loadUser(address);
  const protocol = await app.loadLendingProtocol(app.moduleAddress, false);
  const x = app.payload_borrow(u64(100), [app.FakeBTC.getTag()], true);
  console.log(x);
}

appDemo();
