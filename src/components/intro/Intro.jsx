import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/persona.png" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Darwin Rogel</h1>
          <h3>Software Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png"/>
        </a>
      </div>
    </div>
  );
}
