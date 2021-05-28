import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  desktopPortfolio,
} from "../../data";
import Button from "@material-ui/core/Button";
import { init } from "ityped";
import { useRef } from "react";

export default function Portfolio() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Proyectos"],
    });
  }, []);
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Destacado",
    },
    {
      id: "web",
      title: "Aplicación Web",
    },
    {
      id: "mobile",
      title: "Aplicación Móvil",
    },
    {
      id: "desktop",
      title: "Aplicación de Escritorio",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "desktop":
        setData(desktopPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1><span ref={textRef}></span></h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected == item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/Logito.png" className="left" alt="" />
              <a href={d.dir} className="logo">
                <img src="assets/github.png" className="imgLogo" />
              </a>
            </div>
            <div className="nameP">
              <h3>{d.name}</h3>
            </div>
            <div className="center">{d.desc}</div>
            <div className="tag">
              <h4>{d.title}</h4>
              <Button size="small" variant="contained" color="primary">
                {d.tag}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
