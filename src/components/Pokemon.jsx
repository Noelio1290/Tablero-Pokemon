import React from 'react';
/*const api = "https://pokeapi.co/api/v2/pokemon";*/

const pokems = [
  { 
    id:1,
    name:'Bulbasaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    id:2,
    name:'Ivysaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    id:3,
    name:'Venusaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  }
];

/*function BringPokemon({ id }) {
  const [pokemon, setPokemon] = useState({});

  const fetchPokemonData = async () => {
    const payload = await fetch(`${api}/${id}`);
    const pokeData = await payload.json();
    setPokemon(pokemon);
    console.log(pokemon)
  }

  useEffect(() => {
    console.log('im re renderung rm pokeComponent')
    //fetchPokemonData();
  }, [id]);
*/
const Pokemons = () => {
  for(let pokemon of pokems){
  return (
    <div className='pokemon'>
        <img src={pokemon.img} alt="" />
        <div>#{pokemon.id}</div>
        <div>{pokemon.name}</div>
    </div>
  );
  }
}

export default Pokemons;