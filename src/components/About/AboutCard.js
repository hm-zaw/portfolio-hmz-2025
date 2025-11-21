import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  Hi! I’m <span className="purple">Htet Myet Zaw</span> from{" "}
  <span className="purple">Yangon, Myanmar</span>.
  <br />
  I’m an undergraduate <span className="purple">Software Engineering</span> student at{" "}
  <span className="purple">UIT</span> who enjoys building modern web applications
  and exploring new technologies.
  <br /><br />
  Outside of coding, I like spending time on activities that keep me inspired and balanced:
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech & Tools ⚙️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building — every small step matters."{" "}
          </p>
          <footer className="blockquote-footer">Htet Myet Zaw</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
