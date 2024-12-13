import "./App.css";

import React from 'react';
import { PokemonCard, pokemonList } from './components/PokemonCard'; // Importation de PokemonCard et pokemonList

function App() {
  // Utilisation du deuxième Pokémon du tableau pokemonList (Mew)
  const pokemon = pokemonList[0];

  return (
    <div>
      <PokemonCard
        name={pokemon.name}
        imgSrc={pokemon.imgSrc} // Passer undefined ici affichera "???"
      />
    </div>
  );
}

export default App;
