import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './lib/routes'; 
import './css/catalogo.css';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

