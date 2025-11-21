import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import hackathonImg from "../../Assets/hackathon-photo.JPG";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingTop: "50px", paddingBottom: "100px" }}>
            <Col
              md={5}
              sm={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img
                src={hackathonImg}
                alt="Hackathon"
                className="img-fluid"
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "transform .3s ease",
                }}
              />
            </Col>
            <Col
              md={7}
              sm={12}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                padding: "20px 50px",
              }}
            >
              <h1 className="project-heading">
                <strong className="purple">Hackathon</strong> Winner
              </h1>

              <h3 style={{ marginTop: 0 }}>
                Pout Sa Wholesale — Award-Winning B2B E-Commerce Intelligent ERP
              </h3>

              <p
                style={{ fontSize: "1em", marginBottom: "8px", color: "#666" }}
              >
                <strong>Tech:</strong> Laravel, React, TypeScript, Python,
                Machine Learning, Tailwind
              </p>

              <p style={{ fontSize: "1.05em", lineHeight: 1.5 }}>
                Winner — Code2Career Hackathon 2024 (organized by MJC and JICA
                Myanmar). The hackathon-winning solution featured AI demand
                forecasting, tech-trend analysis, computer-vision faulty-product
                detection, and real-time inventory tracking to streamline B2B
                operations and reduce stock loss.
              </p>

              <p
                style={{ fontSize: "1.05em", lineHeight: 1.5, marginBottom: 0 }}
              >
                Implemented map-based delivery tracking with React for real-time
                driver locations and ETA visualization.
              </p>
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
