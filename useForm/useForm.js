//Un un CustomHook si no se maneja jsx no de usua react
//Me permite leer las entradas de un Input
import { useState } from "react";
//defino  en el estado inicial un objeto vacio por que ni manda nada no saque error
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  //console.log("Jairo" + values);
  //console.log("Jairo2" + setValues);
  //console.log("Jairo3" + initialState);

  //Reseteo el formulario - PARA QUE QUEDE LIMPIO- LO ENVIO COMO TERCER ARGUMENTO DE USEFORM
  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    //creo una funcion independiente para recibir el evento
    setValues({
      ...values,
      [target.name]: target.value,
      //al target.name que es la referencia del input le asigno el value que es el valor que entra el usuario
    });
  };
  //retorna values que es el stado del formulario y la funcion que cambia los valores
  //exporto el reset para limpiar el formulario
  return [values, handleInputChange, reset];
};
