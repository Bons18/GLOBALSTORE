import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa"; // Importar el ícono de Telegram
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Inicio.routes.css'; 

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
                style={{ backgroundColor: 'rgb(34, 36, 47)' }}
            >
                <Container fluid>
                    {/* Navbar Toggle button */}
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setNavExpanded(prev => !prev)}
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
                                fontWeight: 'bold', 
                                maxWidth: '250px',
                                width: 'auto',
                                paddingLeft: '15px',
                                paddingRight: '15px'
                            }}
                        >
                            <FaTelegramPlane className="me-2" size={20} />
                            UNIRME A LA COMUNIDAD
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default InicioRouters;
