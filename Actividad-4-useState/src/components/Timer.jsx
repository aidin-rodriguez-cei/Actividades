import { useState, useEffect } from "react";

const Timer = () => {
    const [segundos, setSegundos] = useState(0);
    const [idIntervalo, setIdIntervalo] = useState(null);

    useEffect( ()=>{

        document.title=`Timer: ${segundos}`;

        // código que se ejecuta al iniciar mi componente 
        //startTimer();

        // función de cleanup
        return () => {
            console.log("borrar mis intervalo", idIntervalo)
            clearInterval(idIntervalo);
        }
    }, [segundos]);

    // nuestras funciones

    const startTimer = () => {
        clearInterval(idIntervalo);
        resetTimer();
        console.log("Iniciar Timer")
        const idInt = setInterval( ()=> {
            setSegundos( segundos => segundos+ 1)
        }, 1000);

        console.log("CARGUE EL TIMER", idInt)

        setIdIntervalo(idInt); // lo guardo en useState
    }

    const pauseTimer = () => {
        console.log("Iniciar Timer", idIntervalo)
        clearInterval(idIntervalo);
    }

    const  resetTimer = () => {
        console.log("Iniciar Timer", idIntervalo)
        setSegundos(0);
        clearInterval(idIntervalo);
    }

    // nuestro render
    return ( 
        <div> 
        <p>Han pasado {segundos} segundos</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
        </div>
    );
}
 
export default Timer;