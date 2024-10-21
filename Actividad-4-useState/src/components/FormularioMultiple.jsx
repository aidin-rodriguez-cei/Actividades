import { useState } from "react"

const FormularioMultiple = () => {

    const [paso, setPaso] = useState(1);
    const [formData, setFormData] = useState({
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Enviando Formulario")
    }

    const pasoAnterior = () =>{
        console.log("Anterior")
        setPaso(() => Math.max(paso -1,1));
    }

    const pasoSiguiente = () =>{
        console.log("Siguiente")
        // incrementa el paso, pero nunca se pasa de 3 pasos
        setPaso(() => Math.min(paso +1,3));
    }

    const renderizarPasos= () => {
        switch(paso){
            case 1: return < Paso1 data={formData} setData={setFormData}/>;
            case 2: return < Paso2 data={formData} setData={setFormData}/>;
            case 3: return < Paso3 data={formData} setData={setFormData}/>;
            default: return null;
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {/* los inputs */}
            {renderizarPasos()}

            {/* los botones */}
           {paso > 1 && (
            <button onClick={pasoAnterior}>Anterior</button>
        )}
        {paso < 4 && (
            <button onClick={pasoSiguiente}>Siguiente</button>
        )}
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}

const Paso1 = ({data, setData}) => (
    <div>
        <h3>Página 1</h3>
        <input type="text" 
        value={data.nombre}
        onChange={(e)=> setData({...data,nombre: e.target.value})}
        placeholder="Nombre"
        />
    </div>
)

const Paso2 = ({data, setData}) => (
    <div>
        <h3>Página 2</h3>
        <input type="text" 
        value={data.nombre}
        onChange={(e)=> setData({...data,nombre: e.target.value})}
        placeholder="Apellido"
        />
    </div>
)

const Paso3 = ({data, setData}) => (
    <div>Paso1</div>
)

export default FormularioMultiple;