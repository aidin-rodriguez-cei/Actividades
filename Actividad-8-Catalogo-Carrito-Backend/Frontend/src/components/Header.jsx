import { Link, NavLink } from "react-router-dom";
import '@/css/catalogo.css';
import { useUser } from "@/hooks/useUser";
import { useContext } from 'react';
import { ModoOscuroContext } from '../context/ModoOscuroContext';

// Componente Navbar
export const Header = () => {
    const { user, logout } = useUser();
    const { tema, toggleTema } = useContext(ModoOscuroContext);

    return (
        <header className={tema === 'oscuro' ? 'header-dark' : 'header-light'}>
            <nav className="flex-wrap">
                <Link to="/">Inicio</Link>
                <Link to="/carrito">Carrito</Link>
                <Link to="/checkout">Checkout</Link>

                {user ? (
                    <ul>
                        <li>
                            <img src={user.image} alt={user.name} className="w-6 h-6 rounded-full" />
                            <h3 className="mt-1">{user.name}</h3>
                            <li><NavLink onClick={logout}>Salir</NavLink></li>
                        </li>
                    </ul>
                ) : (
                    <>
                        <Link to="/registro">Regístrate</Link>
                        <Link to="/login">Inicia sesión</Link>
                    </>
                )}
                
                <Link to="/admin">P.Admin</Link>

                {/* Botón para cambiar tema */}
                <button className="theme-toggle" onClick={toggleTema}>
                    Cambiar Tema: {tema}
                </button>
            </nav>
        </header>
    );
};
