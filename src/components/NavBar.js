import React from "react";
import {useState, useEffect} from "react";
import {Navbar, Container, Nav  } from "react-bootstrap";
import smiley from '../assets/img/smiley.png'
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';
import insta from '../assets/img/insta.png';

export const NavBar=() => {
  const [activelink, setActiveLink]= useState('home');
  const [scrolled, setScrolled]= useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={'smiley'} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
            <Nav.Link href="#projects"  className={ activelink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="socials">
              <a href="#"><img src={linkedin} alt=""/></a>
              <a href="#"><img src={github} alt=""/></a>
              <a href="#"><img src={insta} alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}