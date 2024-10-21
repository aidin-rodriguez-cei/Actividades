import { useState } from "react";


// sfnc + tab
export const Formulario = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        rangoEdad: "",
        ocupacion: ""
    });
    const [errores, setErrores] = useState({
  
    });

    const ListaRangoEdades = [
        {value: 'menor', label: "Menor de 18"},
        {value: 'adulto-joven', label: "18-30"},
        {value: 'adulto', label: "32-60"},
        {value: 'adulto-mayor', label: "Mayor de 60"}
    ]

    const ListaOcupaciones = [
        {value:"estudiante", label:"Estudiante"},
        {value:"empleado", label:"Empleado"},
        {value:"autonomo", label:"Autónomo"},
        {value:"desempleado", label:"Desempleado"},
        {value:"jubilado", label:"Jubilado"}
    ]

    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.nombre) objetoErrores.nombre="Debes ingresar un nombre";
        if(!formData.apellido) objetoErrores.apellido="Debes ingresar un apellido";
        if(!formData.rangoEdad) objetoErrores.rangoEdad="Debes selecciona una edad";

        if(isAdulto && !formData.ocupacion) objetoErrores.ocupacion="Debes seleccionar una ocupación";
        
        console.log(objetoErrores, isAdulto)
        return objetoErrores
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();

        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if(Object.keys(listaErrores).length === 0) {
            console.log("Datos del formulario:", formData);
        } else {
            setErrores(listaErrores);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

       // setFormData({...formData, [name]:value})

       setFormData(prevData => ({...prevData, [name]:value}));

          // limpiar error cuando el usuario empeza a escribir/seleccionar:
    setErrores(prevErrores => ({...prevErrores, [name]:""}))
    }

 

    const isAdulto = ['adulto-joven', 'adulto', 'adulto-mayor'].includes(formData.rangoEdad)


    return ( 
        <>
        <form onSubmit={handleSubmit}>

            {/* input de Nombre */}
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleChange}
                />

                {errores.nombre && 
                <p style={{color:'red'}}>{errores.nombre}</p>
                }
            </div>

            {/* input de Apellido */}
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input 
                type="text" 
                id="apellido" 
                name="apellido" 
                value={formData.apellido} 
                onChange={handleChange}
                />

                {errores.apellido && 
                <p style={{color:'red'}}>{errores.apellido}</p>
                }
            </div>

             {/* select de rango de edad */}
             <div>
                <label htmlFor="rangoEdad">Rango de edad:</label>
                <select 
                name="rangoEdad" 
                id="rangoEdad"
                value={formData.rangoEdad}
                onChange={handleChange}
                >
                    <option value="">Seleccione un rango</option>
                    {
                        ListaRangoEdades.map(rango => (
                            <option key={rango.value} value={rango.value}>{rango.label}</option>
                        ))
                    }
                </select>

                {errores.rangoEdad && 
                <p style={{color:'red'}}>{errores.rangoEdad}</p>
                }
             </div>


             {/* select ocupacion si es adulto*/}
             {isAdulto && (
             <div>
                <label htmlFor="ocupacion">Ocupaciones:</label>
                <select 
                name="ocupacion" 
                id="ocupacion"
                value={formData.ocupacion}
                onChange={handleChange}
                >
                    <option value="">Seleccione un rango</option>
                    {
                        ListaOcupaciones.map(rango => (
                            <option key={rango.value} value={rango.value}>{rango.label}</option>
                        ))
                    }
                </select>

                {errores.ocupacion && 
                <p style={{color:'red'}}>{errores.ocupacion}</p>
                }
             </div>
            )}

            <button type="submit">Enviar</button>
        </form>
        </>
    );
}
