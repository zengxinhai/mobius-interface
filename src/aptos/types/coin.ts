export type CoinMeta = {
  symbol: string
  type: string
  decimal: number
}

export type Coin = {
  meta: CoinMeta
  value: number
}
