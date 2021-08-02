import './App.css';
import Escena from './Components/escena/Escena';
import React, { useState } from 'react'
import Buttons from './Components/buttons/Buttons'


const App = _ => {

  const [isTrue,setEstado] = useState(false);

  const cambiaEstado=()=>setEstado(true);

  
  const noLogged = 
    <div>
      <p>Bienvenido, púlsame para comenzar</p>
      <button onClick={()=>cambiaEstado()}>PÚLSAME</button>
    </div>

  const logged = 
    <div>
      <Buttons />
      <div>
        <Escena param='0' />
        <Escena param='1' />
        <Escena param='2' />
        <Escena param='3' />
      </div>
    </div>

  return (
    <div>
      {isTrue ? logged : noLogged}
    </div>
  );
}

export default App;
