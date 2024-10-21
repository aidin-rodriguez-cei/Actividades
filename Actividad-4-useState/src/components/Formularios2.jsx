import {useState} from 'react';

// import Select from './forms/Select';
// import Input from './forms/Input';

import {Select, Input} from './forms/FormComponents'

// sfnc
export const Formulario = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        rangoEdad: "",
        ocupacion: ""
    });
    const [errores, setErrores] = useState({});


    const listaRangoEdades = [
        {value: "menor", label: "Menor de 18"},
        {value: "adulto-joven", label: "18-30"},
        {value: "adulto", label: "31-60"},
        {value: "adulto-mayor", label: "Mayor de 60"},
    ];

    const listaOcupaciones = [
        {value:"estudiante" , label: "Estudiante" },
        {value:"empleado" , label: "Empleado" },
        {value:"autonomo" , label: "Autónomo" },
        {value:"desempleado" , label: "Desempleado" },
        {value:"jubilado" , label: "Jubilado" },
    ];

    const validateForm = () => {
        const objetoErrores = {};
        // hacer nuestras comprobaciones.
        if(!formData.nombre) objetoErrores.nombre="Debes ingresar un nombre";
        if(!formData.apellido) objetoErrores.apellido="Debes ingresar un apellido";
        if(!formData.rangoEdad) objetoErrores.rangoEdad="Debes seleccionar un rango";

        if(isAdulto && !formData.ocupacion) objetoErrores.ocupacion="Debes seleccionar una ocupación";

        return objetoErrores;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const listaErrores = validateForm();

        // si existe algún error, guardarlo en errores
        // si no, mostrar resultado por consola
        if( Object.keys(listaErrores).length === 0 ){
            console.log("Datos del formulario:", formData);
        } else {
            setErrores(listaErrores);
        }
    }

    const handleChange = (e) => {
        let {name, value} = e.target;


        if(e.target.type == "checkbox"){
            value = e.target.checked;
            console.log("Checkbox value es:", value);
        }

        // setFormData({ ...formData, [name]:value });
        setFormData( prevData => ({ ...prevData, [name]: value}));

        // Limpiar error cuando el usuario empieza a escribir/seleccionar
        setErrores( prevErrores => ({ ...prevErrores, [name]: ""}))

    }

    const isAdulto = ['adulto-joven', 'adulto', 'adulto-mayor'].includes(formData.rangoEdad);

    return ( 
        <>
        <form onSubmit={handleSubmit}>

            {/* input de Nombre */}
            <Input 
                name="nombre"
                label="Nombre:"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                error={errores.nombre}
                className="textRed"
                debug={true}
            />

            {/* input de apellido  */}
            <Input 
                name="apellido"
                label="Apellido:"
                value="valor1"
                onChange={handleChange}
                error={errores.apellido}
                //debug={true}
            />


            {/* select de rango de edad  */}
            <Select 
                name="rangoEdad"
                //label="Rango de edad:"
                firstOptionLabel="Seleccione un rango"
                value={formData.rangoEdad}
                onChange={handleChange}
                lista={listaRangoEdades}
                error={errores.rangoEdad}
                className=""
                debug={true}
            />


            {/* select de ocupacion si es adulto */}
            {isAdulto && (
                 <Select 
                    name="ocupacion"
                    label="Ocupación:"
                    firstOptionLabel="Seleccione una ocupación"
                    value={formData.ocupacion}
                    onChange={handleChange}
                    lista={listaOcupaciones}
                    // error={errores.ocupacion}
                    // className="card"
                    // debug={true}
                />
            )}

            <button type="submit">Enviar!</button>
        </form>
        </>
     );
}



