import './App.css';
import Button from './components/Button';
import Legend from './components/Legend';
import Contenedor from './components/Contenedor';
import { useEffect, useState } from 'react';

const api = "https://pokeapi.co/api/v2/pokemon"

function App() {
  let [ legendText, setLegendText ] = useState('Selecciona un pokemon')
  let [ pokemonsData, setPokemonsData ] = useState([])
  const legendSetter = pokename =>{
    setLegendText(pokename ? `${pokename} yo te elijo` : 'Selecciona un pokemon')
  };

  useEffect(()=>{
    const getPokemon = async (id)=>{
      console.log('im requesting the single pokemon')
      const payload = await fetch(`${api}/${id}`)
      const data = await payload.json()
      const datosPokemon = {
          id:data.id,
          name:data.name.charAt(0).toUpperCase() + data.name.slice(1),
          img:data.sprites.front_default
      }
      return datosPokemon
  
    }
  
    const getPokemons = async (number)=>{
      const pokeNames = []
      for(let i = 1; i <= number; i++){
          pokeNames.push(await getPokemon(i))
      }
      setPokemonsData(pokeNames);
    };

    getPokemons(20)
    
  }, [])

  return (
    <div className="App">
      <div className='leyenda'>
        <Legend legend={legendText} />
      </div>
      <div className='pokemon-button'>
        <div className='contenedor'>
          <Contenedor legendSetter={legendSetter} pokemons = {pokemonsData}/>
        </div>
        <div className='button'>
          <Button legendSetter={legendSetter}/>
        </div>
      </div>
      
    </div>
  )
}

export default App;
