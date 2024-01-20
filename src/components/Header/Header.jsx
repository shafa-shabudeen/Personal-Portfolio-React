import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState }  from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  

  return (
    <header>
      <Navbar expand="lg" fixed="top"  data-bs-theme="dark" className="navbar-custom">
        <div className="container-fluid" >
          <Navbar.Brand href="#" className="navbar-brand-custom">
            {/* <img src="/logo-black.png" alt="Logo" width="30" height="30" className="d-inline-block align-top" /> */}
            <span>S</span>hafa
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
              <Nav.Item className={`navbar-item ${activeLink === 'about' ? 'navbar-item-active' : ''}`}>
              <Nav.Link href="#" onClick={() => handleNavLinkClick('about')}>
                About
              </Nav.Link>
            </Nav.Item>
              <Nav.Item className={`navbar-item ${activeLink === 'skills' ? 'navbar-item-active' : ''}`}>
                <Nav.Link href="#" onClick={() => handleNavLinkClick('skills')}> Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item className={`navbar-item ${activeLink === 'experience' ? 'navbar-item-active' : ''}`}>
                <Nav.Link href="#"  onClick={() => handleNavLinkClick('experience')}>Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item className={`navbar-item ${activeLink === 'projects' ? 'navbar-item-active' : ''}`}>
                <Nav.Link href="#"  onClick={() => handleNavLinkClick('projects')}>Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item className={`navbar-item ${activeLink === 'certifications' ? 'navbar-item-active' : ''}`}>
                <Nav.Link href="#"  onClick={() => handleNavLinkClick('certifications')}>Certifications</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="navbar-text">
            <Nav.Link href="https://www.linkedin.com/in/shafa-shabudeen/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="navbar-icon" />
              </Nav.Link>
              <Nav.Link href="https://github.com/shafa-shabudeen" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="navbar-icon" />
              </Nav.Link>
              <Nav.Link href="mailto:shafashabbu@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
              </Nav.Link>
              <Nav.Link href="/Shafa Shabudeen Java Resume.pdf" download className="btn btn-primary navbar-btn">
                Resume
              </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
