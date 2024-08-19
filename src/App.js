import './App.css';
import { useState } from 'react';

function App() {
  function generarAleatorio(){
    const valor = Math.trunc(Math.random() * 10);
    setValor(valor);
  }
  
  const [numero, setValor] = useState(0);
  //CUANDO SE COLOCA ONCLICK NO RECIBE PARÁMETRO
  return (
    <div>
      <p>Número aleatorio: {numero}</p>
      
      <button onClick={generarAleatorio()}>
        Generar valor aleatorio
      </button>
    </div>
  );
}

export default App;
