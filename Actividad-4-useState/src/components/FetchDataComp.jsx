import { useState, useEffect } from "react";

export const FetchDataComp = () => {
    const [data, setData] = useState([])

    useEffect( ()=> {
        console.log("Cargue mi componente");
        getDataUsandoAsync();

    }, []);

    const getDataUsandoAsync = async () => {
        try {
            //llamar a la API y esperar la respuesta
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
            // Convertir el string de JSON en un objet JS
            const objJS = await respuesta.json();
            console.log(objJS);
            // Guardo la info en mi set
            setData(objJS);
        } catch (e) {
            console.log("tuvimos un error:")
        }
    }

    const getDataUsandoThen = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    // .then ((stringJson) => {
    //     console.log(stringJson);
    //     const objetoJson = stringJson.json();
    //     return objetoJson;
    // })
    .then ( stringJson => stringJson.json())
    .then ( objetoJson => setData(objetoJson))
    .catch ( error => {
        console.log("Tuvimos un error: ", error)
    });
    }  

    return( 
        <>
        {!data.length && "Cargando..." }
        {
        data.map(({id, title}) => {
           // const {id, title} = user
            return (
                <div key={id}>
                <h3>{title}</h3>
                </ div>
            )
        })
        }
        </>
    )
}

export default FetchDataComp;