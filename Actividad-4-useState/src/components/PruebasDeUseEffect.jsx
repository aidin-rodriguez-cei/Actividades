import { useState, useEffect } from "react";

const PruebasDeUseEffect = () => {
    const [cont, setCont] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false);
    const [showMontDes, setshowMontDes] = useState(true);

    // 1. Crea un componente que muestre un mensaje en la consola cuando el componente se monte por primera vez.
    useEffect(() => {
        console.log("El componente se ha montado por primera vez");
    }, []);

    // 2. Crea un componente que registre el tiempo en segundos desde que el componente se montó. 
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // 3. Crea un componente que obtenga datos de una API y los muestre en pantalla (https://jsonplaceholder.typicode.com/posts)

    // useEffect( () => {

    //  obtenerDatos();

    // }, []);

    const obtenerDatos = async () => {
        if (showPosts) {
            setShowPosts(false);
            setPosts([]);
        } else {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
                setShowPosts(true);
            } catch (error) {
                console.error("Error al obtener los datos de la API:", error);
            }
        }
    };

    // Componente para traer info especifica
    const Post = ({ info }) => {
        return (
            <li>
                <h4>Title: {info.title}</h4>
                <p>Body: {info.body}</p>
            </li>
        );
    };

    // 4. Crea un contador con botones para incrementar y decrementar el valor. Usa useEffect para registrar cada vez que el valor del contador cambie.

    // 5. Crea un componente que registre el tamaño de la ventana en la consola cada vez que esta cambie.

    // 6. Crea un componente que sincronice un estado con el localStorage del navegador.

    // 7. Crear un componente que muestre en consola cada vez que se monta/desomonta el componente.

    const MontDes = () => {
        useEffect(() => {
           // console.log("Se ha montado");
    
            return () => {
           //  console.log("Se ha desmontado");
            };
        }, []);
    };

    // Lo que retorna en pantalla
    return (
        <div>
            <p>Soy una prueba {cont}</p>
            <p>El componente ha estado montado por {seconds} segundos.</p>

            <div>
                <h3>API JSON Placeholder</h3>
                <button onClick={obtenerDatos}>Obtener Datos</button>
                {showPosts && (
                    <ul className="fetch">
                        {posts.map(post => (
                            <Post key={post.id} info={post} />
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h4>Componente de Montaje y Desmontaje</h4>
                {showMontDes && <MontDes />}
            </div>
        </div>
    );
};


export default PruebasDeUseEffect;
