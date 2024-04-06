import React from "react";
import "../Integration.css";
import backgroundImage from "../Assets/Maskgroup02.png";

function Integration() {
  return (
    <div
      className="Integration"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="Integration-image">
        <div className="Integration-screen">
          <h1>Integration</h1>

          <p>
            In einer sich ständig wandelnden Geschäftswelt ist
            <br /> Effizienz der Schlüssel zum Erfolg. Bei uns bieten
            <br /> wir maßgeschneiderte Automatisierungslösungen,
            <br /> um Ihre operative Geschäftsprozesse zu optimieren
            <br /> und Ihr Unternehmen auf die nächste Stufe zu heben.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Integration;
