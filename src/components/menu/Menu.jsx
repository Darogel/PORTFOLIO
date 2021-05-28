import "./menu.scss";
import { Home, RecentActors, ContactMail, Code} from "@material-ui/icons";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li  onClick={() => setMenuOpen(false)}>
          <Home className="icon" /><a href="#intro">Inicio</a>
        </li>
        <li  onClick={() => setMenuOpen(false)}>
          <RecentActors className="icon" /><a href="#about">Sobre Mí</a>
        </li>
        <li  onClick={() => setMenuOpen(false)}>
          <Code className="icon"/><a href="#portfolio">Proyectos</a>
        </li>
      </ul>
    </div>
  );
}
