import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/img/Logo.png";

const Barra = () => {
  return (
    <Navbar className="fondo" expand="lg">
      <Container>
        <Navbar.Brand className="logo">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Nav>
          <NavLink
            className={({ isActive }) => (isActive ? "viewActiva" : "view")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "viewActiva" : "view")}
            to="/Pokemones"
          >
            Pokemones
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Barra;
