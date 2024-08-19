import './App.css';
import { useState, useEffect } from 'react';
import ListClientesComponent from './components/ListClientesComponent';
import AddClienteComponent from './components/AddClienteComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {  
  

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<ListClientesComponent />}></Route>
            <Route exact path='/clientes' element={<ListClientesComponent />}></Route>
            <Route exact path='/add-cliente' element={<AddClienteComponent />}></Route>
            <Route exact path='/edit-cliente/:id' element={<AddClienteComponent />}></Route>
            </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;