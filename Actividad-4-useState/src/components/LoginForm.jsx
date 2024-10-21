import { useState } from "react";

export const LoginForm = () => {

    // Definir los estados 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

     // Cambios en el input email
    const handleEmailChange = (e) => {
        e.target.value();
    }

    // Cambios en el input password
    const handlePasswordChange = (e) => {
        e.target.value();
    }

    // Cambios en el input checkbox
        const handleAcceptedTermsChange = (e) => {
            e.target.checked();
        }         


    // Envío del form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('AcceptedTerms:', acceptedTerms);
    };

    return ( 
        <>
        <form onSubmit={handleSubmit}>

            {/* input de Email */}
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={handleEmailChange}
                />
            </div>


            {/* input de Password */}
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={handlePasswordChange}
                />
            </div>


            {/* input de Aceptar terminos */}
            <div>
                <label htmlFor="acceptedTerms">Acepto los terminos y condiciones</label>
                <input 
                type="checkbox" 
                id="acceptedTerms" 
                name="acceptedTerms" 
                value={acceptedTerms} 
                onChange={handleAcceptedTermsChange}
                />
            </div>


            <button type="submit">Ingresar</button>
        </form>
        </>
    );
};

export default LoginForm;