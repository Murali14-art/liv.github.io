import React from "react";
import "../App.css";
import Liv from "../Assets/LIV.png";
import EN from "../Assets/LanguageToggle.png";
function Home() {
  return (
    <section className="overlay">
      <div>
        <header className="main-header">
          <div className="logo">
            <img src={Liv} alt="Logo" />
          </div>
          <nav className="nav-links">
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                {" "}
                <img src={EN} alt="Logo" />
              </li>
            </ul>
          </nav>
        </header>

        <div className="container">
          <h1 className="Heading">LIV Innovation</h1>
          <p className="para">
            Ihrem Partner für innovative Automatisierungslösungen
          </p>
          <p className="para">
            Entdecken Sie, wie unsere Software Ihr
            <br /> Unternehmen revolutionieren kann.
          </p>
          <button type="button" className="btn btn--primary">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
