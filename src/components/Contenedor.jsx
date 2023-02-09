import React from 'react';
import Pokemon from "./Pokemon";

const Contenedor = (props)=>{
    const { pokemons } = props
    return (
        <div className='spacePokemon'>
            {pokemons.map((pokem, i) => <Pokemon key={`pokemon-number-${i}`} img={pokem.img} id={pokem.id} name={pokem.name} />)}
        </div>
    )
};

export default Contenedor;