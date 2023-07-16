import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';


export const Footer = () => {
 



  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <p className="footheader">Where you can find me!</p>
              <a href="mailto:Sparshpatel6165@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/gmail.svg" alt="Gmail" className="icon" style={{ filter: 'invert(1)', width: 40, height: 40 }} />
              </a>
              <a href="https://leetcode.com/sparshpatel6165/" target="_blank" rel="noopener noreferrer">
                <img src="/leetcode.svg" alt="LeetCode" className="icon" style={{ filter: 'invert(1)', width: 40, height: 40 }} />
              </a>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsparshp40310320%3Flang%3Den" target="_blank" rel="noopener noreferrer">
                <img src="/twitter.svg" alt="Twitter" className="icon" style={{ filter: 'invert(1)', width: 40, height: 40 }} />
              </a>
              <a href="https://github.com/Sparsh101AI" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" className="icon" style={{ filter: 'invert(1)', width: 40, height: 40 }} />
              </a>
              <a href="https://www.linkedin.com/in/sparsh-patel-54762b186/" target="_blank" rel="noopener noreferrer">
                <img src="/link.svg" alt="LinkedIn" className="icon" style={{ filter: 'invert(1)', width: 40, height: 40 }} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
