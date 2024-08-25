import { createSignal, For } from 'solid-js'

const getPokemonLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favorites') || '[]') as { name: string; id: string }[]
}

export const PokemonListFavorites = () => {
  const [favorites, setFavorites] = createSignal(getPokemonLocalStorage())
  const dataToRender = favorites().map(pokemon => ({
    name: pokemon.name,
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
  }))

  const removeFavorite = (name: string, id: string) => {
    const newFavorites = favorites().filter(pokemon => pokemon.name !== name && pokemon.id !== id)
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  return (
    <div class="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 py-8">
      <For each={dataToRender}>
        {({ name, imageUrl, url }) => (
          <div class="flex flex-col gap-1">
            <a href={`/pokemons/${name}`}>
              <img src={imageUrl} alt={name} style={`view-transition-name:${name}-image`} />
            </a>
            <h2 class="text-2xl text-center -mt-6">{name}</h2>
            <button class="text-red-400 -mt-2" onclick={() => removeFavorite(name, url)}>
              Borrar
            </button>
          </div>
        )}
      </For>
    </div>
  )
}
