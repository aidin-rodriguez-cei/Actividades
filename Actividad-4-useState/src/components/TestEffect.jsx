// sfc

import { useState, useEffect } from "react";

const TestEffect = () => {
    const [cont, setCont] = useState(0);
    let otraVariable="HOLA";

// el ciclo de vida de los componenete tiene 3 partes:
// 1. Cuando se monta/carga/aparece/renderiza
    useEffect( () => {
        // Ejemplos de uso:
        // Traer datos de la base de datos o de una API
        // Suscribir a un evento (button.addEventListener("click", ()=>{}))
        console.log("Monte el componente TestEffect");

        return() => {
        console.log("Quite el componente")}
    }, []);

    const handleClick = ()=> {console.log("me hicieron click")};

// 2. Cada vez que se regarga/re-renderiza/se actualiza
    useEffect( ()=>{
        console.log("Actualice el componente"+cont); //"ComponentDifMount"
        const buttom= document.getElementById("miBoton");
        //ciclo de vida 3 (opcional)
        
        buttom.addEventListener('click', handleClick);
        
        
        return() => {
        console.log("Quite el componente CONT")}
    }, [cont, otraVariable]);

// ciclo de vida 3 (opcional)
// 3. Cuando se quita/desaparece/desmonta/descarga/me lo cargo... "ComponentWillUnmount"
    
   
    return (  
        <>
        Soy un Test de useEffect
        {
            cont < 3 &&
        <button onClick={()=> setCont(cont+1)}>Click {cont}</button>
        } 
        <button id="miBoton">Boton 2</button> 
        </>
    );
}
 
export default TestEffect;