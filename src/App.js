import logo from './logo.svg';
import './App.css';

function retornarNumeroAleatorio(){
  return Math.trunc(Math.random()*10);
}

function App() {
  const siglo = 21;
  const persona = {
    nombre: "Juan",
    edad: '18'
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Titulo nivel 1</h1>
      <hr/>
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a una función</h3>
      <p>Un valor aleatorio llamando a un método:</p>
      {retornarNumeroAleatorio()}
      <h3>Cálculo inmediato de expresiones</h3>
      2 + 2 = {2+2}
    </div>
  );
}

export default App;
