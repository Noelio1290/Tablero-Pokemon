import React from 'react';

const Button = ({legendSetter}) => {
  console.log('im re rendering tha button')

  const handleClick = () => {
    legendSetter();
  };

  return (
    <button onClick={handleClick}>
      Guardar Pokemon
    </button>
  );
};

export default Button;
