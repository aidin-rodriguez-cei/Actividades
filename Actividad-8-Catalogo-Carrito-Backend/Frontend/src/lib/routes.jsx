import { createBrowserRouter } from "react-router-dom";

// Importar páginas
import HomeCatalogo from '../pages/HomeCatalogo';
import DetalleProducto from "../pages/DetalleProducto";
import Carrito from '../pages/Carrito';
import Checkout from '../pages/Checkout';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Admin from '../pages/Admin';

// Importar páginas especiales
import Layout from "../Layout";
import ErrorPage from "../error-page";
import { PrivateRoute } from "../components/PrivateRoute";

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
        path: 'registro',
        element: <Registro />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'admin',
        element: <PrivateRoute>
                 <Admin />
                 </PrivateRoute>
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

export default router;
