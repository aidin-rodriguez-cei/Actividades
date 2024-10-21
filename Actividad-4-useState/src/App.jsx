import './App.css'
import { Formulario } from './components/Formulario'
import {LoginForm} from './components/LoginForm'
import FormularioMultiple  from './components/FormularioMultiple'
import Galeria from './components/Galeria'
import TestEffect from './components/TestEffect'
import PruebasDeUseEffect from './components/PruebasDeUseEffect'
import Timer from './components/Timer'
import FetchDataComp from './components/FetchDataComp'

function App() {

  return (
    <>
    
    <div className='Card'>
    <h1>Soy un Fetch</h1>
      <FetchDataComp/>
    </div>

    <div className='Card'>
    <h1>Soy Timer</h1>
      <Timer/>
    </div>

    <div className='Card'>
    <h1>Pruebas de useEffect</h1>
      <PruebasDeUseEffect/>
    </div>

    <br />
    <br />

    <div className='Card'>
    <h1>Ejemplos con useState</h1>
      <Formulario/>
    </div>

    <br />
    <br />

    <div className='Card'>
    <h1>Login</h1>
      <LoginForm/>
    </div>

    <br />
    <br />

    <div className='Card'>
    <h1>Formulario de múltiples páginas</h1>
      <FormularioMultiple/>
    </div>

    <br />
    <br />

    <div className='Card'>
    <h1>Galería de imágenes</h1>
      <Galeria/>
    </div>

    <div className='Card'>
    <h1>Test Effect</h1>
      <TestEffect/>
    </div>

    </>
    
  )
}

export default App
