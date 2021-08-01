import * as React from 'react';
import { useState } from 'react';
import style from './index.module.css';

export default function Home() {
  const [counter, setCounter] = useState<number>(1);

  function handleAdd() {
    setInterval(() => {
      setCounter(prevState => prevState * 2);
    }, 50);
  }

  function handlRemove() {
    setCounter(prevState => prevState / 2);
  }

  return (
    <div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handlRemove}>Remove</button>
        MAURICIO
        <div style={{ textAlign: 'center' }}>{counter}</div>
        <div style={{ textAlign: 'center' }}>{counter * counter}</div>
      </div>
    </div>
  );
}
