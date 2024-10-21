import { useState } from "react";

const Galeria = () => {
    const [indiceActual, setIndiceActual] = useState(0);

const imagenAnterior = () =>{
    console.log("Anterior")
    //setIndiceActual(() => Math.max(indiceActual -1,1));
    setIndiceActual(() => 
        indiceActual === 0 ? imagenes.length - 1 : indiceActual - 1);
}

const imagenSiguiente = () =>{
    console.log("Siguiente")
    setIndiceActual(() => Math.min(indiceActual +1,3));
}

const imagenes = [
    'https://via.placeholder.com/300x300?text=Imagen+1',
    'https://via.placeholder.com/300x300?text=Imagen+2',
    'https://via.placeholder.com/300x300?text=Imagen+3',
    'https://via.placeholder.com/300x300?text=Imagen+4'
]

return (
    <>
    <div>
    <img src={imagenes[indiceActual]} alt={`Imagen ${indiceActual + 1}`} style={{ width: '300px', height: '300px' }} />
    
    <div>
        {/* los botones */}
        <button type="button" onClick={imagenAnterior}>Anterior</button>
        <button type="button" onClick={imagenSiguiente}>Siguiente</button>
    </div>
    </div>
    
    
    </>

);
}

export default Galeria;