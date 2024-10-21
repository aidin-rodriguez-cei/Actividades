import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { ModoOscuroContext, ModoOscuroProvider } from './context/ModoOscuroContext';
import { CarritoProvider } from './context/CarritoContext';
import './css/catalogo.css';

// Componente Navbar
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
};

// Componente Layout
const Layout = () => {
  const { tema, toggleTema } = useContext(ModoOscuroContext);

  return (
    <div className={tema}>
      <header>
        <div className="header-content">
          <Navbar />
          <button className="theme-toggle" onClick={toggleTema}>
            Cambiar Tema: {tema}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const App = () => (
  <ModoOscuroProvider>
    <CarritoProvider>
      <Layout />
    </CarritoProvider>
  </ModoOscuroProvider>
);

export default App;