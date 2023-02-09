import './App.css';
import Button from './components/Button';
import Legend from './components/Legend';
import Contenedor from './components/Contenedor';

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
    id:3,
    name:'Venusaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id:3,
    name:'Venusaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id:3,
    name:'Venusaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id:3,
    name:'Venusaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id:3,
    name:'Venusaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id:3,
    name:'Venusaur',
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },

];

function App() {
  return (
    <div className="App">
      <div className='leyenda'>
        <Legend/>
      </div>
      <div className='pokemonANDbutton'>
        <div className='contenedor'>
          <Contenedor pokemons = {pokems}/>
        </div>
        <div className='button'>
          <Button/>
        </div>
      </div>
      
    </div>
  )
}

export default App;
