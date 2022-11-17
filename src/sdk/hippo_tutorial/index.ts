
import { AptosClient } from "aptos";
import { AptosParserRepo, AptosLocalCache, AptosSyncedCache } from "@foxdao/move-to-ts";
import * as Lend3 from './lend3';
import * as Simple_map1 from './simple_map1';

export * as Lend3 from './lend3';
export * as Simple_map1 from './simple_map1';


export function loadParsers(repo: AptosParserRepo) {
  Lend3.loadParsers(repo);
  Simple_map1.loadParsers(repo);
}

export function getPackageRepo(): AptosParserRepo {
  const repo = new AptosParserRepo();
  loadParsers(repo);
  repo.addDefaultParsers();
  return repo;
}

export type AppType = {
  client: AptosClient,
  repo: AptosParserRepo,
  cache: AptosLocalCache,
};

export class App {
  lend3 : Lend3.App
  simple_map1 : Simple_map1.App
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
    this.lend3 = new Lend3.App(client, repo, cache);
    this.simple_map1 = new Simple_map1.App(client, repo, cache);
  }
}
