import { useState } from 'react';
import style from './button.module.css';

export function Button() {
  const [number, setNumber] = useState(0);

  function handleOnClick() {
    setNumber(prevState => prevState + 1);
  }

  return (
    <button className={style.button} onClick={handleOnClick}>
      Botão {number}
    </button>
  );
}
