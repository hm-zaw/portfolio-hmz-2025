import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Key2Career from "../../Assets/Projects/Key2Career.jpg";
import Gold from "../../Assets/Projects/Gold.png";
import Travinity from "../../Assets/Projects/Travinity.jpg";
import Konbaung from "../../Assets/Projects/Konbaung.png";
import FitFinity from "../../Assets/Projects/FitFinity.jpg";
import PoutSa from "../../Assets/Projects/PoutSa.jpg";
import Prolearn from "../../Assets/Projects/Prolearn.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Konbaung}
              isBlog={false}
              title="KonBaung AI"
              description="Myanmar’s first multilingual AI chatbot browser extension focused on cybersecurity awareness and real-time phishing/scam detection. Built with Next.js, Plasmo, Tailwind, Python, and ML. Integrated ML models and Myanmar Cyber Law knowledge to provide safe browsing tips. Designed hyper-local UX aimed at mobile-first users with over 63% national adoption risk."
              ghLink="https://github.com/hm-zaw/apt-chatbot-newtab"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PoutSa}
              isBlog={false}
              title="Pout Sa Wholesale"
              description="An award-winning B2B e-commerce ERP built with Laravel, React, TypeScript, Python, and ML. Features include AI demand forecasting, tech trend analysis, computer-vision product defect detection, real-time inventory tracking, and React-based delivery map tracking—designed to modernize and automate wholesale operations."
              ghLink="https://github.com/hm-zaw/itpoutsa_b2bEcommerce"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Key2Career}
              isBlog={false}
              title="Key2Career"
              description="An AI-powered career and talent platform built with Next.js, React, Python, ML, MongoDB, and Firebase. Key2Career features a recruiter portal, voice-based mock interviews powered by Gemini and Claude, blockchain-backed résumé verification using Solidity, and an interactive drag-and-drop career roadmap builder for personalized learning paths."
              ghLink="https://github.com/hm-zaw/Key2Career"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travinity}
              isBlog={false}
              title="Travinity"
              description="A full-stack travel planning platform built with Spring Boot, React, Tailwind, Stripe, and PostgreSQL. Travinity lets users book flights, hotels, cars, and cruises in one place, with AI-powered MBTI-based trip recommendations, real-time chat support, and secure Stripe payments for a smooth, all-in-one travel experience."
              ghLink="https://github.com/hm-zaw/travinity_react"        
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FitFinity}
              isBlog={false}
              title="FitFinity: Healthcare Solution"
              description="A full hospital management system built with Laravel, JavaScript, Tailwind, and SQLite. FitFinity features AI-powered symptom diagnosis, specialist appointment booking, doctor schedule management, medical record tracking, and admin-controlled workflows—offering an efficient and modern healthcare experience for patients, doctors, and administrators."
              ghLink="https://github.com/hm-zaw/FitFinity_HealthCare"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Prolearn}
              isBlog={false}
              title="Prolearn: NextGen VLE"
              description="A next-generation Virtual Learning Environment designed for IT students and professionals. Prolearn offers structured courses, progress tracking, certifications, and role-based access for students, instructors, and job recruiters—bridging skill-based learning with real employment opportunities."
              ghLink="https://github.com/hm-zaw/Prolearn-VLE"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gold}
              isBlog={false}
              title="Gold Price Prediction Model"
              description="A machine learning project that predicts gold prices using key economic indicators including CPI, oil prices, the USD index, and stock market indices. Built with Ridge Regression and ARIMA, the model demonstrates strong predictive performance and highlights the effectiveness of combining economic theory with data-driven forecasting."
              ghLink="https://github.com/hm-zaw/gold-price-prediction-ML"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
