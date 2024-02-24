import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function About() {
  return (
    <div id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="order-2 order-md-1">
            <div id="title">
              Hi, I am <br /> Shafa Shabudeen
            </div>
            <div id="textLoop">
              I am a{" "}
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Java Programmer",
                      "Backend Developer",
                      "Frontend Developer",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div id="subTitle">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results.
            </div>
            <div id="SocialMediaIcons">
              <a
                id="SocialMediaIcon"
                href="https://www.linkedin.com/in/shafa-shabudeen/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                id="SocialMediaIcon"
                href="https://github.com/shafa-shabudeen"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a id="SocialMediaIcon" href="mailto:shafashabbu@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </Col>
          <Col md={5} className="d-flex justify-content-md-end order-1 order-md-2 mt-md-0 mt-3">
            <div id="heroContainer">
              <img src="./profile.jpg" alt="hero image" id="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;