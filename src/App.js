import './App.css';
import Button from './components/Button';
import Legend from './components/Legend';
import Pokemons from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <div className='leyenda'>
        <Legend/>
      </div>
      <div className='pokemonANDbutton'>
        <div className='pokemon'>
          <Pokemons/>
        </div>
        <div className='button'>
          <Button/>
        </div>
      </div>
      
    </div>
  )
}

export default App;
