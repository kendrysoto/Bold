import React from "react";
import { Wrapperheader } from "./Header.styled";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Wrapperheader>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navigation">
          <ul className="navigation-item">Mi negocio</ul>
          <ul className="navigation-item">Ayuda</ul>
        </nav>
      </div>
    </Wrapperheader>
  );
};

export default Header;
