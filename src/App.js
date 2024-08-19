import './App.css';
import { useState, useEffect } from 'react';
function App() {  
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    estudios: false
  });

  function cambiarNombre(e){
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value
    }))
  }

  function cambiarEdad(e){
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value
    }))
  }
  
  function cambiarEstudios(e){
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios
    }))
  }

  function procesar(e){
    e.preventDefault();
    alert("Datos cargados: "+ datos.nombre + " " + datos.edad + " " + datos.estudios);
  }

  return (
    <div>
      <form onSubmit={procesar}>
        <p>Ingrese su nombre:
          <input type="text" placeholder="Nombre" value={datos.nombre} onChange={cambiarNombre} />
        </p>
        <p>Ingrese su edad:
          <input type="text" placeholder="Edad" value={datos.edad} onChange={cambiarEdad} />
        </p>
        <p>Estudios:
          <input type="checkbox" checked={datos.estudios} onChange={cambiarEstudios} />
        </p>
        <button type="submit">Enviar</button>
      </form>
      <hr/>
      <h3>Datos ingresados</h3>
      <p>Nombre: {datos.nombre}</p>
      <p>Edad: {datos.edad}</p> 
      <p>Estudios: {datos.estudios ? "Si" : "No"}</p>
    </div>
  );
}

export default App;