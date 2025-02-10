import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa"; // Importar el ícono de Telegram
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Inicio.routes.css";

const InicioRouters = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const handleNavItemClick = () => {
    setNavExpanded(false);
  };

  return (
    <>
      <Navbar
        expanded={navExpanded}
        expand="lg"
        className="shadow-sm py-3 custom-navbar"
        style={{ backgroundColor: "rgb(34, 36, 47)" }}
      >
        <Container fluid>
          {/* Navbar Toggle button */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setNavExpanded((prev) => !prev)}
            className="custom-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand className="d-flex align-items-center">
              <img
                src="/monaco.jpg"
                width="40"
                height="40"
                className="me-2"
                alt="Logo"
              />
              <span className="fw-bold text-white custom-title">
                ¡Bienvenido a MonacoShop! 🌟
              </span>
              <br></br>
              <br></br>
              <br></br>
            </Navbar.Brand>
            <Nav className="ms-auto">
              {/* Aquí puedes agregar enlaces de navegación si lo deseas */}
            </Nav>
            {/* Botón de Telegram */}
            <Button
              variant="outline-light"
              className="rounded-pill py-2 px-3 border-light d-flex align-items-center position-relative overflow-hidden transition-all custom-telegram-button"
              href="https://t.me/addlist/ic7ljy-1hEVkYTdh"
              target="_blank"
              style={{
                fontWeight: "bold",
                maxWidth: "250px",
                width: "auto",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <FaTelegramPlane className="me-2" size={20} />
              UNIRME A LA COMUNIDAD
            </Button>

            <br></br>

            <Nav className="ms-auto">
              {/* Aquí puedes agregar enlaces de navegación si lo deseas */}
            </Nav>

            {/* Botón de Telegram con imagen personalizada */}
            <Button
              variant="outline-light"
              className="rounded-pill py-2 px-3 border-light d-flex align-items-center position-relative overflow-hidden transition-all custom-telegram-button"
              href="#EasyVictory-1" // Redirección al título de Easy Victory
              style={{
                fontWeight: "bold",
                maxWidth: "250px",
                width: "auto",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <img
                src="/EasyVictory.png"
                alt="Easy Victory"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Easy Victory
            </Button>

            <br></br>

            <Nav className="ms-auto">
              {/* Aquí puedes agregar enlaces de navegación si lo deseas */}
            </Nav>

            {/* Botón de Telegram con imagen personalizada */}
            <Button
              variant="outline-light"
              className="rounded-pill py-2 px-3 border-light d-flex align-items-center position-relative overflow-hidden transition-all custom-telegram-button"
              href="#SpiderTool-4" // Redirección al título de Spider Tool
              style={{
                fontWeight: "bold",
                maxWidth: "250px",
                width: "auto",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <img
                src="/spider.png"
                alt="Spider Tool"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Spider Tool
            </Button>

            <br></br>

            <Nav className="ms-auto">
              {/* Aquí puedes agregar enlaces de navegación si lo deseas */}
            </Nav>

            {/* Botón de Telegram con imagen personalizada */}
            <Button
              variant="outline-light"
              className="rounded-pill py-2 px-3 border-light d-flex align-items-center position-relative overflow-hidden transition-all custom-telegram-button"
              href="#PSH4X-2" // Redirección al título de Spider Tool
              target="_blank"
              style={{
                fontWeight: "bold",
                maxWidth: "250px",
                width: "auto",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <img
                src="/PSH4.png"
                alt="PSH4X"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              PSH4X
            </Button>

            <br></br>

            <Nav className="ms-auto">
              {/* Aquí puedes agregar enlaces de navegación si lo deseas */}
            </Nav>

            {/* Botón de Telegram con imagen personalizada redonda */}
            <Button
              variant="outline-light"
              className="rounded-pill py-2 px-3 border-light d-flex align-items-center position-relative overflow-hidden transition-all custom-telegram-button"
              href="#AimKing-3" // Redirección al título de Spider Tool
              target="_blank"
              style={{
                fontWeight: "bold",
                maxWidth: "250px",
                width: "auto",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <img
                src="/AimKing.jpg"
                alt="AimKing"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              AimKing
            </Button>

            <br></br>

            <Nav className="ms-auto">
              {/* Aquí puedes agregar enlaces de navegación si lo deseas */}
            </Nav>

            {/* Botón con imagen personalizada */}
            <Button
              variant="outline-light"
              className="rounded-pill py-2 px-3 border-light d-flex align-items-center position-relative overflow-hidden transition-all custom-telegram-button"
              href="Snake-5"
              target="_blank"
              style={{
                fontWeight: "bold",
                maxWidth: "250px",
                width: "auto",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <img
                src="/snake.png"
                alt="Snake"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                  objectFit: "contain",
                }}
              />
              Snake
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default InicioRouters;
