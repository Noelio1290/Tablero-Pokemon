import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  console.log('im re rendering tha button')

  const handleClick = () => {
    console.log(`Button clicked ${count + 1} times`);
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Guardar Pokemon
    </button>
  );
};

export default Button;
