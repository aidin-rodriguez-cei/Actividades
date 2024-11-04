import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import '../css/catalogo.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    terms: false,
    image: "https://picsum.photos/200"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData, // spread operador
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/admin"); //me voy a admin
  };

  return (
    <div className="container">
      <h2>Registrate</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Tu nombre"
          onChange={handleChange}
        />

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

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Acepto todos los terminos y condiciones
        </label>

        <button type="submit">Registrame</button>
      </form>
    </div>
  );
};

export default Registro;
