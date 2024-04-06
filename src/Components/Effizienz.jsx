import React from "react";
import "../Effizienz.css";
import backgroundImage from "../Assets/Maskgroup1.png";

function Effizienz() {
  return (
    <div
      className="Effizienz"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="Effizienz-image">
        <div className="Effizienz-screen">
          <h1>Effizienz</h1>
          <p>
            In einer sich ständig wandelnden Geschäftswelt ist
            <br /> Effizienz der Schlüssel zum Erfolg. Bei uns bieten wir
            <br /> maßgeschneiderte Automatisierungslösungen, um
            <br /> Ihre operative Geschäftsprozesse zu optimieren und
            <br /> Ihr Unternehmen auf die nächste Stufe zu heben.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Effizienz;
