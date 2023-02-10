import React from 'react';
import Pokemon from "./Pokemon";

const Contenedor = ({ pokemons, legendSetter }) =>{
    return (
        <div className='space-pokemon'>
            {pokemons.map ? 
                pokemons.map((pokem, i) => <Pokemon legendSetter={legendSetter} key={`pokemon-number-${i}`} img={pokem.img} id={pokem.id} name={pokem.name} />): <>No hay ni madres</>}
        </div>
    )
};

export default Contenedor;