import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => [...prevCarrito, producto]);
    };

    const quitarDelCarrito = (id) => {
        setCarrito(prevCarrito => prevCarrito.filter(producto => producto.id !== id));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};



