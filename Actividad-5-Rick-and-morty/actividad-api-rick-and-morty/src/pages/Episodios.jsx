import { useState, useEffect } from "react";

const  Episodios = () => {

    const [episodios, setEpisodios] = useState([])
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        page: 0
    })

    useEffect( ()=> {
        getEpisodios("https://rickandmortyapi.com/api/episode"); 
        console.log("Cargando datos");
    }, []); 

    const getEpisodios = async (url) => {
        try {
            const respuesta = await fetch(url);
            const objeto = await respuesta.json();
            console.log("Objeto vale: ", objeto);
            setEpisodios(objeto.results);
            setInfo(objeto.info);

        } catch (e) {
            console.log("Upsi tenemos un error:",e);
        }
    }

    return (  
        <section>
        <h3>Episodios({info.count})</h3>

        <div className="flexBetween">
            <button disabled={!info.prev} onClick={()=>{getEpisodios(info.prev)}}>Ant</button>
            <div className="flexCenter">
            </div>
            <button disabled={!info.next} onClick={()=>{getEpisodios(info.next)}}>Sig</button>
            
        </div>

        <div className="flexGrid">
            {
            episodios.map((Episodios) => (
                        < EpisodiosCard key={Episodios.id} {...Episodios}/>
                    ))


                }

        </div>
    </section>
    )
}


const EpisodiosCard = ({id, name, air_date, episode}) => {
    return(
        <article className="Card">
        <p>Nombre: {name}</p>
        <p>Air Date: {air_date}</p>
        <p>Episodio: {episode}</p>
        </article>
    )
}

 
export default Episodios;