import React from "react";
import logo from "../assets/images/logo_moneda.png";
/* import CircularText from "../assets/Presentation/CircularText"; */

function Presentation() {
  return (
    <section className="presentation">
      <div className="presentation-container">
        <img src={logo} alt="Logo Código Fidel" className="presentation-logo" />
        <div className="presentation-content">
          <h1 className="presentation-title">
            Cooperativa de Trabajadores Informáticos
          </h1>
          <h2 className="presentation-subtitle">"Código Fidel"</h2>
          <p className="presentation-description">
            Somos una cooperativa dedicada al desarrollo de software y
            soluciones tecnológicas, comprometida con el trabajo colaborativo y
            la excelencia técnica. Nuestro equipo de profesionales trabaja
            conjuntamente para transformar ideas en soluciones digitales que
            impulsan el crecimiento de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
