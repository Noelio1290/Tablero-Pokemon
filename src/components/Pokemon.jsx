import React from 'react';

const Pokemon = (props) => {
  const {id,name,img, legendSetter} = props
  const clickHandler= () => {
    legendSetter(name)
  }
  return (
    <div className='pokemon' onClick={clickHandler}>
        <img src={img} alt="" />
        <div>#{id}</div>
        <div>{name}</div>
    </div>
  );
};

export default Pokemon;