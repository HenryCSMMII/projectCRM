import './App.css';
import { useState } from 'react';

function App() {

  function eliminarUltimaFila(){
    if(articulos.length > 0){
      const temp = Array.from(articulos);
      temp.pop();
      setArticulos(temp);
    }
  }

  const [articulos, setArticulos] = useState([
    {
      codigo: 1,
      descripcion: "Papas",
      precio: 10.42
    },
    {
      codigo: 2,
      descripcion: "Naranjas",
      precio: 11.21
    },
    {
      codigo: 3,
      descripcion: "Peras",
      precio: 0.10
    },
  ]);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return (
              <tr key = {art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick = {eliminarUltimaFila}>Eliminar Fila</button>
    </div>
  );
}

export default App;
