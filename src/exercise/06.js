// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { fetchPokemon, PokemonInfoFallback, PokemonDataView, PokemonForm } from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [pokemonData, setPokemonData] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if (!pokemonName) return
    setPokemonData(null)
    fetchPokemon(pokemonName).then(
      pokemonData => {
        setPokemonData(pokemonData)
      }
    ).catch(err => setError(err))
  }, [pokemonName])

  if (error) {
    <div role="alert">
      There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    </div>
  }

  if (!pokemonName) {
    return 'Submit a pokemon'
  } else if (!pokemonData) {
    return <PokemonInfoFallback name={pokemonName} />
  } else {
    return <PokemonDataView pokemon={pokemonData} />
  }
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} setPokemonName={setPokemonName} />
      </div>
    </div>
  )
}

export default App
