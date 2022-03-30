//import React from "react";
import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  //por defectop tien un stado
  //Cuando se usa este efecto y al llamar la api por alguna situacion de cancela
  //la respuesta genera un error
  //react_devtools_backend.js:4045 Warning: Can't perform a React state update on an unmounted component.
  //solo se soluciona son el useRef
  //isMounted mantiene la refrencia mientas el hook esta vivo - lo envio al useEffect
  const isMounted = useRef(true);

  //data en nul inicial , loadin por que de inicio va cargando, un erro
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      //cuando se desmota  y lo valido con una condicional en el setState
      isMounted.current = false;
    };
  }, []);

  //disparo el effec a penas cambia el url

  useEffect(() => {
    //para que cada que cambie le quote  al siguente salga el loading

    //para manejar asyncronismo lo mento dentro de un setTime

    //Asigno valores inciales al set setState
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //activo es setState

        setTimeout(() => {
          if (isMounted) {
            setState({
              loading: false,
              error: null,
              data,
            });
          } else {
            console.log("state no se llamo");
          }
        }, 4000);
      });
  }, [url]);
  // a penas cambie la [url]
  return state;
};
