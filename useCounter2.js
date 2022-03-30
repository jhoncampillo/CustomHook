//Custom Hook es una funcion no utiliza JSX
//por lo tanto no se importa react por que
//no renderiza nada
import { useState } from "react";

// menso estado inical si no mandan nada va a tomar el valor inicial
export const useCounter = (initialState = 10) => {
  //creo un estado - le asigno el valor por defecto al estado
  const [counter, setCounter] = useState(initialState);

  //Despues de que ya funciono lo pruebo enviando un argumento factor=1
  const increment = () => {
    setCounter(counter + 1);
  };

  //Tarea Reset
  const reset = () => {
    setCounter(initialState);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  //retorno o un objeto o un array deacuerdo a la necesidad
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
