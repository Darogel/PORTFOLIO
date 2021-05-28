import { Button } from "@material-ui/core";
import { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [message, setMessage] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault(true);
    }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="rigth">
        <h2>Contactame.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Mensaje"></textarea>
          <Button variant="contained" color="primary" className="button" type="submit">
            Enviar
          </Button>
          {message && <span className="textSpan">Gracias, responderé lo antes posible</span>}
        </form>
      </div>
    </div>
  );
}
