import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { FaChevronRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../styles/inicio.css";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const productColors = {
  "Easy Victory": "rgb(227, 165, 25)", // Naranja dorado
  PSH4X: "rgb(127, 197, 236)", // Azul claro
  AimKing: "rgb(129, 6, 9)", // Rojo oscuro
  "Spider Tool": "rgb(244, 124, 23)",
  Snake: "rgb(205, 189, 12)",
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
              Welcome to the,{" "}
              <span style={{ fontWeight: "bold", color: "#FFD700" }}>
                MOVEMENT 𝗣𝗥𝗢 𝗣𝗟𝗔𝗬𝗘𝗥𝗦 𝗦𝗧𝗢𝗥𝗘
              </span>
              <br />
              <br />
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                The most professional and secure support service on the all market.
              </span>
            </h1>

            <div className="d-flex justify-content-center gap-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline-light"
                  href="https://t.me/addlist/ic7ljy-1hEVkYTdh"
                  className="px-4 py-2 fw-bold"
                  aria-label="Discover more"
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
                  Join now to the Discord server. <FaChevronRight className="ms-2" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline-light"
                  href="/convert.html"
                  className="px-4 py-2 fw-bold"
                  aria-label="Descubre más"
                  style={{
                    borderColor: "#FFFFFF",
                    color: "#FFFFFF",
                    backgroundColor: "#198754",
                    borderRadius: "12px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                    boxShadow: "rgba(255, 255, 255, 0.2) 0px 4px 6px",
                  }}
                  onMouseEnter={
                    (e) => (e.target.style.backgroundColor = "#198754") // Mantén el verde
                  }
                  onMouseLeave={
                    (e) => (e.target.style.backgroundColor = "#198754") // Mantén el verde al salir
                  }
                >
                  Mónaco Converter <FaChevronRight className="ms-2" />
                </Button>
              </motion.div>
            </div>
          </Col>
        </Row>
      </motion.div>

      <Container fluid className="py-3" id="FLEXIBLEAIDPLANS">
        <motion.h2
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(0, 123, 255)",
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
                    <i className="fas fa-gem"></i> Premium
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
              {/* Botón Sample Video #1 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtu.be/ESFXezoQ8ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #1
              </Button>

              {/* Botón Buy by Telegram */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Me%20gustar%C3%ADa%20adquirir%20un%20PLAN%20FLEXIBLE%20DE%20AYUDA%20%28HORAS%29%20%E2%8F%B3%F0%9F%94%91.%20%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#007AFF", // Color de Telegram
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
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
                <i
                  className="fab fa-telegram me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Buy by Telegram
              </Button>

              {/* Botón Sample Video #2 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #2
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-3" id="PERMANENTPLANS">
        <motion.h2
          className="text-center mb-3"
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
                    <i className="fas fa-gem"></i> Premium
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
              {/* Botón Sample Video #1 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtu.be/ESFXezoQ8ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #1
              </Button>

              {/* Botón Buy by Telegram */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20de%20la%20categor%C3%ADa%20PERMANENTE%20%F0%9F%94%91.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#007AFF", // Color de Telegram
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
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
                <i
                  className="fab fa-telegram me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Buy by Telegram
              </Button>

              {/* Botón Sample Video #2 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #2
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-3" id="EasyVictory-1">
        <motion.h2
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(227, 165, 25)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <img
            src="/EasyVictory.png"
            alt="Easy Victory"
            className="easy-victory-icon"
          />{" "}
          Easy Victory
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
                    <i className="fas fa-gem"></i> Premium
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
              {/* Botón Sample Video #1 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtu.be/ESFXezoQ8ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #1
              </Button>

              {/* Botón Buy by Telegram */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20Easy%20Victory%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#007AFF", // Color de Telegram
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
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
                <i
                  className="fab fa-telegram me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Buy by Telegram
              </Button>

              {/* Botón Sample Video #2 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #2
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-3" id="PSH4X-2">
        <motion.h2
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(127, 197, 236)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <img src="/PSH4.png" alt="PSH4X" className="psh4-icon" /> PSH4X
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
                    <i className="fas fa-gem"></i> Premium
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
              {/* Botón Sample Video #1 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtu.be/ESFXezoQ8ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #1
              </Button>

              {/* Botón Buy by Telegram */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20PSH4X%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#007AFF", // Color de Telegram
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
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
                <i
                  className="fab fa-telegram me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Buy by Telegram
              </Button>

              {/* Botón Sample Video #2 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #2
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-3" id="AimKing-3">
        <motion.h2
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(129, 6, 9)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <img src="/AimKing.jpg" alt="AimKing" className="aimking-icon" />{" "}
          AimKing
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
                    <i className="fas fa-gem"></i> Premium
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
              {/* Botón Sample Video #1 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtu.be/ESFXezoQ8ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #1
              </Button>

              {/* Botón Buy by Telegram */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20AimKing%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#007AFF", // Color de Telegram
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
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
                <i
                  className="fab fa-telegram me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Buy by Telegram
              </Button>

              {/* Botón Sample Video #2 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/RbgR3eUSQp8?si=wDF2PHObjcEqSu06"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #2
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-3" id="SpiderTool-4">
        <motion.h2
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(244, 124, 23)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <img src="/spider.png" alt="Spider Tool" className="spider-icon" />{" "}
          Spider Tool
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
                    <i className="fas fa-gem"></i> Premium
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
              {/* Botón Sample Video #1 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/O-V3BohXfao?si=r8qjFNHP68P-tdBH"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #1
              </Button>

              {/* Botón Buy by Telegram */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20Spider%20Tool%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#007AFF", // Color de Telegram
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
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
                <i
                  className="fab fa-telegram me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Buy by Telegram
              </Button>

              {/* Botón Sample Video #2 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/u3DzIa6IV4A"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #2
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-3" id="Snake-5">
        <motion.h2
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            color: "rgb(205, 189, 12)",
          }} /* Hacemos el título más grueso y añadimos color */
        >
          <img src="/snake.png" alt="Snake" className="snake-icon" /> Snake
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
                    <i className="fas fa-gem"></i> Premium
                  </span>
                </div>
                <div className="permanent-plan-info">
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> To be defined:
                    </span>
                    <span className="price">To be defined</span>
                    <span className="price-with-support">To be defined</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> To be defined:
                    </span>
                    <span className="price">To be defined</span>
                    <span className="price-with-support">To be defined</span>
                  </div>
                  <div className="plan-details">
                    <span>
                      <i className="fas fa-calendar-alt"></i> To be defined:
                    </span>
                    <span className="price">To be defined</span>
                    <span className="price-with-support">To be defined</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-center align-items-center">
              {/* Botón Sample Video #1 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/O-V3BohXfao?si=r8qjFNHP68P-tdBH"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #1
              </Button>

              {/* Botón Buy by Telegram */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://t.me/ChetoHack_100AntiBan_8BP?text=Hola%2C%20Monaco%20%E2%99%8B%2C%0AMe%20gustar%C3%ADa%20adquirir%20una%20llave%20del%20Spider%20Tool%20Original.%0A%C2%BFPodr%C3%ADas%20indicarme%20c%C3%B3mo%20proceder%3F%20%F0%9F%A4%94%F0%9F%99%8C"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#007AFF", // Color de Telegram
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 122, 255, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
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
                <i
                  className="fab fa-telegram me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Buy by Telegram
              </Button>

              {/* Botón Sample Video #2 */}
              <Button
                variant="outline-light"
                className="rounded-pill py-3 px-4 border-0 d-flex align-items-center position-relative overflow-hidden custom-telegram-button ms-3 mb-2 mb-sm-0"
                href="https://youtube.com/shorts/u3DzIa6IV4A"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: "bold",
                  maxWidth: "250px",
                  width: "auto",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  backgroundColor: "#FF0000", // Color de YouTube
                  color: "#FFFFFF",
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(255, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#CC0000";
                  e.target.style.boxShadow = "0 6px 12px rgba(204, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF0000";
                  e.target.style.boxShadow = "0 4px 8px rgba(255, 0, 0, 0.3)";
                }}
              >
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "20px" }}
                ></i>
                Sample Video #2
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="py-5"
        style={{ backgroundColor: "rgb(34, 36, 47)" }}
      >
        <Row className="justify-content-center">
          <Col md={10}>
            <Row className="align-items-center justify-content-center">
              <Col md={6} className="text-center mb-4 mb-md-0">
                <motion.h2
                  className="fw-bold mb-3"
                  style={{ color: "#007AFF" }}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  ® 2025 Global Store All rights reserved.
                </motion.h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
