import React from "react";
import './about.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

function About(){
    return(
    <Container id="about">
      <Row>
        <Col >
        <div id="title">
        Hi, I am <br /> Shafa Shabudeen
        </div>  
        <div id="textLoop">
          I am a <span>
            <Typewriter
              options={{
                strings: ['Java Programmer', 'Backend Developer', 'Frontend Developer', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div id="subTitle">
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results.With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </div>
        
        </Col>
        <Col xs={5}>
          <div id="heroContainer">
            <img src="/logo-black.png" alt="hero image" id="img" />
          </div>
          
        </Col>
      </Row>
    </Container>

    )
}

export default About;

