import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import '../css/catalogo.css';

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleConfirmarCompra = () => {
    // Lógica para procesar el pago
    vaciarCarrito();
    alert('Compra realizada con éxito');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {carrito.length === 0 && <p>El carrito está vacío.</p>}
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            <p>{producto.nombre} - ${producto.precio} x {producto.cantidad}</p>
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={handleConfirmarCompra}>Comprar</button>
    </div>
  );
};

export default Checkout;

