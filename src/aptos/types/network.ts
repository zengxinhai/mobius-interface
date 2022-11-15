export type NetworkMode = "main" | "test" | "dev";

export type Network = {
  nodeUrl: string
  mode: NetworkMode
}
