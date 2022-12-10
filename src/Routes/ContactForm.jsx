import React from "react";
import { useState } from "react";
import ButtonUnstyled from '@mui/base/ButtonUnstyled';


const ContactForm = () => {

  const [fullName, setFullName] = useState({ campo: '', valido: null });
  const [email, setEmail] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const onChange = (e) => {
    setFullName({ ...fullName, campo: e.target.value })
  }
  const onChange2 = (e) => {
    setEmail({ ...email, campo: e.target.value })
  }
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }
  const validacion = () => {
    if (expresiones.nombre.test(fullName.campo)) {
      setFullName({ ...fullName, valido: 'true' })
    } else {
      setFullName({ ...fullName, valido: 'false' })

    }
  }
  const validacion2 = () => {
    if (expresiones.correo.test(email.campo)) {
      setEmail({ ...email, valido: 'true' })
    } else {
      setEmail({ ...email, valido: 'false' })
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (email.valido === 'true' && fullName.valido === 'true') {
      cambiarFormularioValido(true)
      let validacionTrue = document.getElementById("validacionVerdadera");
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "";
      validacionTrue.innerHTML = "<p>Gracias " + fullName.campo + ", te contactaremos cuanto antes via mail. </p>";
    } else {
      cambiarFormularioValido(false)
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "<p>Algo salió mal, verifique sus datos e ingréselos nuevamente.</p>";
      let validacionTrue = document.getElementById("validacionVerdadera");
      validacionTrue.innerHTML = "";
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>¿Quieres más informacion?</h1>
        <h6>Completa los campos y nosotros te contactaremos.</h6>
        <label htmlFor="nombreApellido"></label>
        <input
          title="nameInput"
          type="text"
          id="nombreApellido"
          placeholder="Nombre y apellido"
          value={fullName.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
        />
        <label htmlFor="email"></label>
        <input

          type="email"
          id="email"
          placeholder="Email"
          value={email.campo}
          onChange={onChange2}
          onKeyUp={validacion2}
          onBlur={validacion2}
        />        
        <button type="submit" >Enviar</button>
      </form>      
      <div id="validacionFalsa"></div>
      <div id="validacionVerdadera"></div>
    </div>
  );
};

export default ContactForm;