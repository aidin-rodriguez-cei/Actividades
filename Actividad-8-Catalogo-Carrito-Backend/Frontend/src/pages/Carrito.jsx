import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import '../css/catalogo.css';

const Carrito = () => {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  const handleIrACheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="carrito-container">
      <h1>Carrito de Compras</h1>
      {carrito.length === 0 && <p>El carrito está vacío.</p>}
      {carrito.length > 0 && (
        <>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                <p>{producto.nombre} - ${producto.precio} x {producto.cantidad}</p>
                <button onClick={() => quitarDelCarrito(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button 
            className="btn-vaciar-carrito"
            onClick={vaciarCarrito}
          >
            Vaciar Carrito
          </button>
          <button 
            className="btn-comprar-carrito" 
            onClick={handleIrACheckout}
          >
            Comprar
          </button>
        </>
      )}
    </div>
  );
};

export default Carrito;



