import React from 'react';
import './styles/index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Mata from './pages/Mata';
import Enviar from './pages/Enviar';
import Cadastro from "./pages/Cadastro";
import Classificacao from './pages/Classificacao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Cadastro' element={<Cadastro />} />
        <Route path='Classificacao' element={<Classificacao />} />
        <Route path='MataMata' element={<Mata />} />
        <Route path='Enviar' element={<Enviar />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

