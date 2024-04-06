import React from "react";
import "../Innovation.css";
import backgroundImage from "../Assets/Maskgroup.png";
import background01 from "../Assets/background01.png";

function Innovation() {
  return (
    <div
      className="innovation"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section className="innovation-image">
        <div className="innovation-screen">
          <h1>Innovation</h1>
          <p>
            Bereit, Ihren Geschäftsprozess zu optimieren und
            <br /> Ihre Produktivität zu steigern? Tauchen Sie ein in <br /> die
            Welt der Automatisierung mit LIV Innovation,
            <br /> Ihrem Experten für maßgeschneiderte, innovative <br />{" "}
            Softwarelösungen.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Innovation;
