export interface IPokemonListResponse {
  count: number
  next: string
  previous: null
  results: IPokemonListResponseResult[]
}

export interface IPokemonListResponseResult {
  name: string
  url: string
}
