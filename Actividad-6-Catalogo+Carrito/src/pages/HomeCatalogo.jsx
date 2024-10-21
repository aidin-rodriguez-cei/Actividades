import { useState, useEffect } from "react";
import '../css/catalogo.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    getProductos('/backend/API/productos.json');
  }, []);

  const getProductos = async (url) => {
    try {
      const respuesta = await fetch(url);
      const objeto = await respuesta.json();
      setProducts(objeto.productos);
    } catch (e) {
      console.log("Error:", e);
    }
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePriceFilter = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredProducts = products.filter(producto => {
    const matchesSearchTerm = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.efecto.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = maxPrice === "" || producto.precio <= parseFloat(maxPrice);
    return matchesSearchTerm && matchesPrice;
  });

  return (
    <div>
      <h1 className="titulo-inicial">Catálogo Pociones Mágicas</h1> 
      <div className="search-container">
        <input
          type="text"
          placeholder="Busca por nombre o efecto"
          value={searchTerm}
          onChange={handleSearch}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={handlePriceFilter}
        />
      </div>

      <div className="catalog-container">
        {filteredProducts.map((producto) => (
          <article key={producto.id} className="producto">
            <img src={producto.imagenUrl} alt={producto.nombre} />
            <h2 className="producto-title">{producto.nombre}</h2>
            <p className="producto-description">Efecto: {producto.efecto}</p>
            <p className="producto-description">Duración: {producto.duracion}</p>
            <p className="producto-description">Precio: ${producto.precio}</p>
            <p className="producto-description">Stock: {producto.stock}</p>
            <Link to={`/producto/${producto.id}`} className="agregar-producto">
              Comprar
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;

