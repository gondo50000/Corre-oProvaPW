import {BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from './components/pages/Home/Home';
import Formulario from './components/pages/Formulario/Formulario';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Formulario} path="/formulario"  />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
