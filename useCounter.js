//Custom Hook es una funcion no utiliza JSX
//por lo tanto no se importa react por que
//no renderiza nada
import { useState } from "react";

// mando estado inical si no mandan nada va a tomar el valor inicial
export const useCounter = (initialState = 10) => {
  //creo un estado - le asigno el valor por defecto al estado
  const [state, setState] = useState(initialState);

  //Despues de que ya funciono lo pruebo enviando un argumento factor=1
  const increment = (factor = 1) => {
    setState(state + factor);
  };

  //Tarea Reset
  const reset = () => {
    setState(initialState);
  };

  const decrement = (factor = 1) => {
    setState(state - factor);
  };
  //retorno o un objeto o un array deacuerdo a la necesidad
  return {
    state,
    increment,
    decrement,
    reset,
  };
};
