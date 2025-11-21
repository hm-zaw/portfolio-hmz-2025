import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an undergraduate Software Engineering student from the University of
              Information Technology. I enjoy building practical, user-focused applications
              and turning ideas into efficient software solutions.
              <br /><br />
              I work with 
              <b className="purple"> JavaScript, PHP, Python, Java, and SQL</b>, and I’m
              always expanding my technical skill set.
              <br /><br />
              My interests include developing 
              <b className="purple"> web applications, REST APIs,</b> and exploring
              <b className="purple"> machine learning</b>.
              <br /><br />
              I’m experienced with 
              <b className="purple"> Laravel, React, Next.js, Spring Boot</b> and tools like
              Git/GitHub, Docker (basic), Stripe, and databases such as MySQL, PostgreSQL,
              SQLite, MongoDB, and Firebase Firestore.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
