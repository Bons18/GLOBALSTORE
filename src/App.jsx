import React from 'react';
import Header from './Components/Layout/Layout'; // Asegúrate que la ruta es correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Components/Pages/Inicio';  // Asegúrate que la ruta es correcta

function App() {
  return (
    <>
      <Header />
      <Inicio />
    </>
  );
}

export default App;
