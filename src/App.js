import logo from './logo.svg';
import './App.css';

function mostrarTitulo(titulo){
  return (
    <h1>{titulo}</h1>
  );
}

function App() {
  const buscadores = ['http://www.google.com', 'http://www.bing.com', 'http://www.yahoo.com'];
  return (
    <div>
      {mostrarTitulo('Buscadores')}
      <a href={buscadores[0]}>Google</a>
      <br></br>
      <a href={buscadores[1]}>Bing</a>
      <br></br>
      <a href={buscadores[2]}>Yahoo</a>
    </div>
  );
}

export default App;
