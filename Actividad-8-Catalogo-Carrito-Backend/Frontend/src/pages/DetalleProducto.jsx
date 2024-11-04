import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import '../css/catalogo.css';

const DetalleProducto = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { agregarAlCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/backend/API/productos.json')
      .then(response => response.json())
      .then(data => {
        const productoEncontrado = data.productos.find(p => p.id === parseInt(productoId));
        setProducto(productoEncontrado);
      });
  }, [productoId]);


  const aumentarCantidad = () => setCantidad(cantidad + 1);
  const disminuirCantidad = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  const agregarAlCarritoHandler = () => {
    if (producto) {
      agregarAlCarrito({ ...producto, cantidad });
      navigate('/carrito'); // Redirige a la página de Checkout
    }
  };

  if (!producto) return <div>Cargando...</div>;

  return (
    <div className="producto">
      <img src={producto.imagenUrl} alt={producto.nombre} />
      <h2 className="producto-title">{producto.nombre}</h2>
      <p className="producto-description">Efecto: {producto.efecto}</p>
      <p className="producto-description">Duración: {producto.duracion}</p>
      <p className="producto-description">Precio: ${producto.precio}</p>
      <p className="producto-description">Stock: {producto.stock}</p>
      <div className="cantidad-container">
        <button onClick={disminuirCantidad}>-</button>
        <input type="number" value={cantidad} readOnly />
        <button onClick={aumentarCantidad}>+</button>
      </div>
      <button 
        className="agregar-producto" 
        onClick={agregarAlCarritoHandler}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default DetalleProducto;


