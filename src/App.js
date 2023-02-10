import './App.css';
import Button from './components/Button';
import Legend from './components/Legend';
import Contenedor from './components/Contenedor';
import { useState } from 'react';

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
  },{
    id:4,
    name:'Charmander',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    id:5,
    name:'Charmeleon',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    id:6,
    name:'Charizard',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    id:7,
    name:'Squirtle',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    id:8,
    name:'Wartortle',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    id:9,
    name:'Blastoise',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },

];

const api = "https://pokeapi.co/api/v2/pokemon"

function App() {
  let [ legendText, setLegendText ] = useState('Selecciona un pokemon')
  const legendSetter = pokename =>{
    setLegendText(pokename ? `${pokename} yo te elijo` : 'Selecciona un pokemon')
  };

  const getPokemon = async () => {
    const payload = await fetch(`${api}`)
    const dataPokemon = await payload.json()
    const listPokemon = []
    console.log(dataPokemon.results)
    for(const pokemon of dataPokemon.results){
      console.log(pokemon)
      const datosPokemon = {
        id:pokemon.id,
        name:pokemon.name,
        img:pokemon.sprites.front_default
    }
    listPokemon.push(datosPokemon)
    }
    return listPokemon
  }

  return (
    <div className="App">
      <div className='leyenda'>
        <Legend legend={legendText} />
      </div>
      <div className='pokemon-button'>
        <div className='contenedor'>
          <Contenedor legendSetter={legendSetter} pokemons = {getPokemon()}/>
        </div>
        <div className='button'>
          <Button legendSetter={legendSetter}/>
        </div>
      </div>
      
    </div>
  )
}

export default App;
