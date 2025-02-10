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
    <Navbar.Brand className="d-flex flex-column flex-sm-row align-items-center justify-content-center text-center text-sm-start mb-3 mb-sm-0">
      <img
        src="/monaco.jpg"
        width="50"
        height="50"
        className="me-3 rounded-circle border border-2 border-light mb-2 mb-sm-0"
        alt="Logo"
      />
      <div>
        <span
          className="fw-bold text-white custom-title d-block"
          style={{
            fontSize: "1.5rem", // Ajuste para ser más pequeño en pantallas pequeñas
            letterSpacing: "1px",
            marginBottom: "5px",
          }}
        >
          ¡Bienvenido!
        </span>
        <span
          className="text-muted"
          style={{
            fontSize: "1rem",
            fontWeight: "400",
          }}
        >
          Tu tienda para hacks de 8 Ball Pool.
        </span>
      </div>
    </Navbar.Brand>

    {/* Botones de Telegram y otros */}
    <Nav className="ms-auto mb-3 mb-sm-0">
      <Button
        variant="outline-light"
        className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button mb-2 mb-sm-0"
        href="https://t.me/addlist/ic7ljy-1hEVkYTdh"
        target="_blank"
        style={{
          fontWeight: "bold",
          maxWidth: "250px", // Iguala el ancho de los demás botones
          width: "auto",
          paddingLeft: "15px",
          paddingRight: "15px",
          backgroundColor: "#007AFF",
          color: "#FFFFFF",
          borderRadius: "50px",
          boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
          transition: "all 0.3s ease",
          marginRight: "10px", // Espacio a la derecha de los botones
          marginBottom: "10px", // Espacio debajo
          textTransform: "none", // Evita el texto en mayúsculas
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#005BB5";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 91, 181, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#007AFF";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 122, 255, 0.3)";
        }}
      >
        <FaTelegramPlane className="me-2" size={20} />
        Join the community
      </Button>

      {/* Botón Easy Victory */}
      <Button
        variant="outline-light"
        className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button mb-2 mb-sm-0"
        href="#EasyVictory-1"
        style={{
          fontWeight: "bold",
          maxWidth: "250px",
          width: "auto",
          paddingLeft: "15px",
          paddingRight: "15px",
          backgroundColor: "#007AFF",
          color: "#FFFFFF",
          borderRadius: "50px",
          boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
          transition: "all 0.3s ease",
          marginRight: "10px", // Espacio a la derecha de los botones
          marginBottom: "10px", // Espacio debajo
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#005BB5";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 91, 181, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#007AFF";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 122, 255, 0.3)";
        }}
      >
        <img
          src="/EasyVictory.png"
          alt="Easy Victory"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        Easy Victory
      </Button>

      {/* Botón Spider Tool */}
      <Button
        variant="outline-light"
        className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button mb-2 mb-sm-0"
        href="#SpiderTool-4"
        style={{
          fontWeight: "bold",
          maxWidth: "250px",
          width: "auto",
          paddingLeft: "15px",
          paddingRight: "15px",
          backgroundColor: "#007AFF",
          color: "#FFFFFF",
          borderRadius: "50px",
          boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
          transition: "all 0.3s ease",
          marginRight: "10px", // Espacio a la derecha de los botones
          marginBottom: "10px", // Espacio debajo
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#005BB5";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 91, 181, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#007AFF";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 122, 255, 0.3)";
        }}
      >
        <img
          src="/spider.png"
          alt="Spider Tool"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
        />
        Spider Tool
      </Button>

      {/* Botón PSH4X */}
<Button
  variant="outline-light"
  className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button mb-2 mb-sm-0"
  href="#PSH4X-2" // Aquí usas el ID del contenedor
  style={{
    fontWeight: "bold",
    maxWidth: "250px",
    width: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    backgroundColor: "#007AFF",
    color: "#FFFFFF",
    borderRadius: "50px",
    boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
    transition: "all 0.3s ease",
    marginRight: "10px", // Espacio a la derecha de los botones
    marginBottom: "10px", // Espacio debajo
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#005BB5";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 91, 181, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#007AFF";
    e.target.style.boxShadow = "0 4px 8px rgba(0, 122, 255, 0.3)";
  }}
>
  <img
    src="/PSH4.png"
    alt="PSH4X"
    style={{ width: "20px", height: "20px", marginRight: "10px" }}
  />
  PSH4X
</Button>


      {/* Botón AimKing */}
<Button
  variant="outline-light"
  className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button mb-2 mb-sm-0"
  href="#AimKing-3" // Redirige a la sección con el id AimKing-3
  style={{
    fontWeight: "bold",
    maxWidth: "250px",
    width: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    backgroundColor: "#007AFF",
    color: "#FFFFFF",
    borderRadius: "50px",
    boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
    transition: "all 0.3s ease",
    marginRight: "10px", // Espacio a la derecha de los botones
    marginBottom: "10px", // Espacio debajo
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#005BB5";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 91, 181, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#007AFF";
    e.target.style.boxShadow = "0 4px 8px rgba(0, 122, 255, 0.3)";
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


      {/* Botón Snake */}
      <Button
  variant="outline-light"
  className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button mb-2 mb-sm-0"
  href="#Snake-5"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("Snake-5").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  target="_blank"
  style={{
    fontWeight: "bold",
    maxWidth: "250px",
    width: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    backgroundColor: "#007AFF",
    color: "#FFFFFF",
    borderRadius: "50px",
    boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
    transition: "all 0.3s ease",
    marginRight: "10px", 
    marginBottom: "10px", 
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#005BB5";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 91, 181, 0.4)";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#007AFF";
    e.target.style.boxShadow = "0 4px 8px rgba(0, 122, 255, 0.3)";
  }}
>
  <img
    src="/snake.png"
    alt="Snake"
    style={{ width: "25px", height: "25px", marginRight: "10px" }}
  />
  Snake
</Button>

    </Nav>
  </Navbar.Collapse>
</Container>

      </Navbar>
    </>
  );
};

export default InicioRouters;
