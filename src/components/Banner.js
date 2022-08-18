import React from "react"
import monitoring from "../assets/img/monitoring.png"
import { Container, Row, Col } from "react-bootstrap"

function Banner(){
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">"My Portfolio"</span>
            <h1>{'Hi I am Tithi Srivastava'}</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

          </Col>
          <Col>
            <img src={monitoring} alt="an img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner