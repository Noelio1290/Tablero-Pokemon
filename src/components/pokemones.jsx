import React, { useState, useEffect } from 'react';
const api = "https://pokeapi.co/api/v2/pokemon"

function pokemon({ id }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch(`${api}/${id}`);
      const pokemonData = await response.json();
      setPokemon(pokemonData);
    }
    fetchCatData();
  }, [catId]);

  return (
    <div>
      <h2>Perfil de gato</h2>
      <p>Nombre: {cat.name}</p>
      <p>Raza: {cat.breed}</p>
      <p>Edad: {cat.age} años</p>
    </div>
  );
}