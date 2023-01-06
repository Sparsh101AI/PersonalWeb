import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import './Projects.css';



export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of my highlighted projects, simply click on the pictire to learn more. The rest can be found on github.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      <CardGroup>
      <Card className="bton">
      <Card.Text>
            FOCUS: Brain Sensing Headband
          </Card.Text>
        <Card.Img variant="top" src="focus.jpeg" />
        <Card.Body>
          <Button type="button"
      onClick={() => {
        window.open("https://projectboard.world/ysc/project/focus---an-eeg-powered-brain-sensing-headband-for-accident-prevention", "_blank");
      }}> Learn More!</Button>
        </Card.Body>
       
      </Card>
      <Card className="bton">
      <Card.Text>
      Physics Calculator Application          </Card.Text>
        <Card.Img variant="top" src="physics.jpeg" />
        <Card.Body>
          <Button type="button"
      onClick={() => {
        window.open("https://phsyics-priend-453c9c.netlify.app/", "_blank");
      }}> Try it Out!</Button>
        </Card.Body>
       
      </Card>
      <Card className="bton">
      <Card.Text>
      Semantle Golf Game          </Card.Text>
        <Card.Img variant="top" src="semantle.png" />
        <Card.Body>
          <Button type="button"
      onClick={() => {
        window.open("https://github.com/Sparsh101AI/Semantle-golf-game", "_blank");
      }}> Learn More!</Button>
        </Card.Body>
       
      </Card>
    </CardGroup>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
    
  );
}