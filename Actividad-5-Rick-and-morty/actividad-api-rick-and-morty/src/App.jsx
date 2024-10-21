import { useState } from 'react'
import './css/App.css'
import './css/Style.css'

import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'

import Personajes from './pages/Personajes'
import Episodios from './pages/Episodios'
import Ubicaciones from './pages/Ubicaciones'

function App() {
  // const [seccion, setSeccion] = useState('Personajes');

  return (

    <Router>

    <h1>Rick & Morty</h1>

      <div className="nav-buttons">
        {/* V.1 Sistema de Links con useState + botones */}
        {/* 
        <button onClick={() => setSeccion('Personajes')}>Personajes</button>
        <button onClick={() => setSeccion('Ubicaciones')}>Ubicaciones</button>
        <button onClick={() => setSeccion('Episodios')}>Episodios</button> 
        */}
      
      {/*V.2 Sistema nuevo con React Router */}
      {/* 
      <li><Link to="/personajes">Personajes</Link></li>
      <li><Link to="/ubicaciones">Ubicaciones</Link></li>
      <li><Link to="/episodios">Episodios</Link></li> 
      */}

      {/* V.3 Navegacion con React Router */}
      <li><NavLink to="/personajes" className="Buttom-Link">Personajes</NavLink></li>
      <li><NavLink to="/ubicaciones" className="Buttom-Link">Ubicaciones</NavLink></li>
      <li><NavLink to="/episodios" className="Buttom-Link">Episodios</NavLink></li>

      </div>

      {/* Aca creamos un "switch" de useState seccion */}
      {/* <div className='Content'>
        {seccion == "Personajes" && <Personajes />}
        {seccion == "Ubicaciones" && <Ubicaciones />}
        {seccion == "Episodios" && <Episodios />}
      </div>  */}

      {/* Esta version utiliza react router */}
      <div className='Content'>
        {/* Posibles rutas */}
        <Routes>
          <Route path="/personajes" element={<Personajes/>}    />
          <Route path="/ubicaciones" element={<Ubicaciones/>}  />
          <Route path="/episodios" element={<Episodios/>}      />
          {/* Path o Ruta principal - Raiz */}
          <Route path="/" element={<Personajes/>}    />
        </Routes>
        
      </div>

     </Router>
  )
}

export default App
