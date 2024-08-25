import type { IPokemonListResponse } from '@/types'

export interface IGetPokemonsArgs {
  limit?: number
}

const DEFAULT_ARGS = { limit: 151 }

export const getPokemons = async ({ limit }: IGetPokemonsArgs = DEFAULT_ARGS) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const { results } = (await response.json()) as IPokemonListResponse
  return results
}
