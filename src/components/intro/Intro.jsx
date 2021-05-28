import "./intro.scss";
import Button from "@material-ui/core/Button";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/persona.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hola, soy</h2>
          <h1>Darwin Rogel</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
          <div className="curriculum">
            <Button
              variant="contained"
              color="primary"
              className="button">
              Descargar CV
            </Button>
          </div>
          <div className="imagenRedes">
            <a href="https://twitter.com/darogel96" className="imagenT">
              <img src="assets/twitter.png" className="imagent" />
            </a>
            <a href="https://www.linkedin.com/in/darwin-alexander-rogel-rivera-9243021ab/" className="imagenL">
              <img src="assets/linkedin.png" className="imagenl" />
            </a>
            <a href="https://github.com/Darogel" className="imagenG">
              <img src="assets/github.png" className="imageng" />
            </a>
          </div>
        </div>
        <a href="#about" className="imagenD">
          <img src="assets/down.png" className="imagend" />
        </a>
      </div>
    </div>
  );
}
