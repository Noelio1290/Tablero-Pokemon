import React from 'react';

const Pokemon = (props) => {
  const {id,name,img} = props
  return (
    <div className='pokemon'>
        <img src={img} alt="" />
        <div>#{id}</div>
        <div>{name}</div>
    </div>
  );
};

export default Pokemon;