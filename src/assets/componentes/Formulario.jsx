import { useState } from "react";
import './formulario.css';

function Formulario() {
    const [nombreUsuario, setNombreUsuario] = useState(""); // estado para el nombre de usuario
    const [correo, setCorreo] = useState(""); // estado para el correo del usuario
    const [contraseña, setContraseña] = useState(""); // estado para la contraseña
    const [confirmarContraseña, setConfirmarContraseña] = useState(""); // estado para confirmar contraseña

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Nombre de usuario:", nombreUsuario);
        console.log("Correo electrónico: ", correo);
        console.log("Contraseña:", contraseña);
        console.log("Confirmar contraseña:", confirmarContraseña);

        // verificar si algún campo está vacío
        if (nombreUsuario === "" || contraseña === "" || confirmarContraseña === "" || correo === "") {
            alert("Todos los campos deben ser llenados.");
            return;
        }

        // verificar si la contraseña tiene menos de 8 caracteres
        if (contraseña.length < 8) {
            alert("La contraseña debe contener al menos 8 caracteres.");
            return;
        }

        // verificar si las contraseñas coinciden
        if (contraseña !== confirmarContraseña) {
            alert("Las contraseñas no coinciden. Intente de nuevo.");
            return;
        }
        // mensaje de que se realizó el registro
        alert(`¡Registro exitoso! Bienvenido, ${nombreUsuario}, ahora recibirás noticias sobre aespa al correo: ${correo}. Gracias por registrarte.`);
    };

    return (
        <section>
            <h1>¡Regístrate para recibir noticias sobre aespa!</h1>
            <div className="contenedor">
                {/* formulario de registro donde con el onChange guarda el valor de cada variable */}
                <form className="contraseña" onSubmit={handleSubmit}>
                    <label htmlFor="nombreUsuario">Nombre de usuario:</label>
                    <input type="text" placeholder="Proporcione su nombre de usuario:" name="nombreUsuario" id="nombreUsuario" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)}/>

                    <label htmlFor="correo">Correo electrónico:</label>
                    <input type="email" placeholder="Proporcione su correo electrónico:" name="correo" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />

                    
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input id="contraseña" type="password" placeholder="Proporcione su contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)}/>

                    <label htmlFor="confirmarContraseña">Confirmar contraseña:</label>
                    <input id="confirmarContraseña" type="password" placeholder="Repetir contraseña" value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)}/>

                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </section>
    );
}

export default Formulario;
