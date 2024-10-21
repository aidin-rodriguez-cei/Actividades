import { createBrowserRouter } from "react-router-dom";

// Importar páginas
import HomeCatalogo from '../pages/HomeCatalogo';
import DetalleProducto from "../pages/DetalleProducto";
import Carrito from '../pages/Carrito';
import Checkout from '../pages/Checkout';

// Importar páginas especiales
import Layout from "../Layout";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeCatalogo />
      },
      {
        path: 'producto/:productoId',
        element: <DetalleProducto />
      },
      {
        path: 'carrito',
        element: <Carrito />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

export default router;
