import './App.css';
import { useState } from 'react';
import Dado from './Dado';

function App() {  
  function aumentarContador(){
    if(contador >= 10){
      alert("Reinicio");
      setContador(0);
    }
    else setContador(contador+1);
  }

  const [contador,setContador] = useState(0);

  return (
    <div>
      <Dado valor={contador}/>
      <button onClick={aumentarContador}>Aumenta</button>
    </div>
  );
}

export default App;