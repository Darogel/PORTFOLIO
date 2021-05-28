import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Works() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Sobre Mí"],
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          <h1><span ref={textRef}></span></h1>
          <span className="textO">
            Hola, mi nombre es Darwin Rogel, desarrollador de software. En la
            actualidad resido en Ecuador, principalmente me enfoco en trabajar
            con tecnologías del lado del Backend y Frontend. Además, debo
            mencionar que he realizado proyectos en el ámbito de infraestructura
            tecnológica.
          </span>
          <span className="textT">
            Me considero una persona autodidacta y constantemente me gusta
            adquirir nuevos conocimientos, en mi tiempo libre disfruto de la
            lectura, escuchar música y realizar investigación.
          </span>
          <h2>Tecnologías</h2>

          <div className="container">
            <div className="item">
              <img src="technologies/html.svg" alt="" />
              <h3>HTML</h3>
            </div>
            <div className="item">
              <img src="technologies/css.svg" alt="" />
              <h3>CSS</h3>
            </div>
            <div className="item">
              <img src="technologies/js.svg" alt="" />
              <h3>JavaScript</h3>
            </div>
            <div className="item">
              <img src="technologies/react.svg" alt="" />
              <h3>React</h3>
            </div>

            <div className="item">
              <img src="technologies/python.svg" alt="" />
              <h3>Python</h3>
            </div>
            <div className="item">
              <img src="technologies/java1.svg" alt="" />
              <h3>Java</h3>
            </div>
            <div className="item">
              <img src="technologies/flutter.svg" alt="" />
              <h3>Flutter</h3>
            </div>
            <div className="item">
              <img src="technologies/dart.svg" alt="" />
              <h3>Dart</h3>
            </div>
            <div className="item">
              <img src="technologies/php.svg" alt="" />
              <h3>PHP</h3>
            </div>
            <div className="item">
              <img src="technologies/database.svg" alt="" />
              <h3>SQL</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/persona.png" />
        </div>
      </div>
    </div>
  );
}
