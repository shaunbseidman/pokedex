import React, {useEffect, useState} from 'react';
import './App.css';
import List from './components/List'

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
      console.log(data.pokemon)
  }

  return (
    <div className="App">
      <h2>Your Pokedex</h2>
      <List pokemon={pokemons}/>
    </div>
  )
};

export default App;
