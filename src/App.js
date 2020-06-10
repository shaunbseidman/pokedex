import React, {useEffect, useState} from 'react';
import './App.css';
import Pokemon from './components/Pokemon'

const App = () => {
  const [pokemons, setPokemon] = useState([]);

  const pokeUrl = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

  useEffect(() => {
      loadPokemon()
  }, [])

  const loadPokemon = async () => {
      const res = await fetch(pokeUrl);
      const data = await res.json()
      setPokemon(data.pokemon)
  }

  return (
    <div className="App">
      {
       pokemons.map(pokemon => (
           <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            number={pokemon.num}
            image={pokemon.img} />
         ))
       }
    </div>
  )
};

export default App;
