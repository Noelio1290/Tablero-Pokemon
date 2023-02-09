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
