import React from 'react';
import './Secciones.css';

function Secciones() {
  return (
    <>
      <div className='Barra'>
        <ul>
          <li><a href="#Karina">Karina</a></li>
          <li><a href="#Winter">Winter</a></li>
          <li><a href="#Giselle">Giselle</a></li>
          <li><a href="#Ningning">Ningning</a></li>
        </ul>
      </div>
      <div className="Fotos">
        <img src="https://i.pinimg.com/736x/83/36/85/833685b7eebf80ea04c87d2307f12446.jpg" alt="Karina"/>
        <img src="https://i.pinimg.com/736x/a2/31/bb/a231bbf26c894a37687a2c354316d9db.jpg" alt="Winter"/>
        <img src="https://i.pinimg.com/736x/12/76/c9/1276c93a60527212b2bb98be05d6cb3a.jpg" alt="Giselle"/>
        <img src="https://i.pinimg.com/736x/79/c7/5e/79c75ef5b15811c1b349f9f80611800e.jpg" alt="Ningning"/>
      </div>
      <div className='Karina' id="Karina">
        <h1>Karina</h1>
        <p>Karina (nombre real: Yoo Ji-min, 유지민) es una cantante, rapera y bailarina surcoreana nacida el 11 de abril de 2000 en Suwon, Corea del Sur. Es conocida por ser la líder y una de las integrantes más destacadas del grupo femenino aespa, bajo la agencia SM Entertainment. Debutó con aespa el 17 de noviembre de 2020 con el sencillo digital "Black Mamba", que tuvo un éxito inmediato. Además de su talento vocal y habilidades como rapera, Karina es reconocida por su increíble presencia escénica y talento en la danza, convirtiéndola en una de las performers más carismáticas de la cuarta generación del K-pop. Con su carisma, liderazgo y talento multifacético, Karina continúa siendo una figura influyente en la industria del K-pop.</p>
        <img src="https://i.pinimg.com/736x/7a/80/30/7a80305c8c92915388db9306af91d270.jpg" alt="Karina"/>
        <a href="https://youtu.be/U1_0Vc-9mNw?si=9dxhuqq_HXjkTWqO"><button>UP (KARINA SOLO)</button></a>
      </div>

      <div className='Winter' id="Winter">
        <h1>Winter</h1>
        <p>Winter (nombre real: Kim Min-jeong, 김민정) es una cantante y bailarina surcoreana nacida el 1 de enero de 2001 en Yangsan, Corea del Sur. Es conocida por ser una de las vocalistas principales y bailarinas del grupo femenino aespa, bajo la agencia SM Entertainment. Debutó junto a aespa el 17 de noviembre de 2020 con el sencillo "Black Mamba", el cual tuvo un impacto significativo a nivel global. Winter rápidamente destacó por su voz dulce y poderosa, así como por su precisión y elegancia en la danza. Su talento vocal y escénico le han permitido ganarse un lugar como una de las artistas más admiradas de la cuarta generación del K-pop. Con su carisma encantador, talento versátil y personalidad amable, Winter se ha convertido en una de las favoritas de los fans de aespa y una figura importante dentro del K-pop.</p>
        <img src="https://i.pinimg.com/736x/10/8a/a7/108aa770e12a1e052388158fd9f1770a.jpg" alt="Winter"/>
        <a href="https://youtu.be/ZKnX1ewd1DA?si=L1oROw1XOEMmfTzI"><button>SPARK (WINTER SOLO)</button></a>
      </div>

      <div className="Giselle" id="Giselle">
        <h1>Giselle</h1>
        <p>Giselle (nombre real: Uchinaga Aeri, うちながえり) es una cantante y rapera nacida el 30 de octubre de 2000 en Tokio, Japón. Es conocida por ser la rapera principal y una de las voces destacadas del grupo femenino aespa, bajo la agencia SM Entertainment. Giselle debutó con aespa el 17 de noviembre de 2020 con el sencillo "Black Mamba". Gracias a su talento en el rap y su dominio de varios idiomas, como el japonés, coreano e inglés, ha logrado destacar por su versatilidad musical y carisma único. Giselle es admirada por su estilo distintivo, su fluidez en idiomas y su capacidad para conectar con fans internacionales.</p>
        <img src="https://i.pinimg.com/736x/44/7e/6e/447e6e047c99bebb24bc80a39c022170.jpg" alt="Giselle"/>
        <a href="https://youtu.be/hz4kvS7_iR8?si=BAvlzGZPayU3D0xX"><button>DOPAMINE (GISELLE SOLO)</button></a>
      </div>

      <div className='Ningning' id="Ningning">
        <h1>Ningning</h1>
        <p>Ningning (nombre real: Ning Yizhuo, 宁艺卓) es una cantante y bailarina china nacida el 23 de octubre de 2002 en Harbin, China. Es conocida por ser la vocalista principal de aespa, el grupo femenino de SM Entertainment que debutó en 2020. Ningning se unió a SM Entertainment como trainee después de ser seleccionada a través de audiciones en China. Debutó oficialmente con aespa el 17 de noviembre de 2020 con el sencillo "Black Mamba". Desde su debut, ha sido reconocida por su impresionante capacidad vocal, que abarca una amplia gama de notas y su habilidad para expresar emociones a través de su canto. Además de su talento vocal, Ningning ha sido elogiada por su presencia escénica y su estilo único, lo que la ha llevado a convertirse en una de las figuras más destacadas de aespa en la industria del K-pop.</p>
        <img src="https://i.pinimg.com/736x/68/6f/2c/686f2ced1a2f1d9daac7f0471c809186.jpg" alt="Ningning"/>
        <a href="https://youtu.be/tkfO6s64ucY?si=K1oxRkrrytGdup7q"><button>BORED (NINGNING SOLO)</button></a>
      </div>
    </>
  );
}

export default Secciones;