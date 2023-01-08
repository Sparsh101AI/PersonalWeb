import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
import { SocialIcon } from 'react-social-icons';


export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>

        <Row className="align-items-center">
        
          <Col size={12} sm={6}>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <p className="footheader"> Contanct me!</p>
              <SocialIcon url="https://www.linkedin.com/in/sparsh-patel-54762b186/" network="linkedin" bgColor="#962ece80" fgColor="#ffffff"/>
              <SocialIcon url="https://www.instagram.com/_sparsh.patel_/" network="instagram" bgColor="#962ece80" fgColor="#ffffff"/>
              <SocialIcon url="https://github.com/Sparsh101AI" network="github" bgColor="#962ece80" fgColor="#ffffff"/>
              <SocialIcon url="https://twitter.com/sparshp40310320?lang=en" network="twitter"  bgColor="#962ece80" fgColor="#ffffff"/>

            </div>
            <p>Shoot me an email: Sparshpatel6165@gmail.com</p> 
          </Col> 
        </Row>
      </Container>
    </footer>
  )
}
