import { useState } from "react";
import { Container, Col, Tab, Nav } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import colorSharp2 from "../assets/img/color-sharp2.png";
import './Projects.css';

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const projects = [
    {
      id: 1,
      title: "AI EEG & MEG Headband",
      description: "#Brainwaves",
      imageSrc: "focus1.png", // Initial image URL
      selectedImage: "focus.png", // Selected image URL
      technologies: ["C++", "Matlab", "Python", "Arduino", "React", "Node.Js"],
      url: "https://github.com/Sparsh101AI/EEG-BrainSensing-Headband-Project-Source-Code",
    },

    {
      id: 2,
      title: "NLP Semantle Golf Game",
      description: "#T-SNE",
      imageSrc: "golf.png", // Initial image URL
      selectedImage: "golf1.png", // Selected image URL
      technologies: ["Python", "C++", "Node.Js"],
      url: "https://github.com/Sparsh101AI/NLP-Semantle-golf-game",
    },
    {
      id: 3,
      title: "AI Reccomendation Chrome Extension",
      description: "#AI",
      imageSrc: "momento.png",
      selectedImage: "emom.png", // Selected image URL
      technologies: ["Python", "Django", "React.js",],
      url: "https://chrome.google.com/webstore/detail/momento-ai/acjnnhfkignjgnnkeiejbkippinnfcnh"
    },
    {
      id: 4,
      title: "StreamedD Glossary",
      description: "#Anime Engine",
      imageSrc: "stream1.png", // Initial image URL
      selectedImage: "stream.png", // Selected image URL
      technologies: ["Node.Js", "React", "Docker",],
      url: "https://streamdanime.io/",
    },

    // Add more projects as needed
  ];


  const filteredProjects = projects.filter((project) => {
    const projectDescription = project.description.toLowerCase();
    const projectTitle = project.title.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();

    return (
      projectDescription.includes(searchTermLowerCase) ||
      projectTitle.includes(searchTermLowerCase) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(searchTermLowerCase)
      )
    );
  });


  return (
    <section className="project" id="project">
      <Container>
        <Col>
          <h2>Projects</h2>
          <p>Below are some of my highlighted projects, the rest are on <a href="https://github.com/Sparsh101AI?tab=overview&from=2023-08-01&to=2023-08-04" >GitHub</a>.</p>
          <div className="rounded-input-container">
            <div className="centered-search-bar">
              <input
                type="text"
                placeholder="Filter by technology..."
                value={searchTerm}
                onChange={handleSearch}
                className="rounded-input"
              />
            </div>
          </div>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              {/* Add tabs if needed */}
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <CardGroup className="d-flex justify-content-center">
                  {filteredProjects.length > 0 ? (
                    <CardGroup className="d-flex justify-content-center flex-wrap">
                      {filteredProjects.length > 0 ? (
                        <CardGroup className="d-flex justify-content-start flex-wrap">
                          {projects.map((project) => {
                            if (
                              filteredProjects.find(
                                (filteredProject) => filteredProject.id === project.id
                              )
                            ) {
                              return (
                                <Card
                                  key={project.id}
                                  className="project-card"
                                  onClick={() => window.open(project.url, "_blank")}
                                >
                                  <div className="project-card-image">
                                    <img src={project.imageSrc} alt={project.title} />
                                  </div>
                                  <div className="project-card-body">
                                    <h5>{project.title}</h5>
                                    <p>{project.description}</p>
                                    <div className="circle-image">
                                      <img className="focus-image" src={project.selectedImage} alt="Focus" />
                                    </div>
                                  </div>
                                </Card>


                              );
                            }
                            return null;
                          })}
                        </CardGroup>
                      ) : (
                        <div className="no-projects-message">
                          <p>No projects found.</p>
                        </div>
                      )}





                    </CardGroup>
                  ) : (
                    <div className="no-projects-message">
                      <p>No projects found.</p>
                    </div>
                  )}

                </CardGroup>
                <br></br>

              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>

      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
