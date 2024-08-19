import './App.css';
import { useState, useEffect } from 'react';
function App() {  
  const [dia, setDia] = useState("Lunes");
  const [equipo, setEquipo] = useState("Real Madrid");

  function cambiaDia(e){
    setDia(e.target.value);
  }

  function cambiaEquipo(e){
    setEquipo(e.target.value);
  }

  return (
    <div>
      <h1>Seleccionar día de la semana</h1>
      <p>
        <select valor={dia} onChange={cambiaDia}>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
      </p>
      <p>Día seleccionado: {dia}</p>
      <h1>Seleccionar equipo de fútbol</h1>
      <p>
        <input type="radio" value="Liverpool" checked={equipo == "Liverpool"} onChange={cambiaEquipo}/>
        Liverpool
        <input type="radio" value="Ajax" checked={equipo == "Ajax"} onChange={cambiaEquipo}/>
        Ajax
        <input type="radio" value="Rennes" checked={equipo == "Rennes"} onChange={cambiaEquipo}/>
        Rennes                
      </p>
      <p>Equipo seleccionado: {equipo}</p>
    </div>
  );
}

export default App;