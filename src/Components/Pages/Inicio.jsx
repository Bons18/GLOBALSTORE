import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { FaChevronRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import "../../styles/inicio.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const productColors = {
  "Easy Victory": "rgb(227, 165, 25)", // Naranja dorado
  "PSH4X Original": "rgb(127, 197, 236)", // Azul claro
  "AimKing Original": "rgb(129, 6, 9)", // Rojo oscuro
  "Spider Tool Original": "rgb(244, 124, 23)",
};

const ServiceCard = ({ image, title, description, onMoreInfo }) => (
  <motion.div
    className="col-xs-12 col-md-4 mb-4"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Card
      className="h-100 shadow-sm"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0E0E0" }}
    >
      <Card.Body className="d-flex flex-column align-items-center text-center">
        <img
          src={image}
          alt={title}
          style={{ width: "48px", height: "48px" }}
          className="mb-3"
        />
        <Card.Title
          className="fw-bold"
          style={{ color: productColors[title] || "#007AFF" }}
        >
          {title}
        </Card.Title>
        <Card.Text style={{ color: "#757575" }}>{description}</Card.Text>
        <Button
          onClick={() => onMoreInfo(title)}
          style={{
            borderColor: "#007AFF",
            color: "#FFFFFF",
            backgroundColor: "#007AFF",
            borderRadius: "12px",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            textTransform: "uppercase",
            boxShadow: "0 4px 6px rgba(0, 122, 255, 0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#005BB5")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007AFF")}
        >
          Ver más información
        </Button>
      </Card.Body>
    </Card>
  </motion.div>
);

const Inicio = () => {
  const [showModal, setShowModal] = useState(false);
  const [productInfo, setProductInfo] = useState("");

  const handleMoreInfo = (productName) => {
    const info = {
      "Easy Victory": "",
    };
    setProductInfo(info[productName] || "");
    setShowModal(true);
  };

  return (
    <div className="py" style={{ backgroundColor: "#FFFFFF" }}>
      <motion.div
        className="container-fluid text-center py-5"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ backgroundColor: "rgb(34, 36, 47)", color: "#FFFFFF" }}
      >
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="text-center mb-4">
              <img
                src="/15.png"
                alt="Logo"
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <h1 className="mb-4 fw-bold" style={{ color: "#FFFFFF" }}>
              Welcome to, 𝗣𝗥𝗢 𝗣𝗟𝗔𝗬𝗘𝗥𝗦 𝗦𝗧𝗢𝗥𝗘
              <br />
              <br></br>
              The most professional and secure service on the market.
            </h1>

            <p className="lead mb-4" style={{ color: "#FFFFFF" }}>
              Here you will find the best solutions to improve your 8 Ball Pool
              experience. From exclusive hacks to advanced 100% anti-ban tricks.
              Make every move count with MonacoShop!
            </p>

            <div className="d-flex justify-content-center gap-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline-light"
                  href="#nuestros-productos"
                  className="px-4 py-2 fw-bold"
                  aria-label="Descubre más"
                  style={{
                    borderColor: "#FFFFFF",
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 6px rgba(255, 255, 255, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#606060")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  Discover more <FaChevronRight className="ms-2" />
                </Button>
              </motion.div>
            </div>
          </Col>
        </Row>
      </motion.div>

      <Container fluid className="py-5" id="nuestros-productos">
        <motion.h2
          className="text-center mb-5"
          style={{ color: "#007AFF" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          AVAILABLE PRODUCTS
        </motion.h2>
        <Row>
          {[
            {
              image: "/EasyVictory.png",
              title: "Easy Victory",
              description:
                "Enjoy 100% anti-ban hacks designed to enhance your gaming experience.",
            },
            {
              image: "/spider.png",
              title: "Spider Tool",
              description:
                "presents a simple and efficient solution to improve your game in 8 Ball Pool.",
            },
            {
              image: "/PSH4.png",
              title: "PSH4X",
              description:
                "Access advanced tricks to master the game and improve your skills.",
            },
            {
              image: "/AimKing.jpg",
              title: "AimKing Original",
              description:
                "Optimize your performance with exclusive tools for 8 Ball Pool.",
            },
          ].map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              onMoreInfo={handleMoreInfo}
            />
          ))}
        </Row>
      </Container>

      <Container fluid className="py-5" id="planes-flexibles">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(255, 87, 34)",
          }} /* Color cálido y vibrante */
        >
          <i className="fas fa-cogs"></i> FLEXIBLE AID PLANS
        </motion.h2>

        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <div className="permanent-plans-container">
              {/* Card única */}
              <div className="permanent-plan-card">
                <div className="plan-header">
                  <span>
                    <i className="fas fa-clock"></i> Duration
                  </span>
                  <span>
                    <i className="fas fa-key"></i> Basic
                  </span>
                  <span>
                    <i className="fas fa-headset"></i> Premium soporte
                  </span>
                </div>
                <div className="permanent-plan-info">
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-hourglass-start"></i> 1 hours:
                    </span>
                    <span className="price">USDT 2,00</span>
                    <span className="price-with-support">USDT 2,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-hourglass-half"></i> 3 hours:
                    </span>
                    <span className="price">USDT 3,00</span>
                    <span className="price-with-support">USDT 3,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-hourglass-end"></i> 6 hours:
                    </span>
                    <span className="price">USDT 4,00</span>
                    <span className="price-with-support">USDT 4,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-clock"></i> 12 hours:
                    </span>
                    <span className="price">USDT 5,00</span>
                    <span className="price-with-support">USDT 5,00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-center align-items-center">
              <a
                href="https://youtu.be/ESFXezoQ8ng"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample Video #1
              </a>
              <a
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Me%20gustar%C3%ADa%20adquirir%20un%20PLAN%20FLEXIBLE%20DE%20AYUDA%20%28HORAS%29%20%E2%8F%B3%F0%9F%94%91.%20%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                className="btn btn-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i> Contact by Telegram
              </a>
              <a
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample video #2
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5" id="planes-permanentes">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontWeight: "bold", color: "#007bff" }} /* Azul brillante */
        >
          <i className="fas fa-calendar-check"></i> PERMANENT PLANS
        </motion.h2>

        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <div className="permanent-plans-container">
              <div className="permanent-plan-card">
                <div className="plan-header">
                  <span>
                    <i className="fas fa-clock"></i> Duration
                  </span>
                  <span>
                    <i className="fas fa-key"></i> Basic
                  </span>
                  <span>
                    <i className="fas fa-headset"></i> Premium
                  </span>
                </div>
                <div className="permanent-plan-info">
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-hourglass-start"></i> 24 hours:
                    </span>
                    <span className="price">USDT 6,00</span>
                    <span className="price-with-support">USDT 6,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-hourglass-half"></i> 72 hours:
                    </span>
                    <span className="price">USDT 8,00</span>
                    <span className="price-with-support">USDT 8,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-day"></i> 30 days:
                    </span>
                    <span className="price">USDT 20,00</span>
                    <span className="price-with-support">USDT 20,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 365 days:
                    </span>
                    <span className="price">USDT 35,00</span>
                    <span className="price-with-support">USDT 35,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-infinity"></i> Forever:
                    </span>
                    <span className="price">USDT 50,00</span>
                    <span className="price-with-support">USDT 50,00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-center align-items-center">
              <a
                href="https://youtu.be/ESFXezoQ8ng"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample Video #1
              </a>
              <a
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20de%20la%20categor%C3%ADa%20PERMANENTE%20%F0%9F%94%91.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                className="btn btn-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i> Contact by Telegram
              </a>
              <a
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample video #2
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5" id="planes-permanentes">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(227, 165, 25)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <i className="fas fa-trophy"></i> Easy Victory
        </motion.h2>

        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <div className="permanent-plans-container">
              <div className="permanent-plan-card">
                <div className="plan-header">
                  <span>
                    <i className="fas fa-clock"></i> Duration
                  </span>
                  <span>
                    <i className="fas fa-key"></i> Basic
                  </span>
                  <span>
                    <i className="fas fa-headset"></i> Premium
                  </span>
                </div>
                <div className="permanent-plan-info">
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-week"></i> 7 days:
                    </span>
                    <span className="price">USDT 10,00</span>
                    <span className="price-with-support">USDT 15,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-day"></i> 15 days:
                    </span>
                    <span className="price">USDT 17,50</span>
                    <span className="price-with-support">USDT 20,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 30 days:
                    </span>
                    <span className="price">USDT 25,00</span>
                    <span className="price-with-support">USDT 30,00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-center align-items-center">
              <a
                href="https://youtu.be/ESFXezoQ8ng"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample Video #1
              </a>
              <a
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20Easy%20Victory%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                className="btn btn-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i> Contact by Telegram
              </a>
              <a
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample video #2
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5" id="planes-permanentes">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(127, 197, 236)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <i className="fas fa-plug"></i> PSH4X
        </motion.h2>

        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <div className="permanent-plans-container">
              <div className="permanent-plan-card">
                <div className="plan-header">
                  <span>
                    <i className="fas fa-clock"></i> Duration
                  </span>
                  <span>
                    <i className="fas fa-key"></i> Basic
                  </span>
                  <span>
                    <i className="fas fa-headset"></i> Premium soporte
                  </span>
                </div>
                <div className="permanent-plan-info">
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 30 days:
                    </span>
                    <span className="price">USDT 25,00</span>
                    <span className="price-with-support">USDT 30,00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-center align-items-center">
              <a
                href="https://youtu.be/ESFXezoQ8ng"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample Video #1
              </a>
              <a
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20PSH4X%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                className="btn btn-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i> Contact by Telegram
              </a>
              <a
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample video #2
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5" id="planes-permanentes">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(129, 6, 9)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <i className="fas fa-bullseye"></i> AimKing
        </motion.h2>

        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <div className="permanent-plans-container">
              <div className="permanent-plan-card">
                <div className="plan-header">
                  <span>
                    <i className="fas fa-clock"></i> Duration
                  </span>
                  <span>
                    <i className="fas fa-key"></i> Basic
                  </span>
                  <span>
                    <i className="fas fa-headset"></i> Premium
                  </span>
                </div>
                <div className="permanent-plan-info">
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 7 days:
                    </span>
                    <span className="price">USDT 15,00</span>
                    <span className="price-with-support">USDT 20,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 30 days:
                    </span>
                    <span className="price">USDT 30,00</span>
                    <span className="price-with-support">USDT 35,00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-center align-items-center">
              <a
                href="https://youtu.be/ESFXezoQ8ng"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample Video #1
              </a>
              <a
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20AimKing%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                className="btn btn-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i> Contact by Telegram
              </a>
              <a
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample video #2
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5" id="planes-permanentes">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(244, 124, 23)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <i className="fas fa-spider"></i> Spider Tool
        </motion.h2>

        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <div className="permanent-plans-container">
              <div className="permanent-plan-card">
                <div className="plan-header">
                  <span>
                    <i className="fas fa-clock"></i> Duration
                  </span>
                  <span>
                    <i className="fas fa-key"></i> Basic
                  </span>
                  <span>
                    <i className="fas fa-headset"></i> Premium
                  </span>
                </div>
                <div className="permanent-plan-info">
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 3 days:
                    </span>
                    <span className="price">USDT 6,00</span>
                    <span className="price-with-support">USDT 6,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 7 days:
                    </span>
                    <span className="price">USDT 12,00</span>
                    <span className="price-with-support">USDT 12,00</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> 30 days:
                    </span>
                    <span className="price">USDT 17,00</span>
                    <span className="price-with-support">USDT 17,00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-center align-items-center">
              <a
                href="https://youtube.com/shorts/O-V3BohXfao?si=r8qjFNHP68P-tdBH"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample Video #1
              </a>
              <a
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20Spider%20Tool%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                className="btn btn-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i> Contact by Telegram
              </a>
              <a
                href="https://youtube.com/shorts/u3DzIa6IV4A"
                className="btn btn-youtube ms-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i> Sample video #2
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Information</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <div style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {productInfo}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            style={{
              backgroundColor: "#8E8E8E",
              borderRadius: "12px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Container fluid className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
        <Row className="justify-content-center">
          <Col md={10}>
            <Row className="align-items-center">
              <Col md={6} className="mb-4 mb-md-0">
                <motion.h2
                  className="fw-bold mb-3"
                  style={{ color: "#007AFF" }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  Improve Your Game
                </motion.h2>
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{ color: "#757575" }}
                >
                  Take advantage of exclusive products from MonacoShop to
                  improve your performance in 8 Ball Pool. Each tool is designed
                  to optimize your gaming experience safely and effectively.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="info"
                    href="/convert.html"
                    className="px-4 py-2 fw-bold"
                    style={{
                      backgroundColor: "#007AFF",
                      color: "#FFFFFF",
                      borderRadius: "12px",
                      padding: "12px 24px",
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      boxShadow: "0 4px 6px rgba(0, 122, 255, 0.2)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#005BB5")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#007AFF")
                    }
                  >
                    Monaco Converter! <FaChevronRight className="ms-2" />
                  </Button>
                </motion.div>
              </Col>
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card
                    className="shadow-sm"
                    style={{ backgroundColor: "#FFFFFF" }}
                  >
                    <Card.Body className="text-center">
                      <img
                        src="/Logo.png"
                        alt="Mejorar tu rendimiento"
                        style={{ width: "64px", height: "64px" }}
                        className="mb-3"
                      />
                      <Card.Title
                        className="fw-bold"
                        style={{ color: "#007AFF" }}
                      >
                        Improve Your Performance
                      </Card.Title>
                      <Card.Text style={{ color: "#757575" }}>
                        Take your game to the next level with products
                        specifically designed to improve your skills and
                        strategies.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <footer
        className="bg-light text-dark py-4 mt-auto"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                &copy; 2025 MonacoShop. All rights reserved.
              </p>
              <div className="social-icons">
                <motion.a
                  href="https://facebook.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-dark mx-2"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={24} />
                </motion.a>
                <motion.a
                  href="https://x.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-dark mx-2"
                  aria-label="Twitter"
                >
                  <BsTwitterX size={24} />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  whileHover={{ scale: 1.2 }}
                  className="text-dark mx-2"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </motion.a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Inicio;
