import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublicationCard from "./PublicationCard";
import Particle from "../Particle";
import publicationMan from "../../Assets/publication-man.svg";
import pdf25051 from "../../Assets/Publication/25051.pdf";
import pdf25007 from "../../Assets/Publication/25007.pdf";
import pdf25008 from "../../Assets/Publication/25008.pdf";

function Publications() {
  // Sample publications data - replace with your actual IEEE papers
  const publications = [
    {
      title:
        "Browser-Embedded, Legal-Aware Cybersecurity Co‑Pilot for Myanmar with RAG, Multilingual Defense, and Privacy",
      authors:
        "Htet Myet Zaw, Htet Paing Linn, Aung Kaung Myat, Hpone Khant Naing, Thurein Lin",
      venue: "ICAIT 2025",
      description:
        "This paper introduces a browser-embedded cybersecurity co-pilot designed specifically for the Myanmar context. Using Retrieval-Augmented Generation (RAG), multilingual threat understanding, and legal-aware safety filters, the system assists users in identifying, explaining, and mitigating cyber threats in real time. The model prioritizes user privacy, local language support, and compliance with regional digital laws, making cybersecurity guidance more accessible to the general public.",
      pdfLink: pdf25051,
      doiLink: "#", // Replace with actual DOI link
    },
    {
      title:
        "AI-Driven Career Development: LLM-Powered Voice Interviews and Interactive Roadmap Generation for Student-to-Workforce Transition",
      authors:
        "Htet Myet Zaw, Htet Paing Linn, Aung Kaung Myat, Hpone Khant Naing, San Myat Min, Chit Ko Ko Aung",
      venue: "ICAIT 2025",
      description:
        "This work presents an AI-driven framework that enhances career development for students through LLM-powered voice interviews and dynamic roadmap generation. The system evaluates communication ability, technical readiness, and career preferences using natural-language assessment, then generates adaptive learning paths tailored to each student. Our approach aims to reduce skill-gap challenges and support a smoother transition from academia to industry.",
      pdfLink: pdf25007,
      doiLink: "#", // Replace with actual DOI link
    },
    {
      title:
        "Blockchain-Enabled Verifiable Credentials and Skill Endorsements in an Academic-to-Career Platform",
      authors:
        "Htet Myet Zaw, Htet Paing Linn, Aung Kaung Myat, Hpone Khant Naing, San Myat Min, Chit Ko Ko Aung",
      venue: "ICAIT 2025",
      description:
        "This paper proposes a blockchain-based system for issuing verifiable digital credentials and skill endorsements within an academic-to-career ecosystem. The platform ensures authenticity, tamper resistance, and transparent verification of student achievements while enabling employers to validate competencies securely. Our work demonstrates how decentralized credentialing can strengthen trust in academic records and streamline recruitment workflows.",
      pdfLink: pdf25008,
      doiLink: "#", // Replace with actual DOI link
    },
  ];

  return (
    <Container fluid className="publication-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6} style={{ textAlign: "center" }}>
            <h1 className="publication-heading">
              My Research <strong className="purple">Publications</strong>
            </h1>
            <p
              style={{ color: "white", fontSize: "1.1em", paddingTop: "20px" }}
            >
              Exploring cutting-edge research in technology and innovation
            </p>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={5} className="publication-illustration">
            <img
              src={publicationMan}
              alt="publication"
              className="img-fluid publication-man-img"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingTop: "10px" }}>
          {publications.map((pub, index) => (
            <Col md={10} className="publication-card" key={index}>
              <PublicationCard
                title={pub.title}
                authors={pub.authors}
                venue={pub.venue}
                description={pub.description}
                pdfLink={pub.pdfLink}
                doiLink={pub.doiLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
