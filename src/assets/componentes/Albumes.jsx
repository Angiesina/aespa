import React, { useState } from 'react';
import './albumes.css';

const Albumes = () => {
  // estado para controlar la visibilidad de la información
  const [visible, setVisible] = useState(false);

  // función para mostrar la informacion
  const mostrar = () => {
    setVisible(!visible);
  };

  return (
    <div className="fotos-album">
      <h1>La Música de aespa</h1>
      <div className="imagenes-y-boton">
      {/* galeria de imagenes de albumes */}
        <div className="imagenes">
          <img src="https://i.pinimg.com/736x/03/2d/bc/032dbc0179dd7aac670db08222d92920.jpg" alt="blackmamba" />
          <img src="https://i.pinimg.com/736x/a5/96/e7/a596e7e8759b694c54b38d0a911705e2.jpg" alt="savage" />
          <img src="https://i.pinimg.com/736x/4a/94/21/4a94210569059bcf1409a94a9d18dbc1.jpg" alt="girls" />
          <img src="https://i.pinimg.com/736x/0d/92/a6/0d92a624468559a3acce5fbb01c0abb8.jpg" alt="supernova" />
          <img src="https://i.pinimg.com/736x/c6/7b/62/c67b622574eb1a672448288f803f2238.jpg" alt="dreams" />
          <img src="https://i.pinimg.com/736x/d5/62/75/d56275fcfdcc455a93188b848fc2554a.jpg" alt="whiplash" />
        </div>
      {/* boton que cambia dependiendo del use state, cambia si oculta o muestra*/}
        <button onClick={mostrar}>
          {visible ? 'Ocultar' : 'Mostrar'} información sobre su música
        </button>
      </div>
    {/* si el useState devuelve un true, muestra la informacion */}
      {visible && (
        <div>
          <h1>Álbumes y Canciones</h1>
          <div className="blackmamba">
            <h3>Black Mamba</h3>
            <p>
              "Black Mamba" es el impresionante sencillo debut de aespa, lanzado
              el 17 de noviembre de 2020. La canción combina ritmos electrónicos,
              voces poderosas y una narrativa única que introduce el universo virtual
              del grupo. Su letra habla sobre una amenaza misteriosa llamada "Black
              Mamba" que interfiere con la conexión entre aespa y sus avatares virtuales,
              simbolizando desafíos y obstáculos. Su potente coreografía y un video musical visualmente impresionante capturaron rápidamente la atención global, 
              estableciendo a aespa como una fuerza innovadora en el K-pop.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZeerrnuLi5E" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className='supernova'>
            <h3>Supernova</h3>
              <p>
              Supernova es una canción energética de aespa que fue lanzada como parte de su discografía en 2024. Con un sonido futurista y dinámico,
              "Supernova" refleja el estilo característico del grupo, fusionando la música electrónica con elementos de K-pop y un toque de poderosas voces. La letra de la canción habla de un estallido de energía, comparando a las integrantes de aespa con una supernova, una explosión cósmica llena de fuerza y luz. El tema captura la esencia de la lucha interna y la superación personal, 
              mientras sigue explorando el concepto de interacción entre el mundo real y virtual del grupo.
              </p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/phuiiNCxRMg?si=UoyPMzaIqglgBHQX" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className='spicy'>
          <h3>Spicy</h3>
          <p>
          "Spicy" de aespa es una canción energética y vibrante que forma parte de su primer álbum de estudio "Girls", lanzado en 2022. 
          Con un ritmo contagioso y una mezcla de sonidos electrónicos y pop, "Spicy" refleja la confianza y actitud audaz del grupo. La letra de la canción expresa una poderosa afirmación de individualidad y fuerza, con aespa declarando su presencia y su capacidad para conquistar cualquier desafío.
          La melodía pegajosa y el potente rap se combinan para crear una atmósfera de empoderamiento y diversión.
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Os_heh8vPfs?si=4klsWdzVHmdMxFPC" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Albumes;
