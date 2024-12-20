import { createContext, useContext, useState, useEffect } from "react";  

// Crear un contexto de Usuario
const UserContext = createContext();

// Crear un provider y exportarlo para usarlo en main.jsx
export function UserProvider({children}) {

    const [user, setUser] = useState(null);

    // variables de entorno
    const {VITE_API_URL, VITE_BACKEND_URL} = import.meta.env;

    // ver si ya estoy logueado
    useEffect( () => {
        const storedUser= localStorage.getItem("user")
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
    }
    )

    // login
    const login = async(userData) => {
        console.log("Estoy en login")
        // fetch para enviarle al backend
        const response = await fetch(`${VITE_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
                // 'Authorization': Bearer ${}
            },
            body: JSON.stringify(userData)
        });



        // el backend me devuelve mi USUARIO completo
        // foto, nombre, email (NO CLAVE)
        const responseData = await response.json();

        if(!response.ok){
            console.log("ERROR al traer datos")
        }

        localStorage.setItem("user", JSON.stringify(responseData))

        // guardo con setUser mis datos de usuario
        setUser(userData);
    }

    // registro
    const register = () => {
        console.log("Estoy en register")
        setUser(userData)
        
    }

    // logout
    const logout = () => {
        console.log("Estoy en logout")
        localStorage.removeItem("user")
        setUser(null);
        
    }

    return(
        <UserContext.Provider value={{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}


// Crear un Custom Hook para usar nuestro contexto de Usuario
// Se exporta para poder usarlo desde cualquier componente.
export function useUser(){
    return useContext(UserContext);
}