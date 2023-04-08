import React from "react";
import { useState } from "react";

const Form = () => {
  const [alert, setAlert] = useState(null);
  
  function submit(event) {
    event.preventDefault();

    const nombre = event.target.nombre.value.trim();
    const email = event.target.email.value.trim();

    if (nombre.length < 6 || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ){
      setAlert(`Por favor, verfique su información`)
      return;
    }
    setAlert(
      `Gracias ${nombre}, te contactaremos lo antes posible vía correo electrónico.`
    );
  }
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Enviar</button>
        
      </form>
      {alert && <p>{alert}</p>}
    </div>
  );
};

export default Form;