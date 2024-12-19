import React from 'react';
import './inicio.css'; 

const Inicio = () => {
  return (
    <>
      <h1>æspa big girls making money!</h1>
      
      {/* información principal */}
      <div className="contenedor-inicio">
        <div className="texto">
          <p>
            Aespa es un grupo femenino de K-pop formado por SM Entertainment, debutando el 17 de noviembre de 2020. El nombre "Aespa" proviene de la combinación de "æ", que representa la palabra "Avatar X Experience", y "Aspect", lo que simboliza la conexión entre los miembros y sus avatares virtuales en un mundo paralelo. Este concepto de realidad virtual es uno de los elementos distintivos del grupo.
          </p>
          <p>
            Desde su debut, Aespa se ha destacado por su estilo musical innovador, que mezcla géneros como el EDM, pop y hip-hop, con un enfoque en la tecnología y el concepto de "metaverso".
          </p>
          <p>
            Aespa es pionero en un concepto metaverso. Cada miembro tiene una versión virtual (llamadas "æ") que coexiste con ellas en un mundo ficticio llamado Kwangya. Sus avatares están impulsados por inteligencia artificial y son clave en la narrativa de su universo.
          </p>
          <div className='video'>
          <iframe width="560"  height="315" src="https://www.youtube.com/embed/jWQx2f-CErU?si=YeUcX-mCsWiO05vx" title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
