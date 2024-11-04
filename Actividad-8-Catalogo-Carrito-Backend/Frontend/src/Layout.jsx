import { Outlet } from "react-router-dom";
import { useContext } from 'react';
import { CarritoProvider } from '@/context/CarritoContext';
import { ModoOscuroProvider, ModoOscuroContext } from './context/ModoOscuroContext';
import '@/css/catalogo.css';

// Importar components
import { Header } from '@/components/Header';

// Componente Layout
const Layout = () => {
  const { tema } = useContext(ModoOscuroContext); 

  return (
    <div className={tema === "dark" ? "dark" : "light"}> 
      <header>
        <div className="header-content">
          <Header />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
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
