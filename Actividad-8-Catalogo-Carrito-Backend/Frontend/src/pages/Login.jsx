import React, { useState } from 'react';
import { useUser } from '@/hooks/useUser';
import '../css/catalogo.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    image: "https://picsum.photos/200"
  });

  const {login} = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    login(formData)
  };

  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
        <input
          type="email"
          name="username"
          id="username"
          value={formData.username}
          placeholder="Usuario"
          onChange={handleChange}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          placeholder="Tu contraseña"
          onChange={handleChange}
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
