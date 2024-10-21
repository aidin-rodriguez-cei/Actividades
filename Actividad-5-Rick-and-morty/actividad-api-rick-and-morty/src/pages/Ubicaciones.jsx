import { useState, useEffect } from "react";

const  Ubicaciones = () => {

    const [ubicaciones, setUbicaciones] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        page: 0
    })

    useEffect( ()=> {
        getUbicaciones("https://rickandmortyapi.com/api/location"); //utilizando async/await
        console.log("Cargando datos");
    }, []); // al estar vacìo unicamente se ejecuta en componentDidMount

    const getUbicaciones = async (url) => {
        try {
            //llamar a la API y esperar la respuesta
            const respuesta = await fetch(url);
            
            // Convertir el string de JSON en un objeto JS
            const objeto = await respuesta.json();
            console.log("Objeto vale: ", objeto);
            
            // Guardo la info en mi set
            setUbicaciones(objeto.results);
            setInfo(objeto.info);

        } catch (e) {
            console.log("Upsi tenemos un error:",e);
        }
    }

    return (
        <section>
            <h3>Ubicaciones({info.count})</h3>

            <div className="flexBetween">
                <button disabled={!info.prev} onClick={()=>{getUbicaciones(info.prev)}}>Ant</button>
                <div className="flexCenter">
                </div>
                <button disabled={!info.next} onClick={()=>{getUbicaciones(info.next)}}>Sig</button>
                
            </div>

            <div className="flexGrid">
                {
                ubicaciones.map((Ubicaciones) => (
                            < UbicacionesCard key={Ubicaciones.id} {...Ubicaciones}/>
                        ))


                    }

            </div>
        </section>
    );
}


const UbicacionesCard = ({id, name, type, dimension}) => {
    return(
        <article className="Card">
        <p>Nombre: {name}</p>
        <p>Type: {type}</p>
        <p>Dimensión: {dimension}</p>
        </article>
    )
}


export default Ubicaciones;