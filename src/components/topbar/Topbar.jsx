import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"></a>
          <div className="itemContainer">
            <Person />
            <span>+593 988676813</span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>darogel96@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
