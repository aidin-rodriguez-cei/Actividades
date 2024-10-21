export const Select = ({name, label, firstOptionLabel, value, onChange, lista=[{value:0, label:"no hay items"}], error, className, debug}) => {
    return (
        <div className={className}>
            {label && <label htmlFor={name}>{label}</label>}
            <select 
                name={name} 
                id={name}
                value={value}
                onChange={onChange}
                >
                    <option value="">{firstOptionLabel}</option>
                    {
                        lista.map( ({value, label}) => (
                            <option key={value} value={value}>{label}</option>
                        ))
                    }
            </select>
            {error &&  <p style={ {color:'red'} }>  {error}</p> }
            {debug && <span style={{color:'orange'}}>V: {JSON.stringify(value)}</span>}
        </div>
    )
}

export const Input = ({name, label, type="text", value, onChange, error, className, debug=false}) =>{
    return (
        <div className={className}>
            <label>
                {label}
                <input 
                    type={type} 
                    name={name}
                    value={value} 
                    onChange={onChange}
                />
            </label>
            {error &&  <p style={ {color:'red'} }>  {error}</p> }
            {debug && <span style={{color:'orange'}}>V: {JSON.stringify(value)}</span>}
        </div>
    )
}