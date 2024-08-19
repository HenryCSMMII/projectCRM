import './App.css';
import { useState, useEffect } from 'react';
import { rubros, articulos } from './datos.js';
function App() {  
  const [rubro, setRubro] = useState(rubros[0]);
  const [articulosRubro, setArticuloRubro] = useState(articulos.filter(articulo => articulo.codigorubro === rubro.codigo));

  const [articulo, setArticulo] = useState(articulosRubro[0]);

  function cambiarRubro(e){
    setRubro(rubros.find(rubro => rubro.codigo === parseInt(e.target.value)));
    const articulosRubro = articulos.filter(articulo => articulo.codigorubro == parseInt(e.target.value));
    setArticuloRubro(articulosRubro);
    setArticulo(articulosRubro[0]);
  }

  function cambiarArticulo(e){
    setArticulo(articulosRubro.find(articulo => articulo.codigo === parseInt(e.target.value)));
  }

  return (
    <div className="formulario">
      <div>
        <select value={rubro.codigo} onChange={cambiarRubro}>
          {rubros.map(rubro => (
            <option key={rubro.codigo} value={rubro.codigo}>
              {rubro.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select value={articulo.codigo} onChange={cambiarArticulo}>
          {articulosRubro.map(articulo => (
            <option key={articulo.codigo} value={articulo.codigo}>
              {articulo.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          <li>Rubro: <strong>{rubro.nombre}</strong></li>
          <li>Articulo: <strong>{articulo.nombre}</strong></li>
          <li>Precio: <strong>{articulo.precio}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default App;