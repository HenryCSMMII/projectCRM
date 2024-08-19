import './App.css';
import { useState } from 'react';
import Dado from './Dado';

function App() {

  function generarValor(){
    return Math.trunc(Math.random()*6);
  }
  function tirarDados(){
    setValor1(generarValor());
    setValor2(generarValor());
    setValor3(generarValor());
  }

  const [valor1,setValor1] = useState(0);
  const [valor2,setValor2] = useState(0);
  const [valor3,setValor3] = useState(0);  

  return (
    <div>
      <Dado valor={valor1}/>
      <Dado valor={valor2}/>
      <Dado valor={valor3}/>
      <button onClick={tirarDados}>Tirar dados</button>
    </div>
  );
}

export default App;
