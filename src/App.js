import './App.css';
import { useState } from 'react';

function App() {
  function generarAleatorios(){
    const vector = new Array(4);
    for(let x = 0; x < vector.length; x++){
      vector[x] = Math.trunc(Math.random()*10);
    }
    setNumeros(vector);
  }
  
  const [numeros, setNumeros] = useState([0,0,0,0]);
  return (
    <div>
      <p>Números aleatorios:</p>
      {numeros.map(num => (
        <p>{num}</p>
      ))}
      <button onClick={generarAleatorios}>
        Generar valores aleatorios
      </button>
    </div>
  );
}

export default App;
