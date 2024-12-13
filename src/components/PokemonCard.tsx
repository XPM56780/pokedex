import React from 'react';

// Définition du composant PokemonCard
export const PokemonCard = ({ name, imgSrc }: { name: string; imgSrc?: string }) => {
    return (
        <div>
            <figure>
                {imgSrc ? (
                    <img src={imgSrc} alt={name} />
                ) : (
                    <p>???</p>
                )}
            </figure>
            <figcaption>{name}</figcaption>
        </div>
    );
};

// Exportation de la liste des Pokémon
export const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];



