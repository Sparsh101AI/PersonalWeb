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
      title: "Project 1",
      description: "Description of Project 1",
      imageSrc: "project1.png",
      technologies: ["C++"],
      url: "https://project1.com"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      imageSrc: "project2.png",
      technologies: ["JavaScript", "React"],
      url: "https://project2.com"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      imageSrc: "project3.png",
      technologies: ["Python", "Django"],
      url: "https://project3.com"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      imageSrc: "project4.png",
      technologies: ["Java"],
      url: "https://project4.com"
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

  const visibleProjects = filteredProjects.slice(0, 4);

  return (
    <section className="project" id="project">
      <Container>
        <Col>
          <h2>Projects</h2>
          <p>Below are some of my highlighted projects, some cant been seen until filtered.</p>
          <div className="rounded-input-container">
            <div className="centered-search-bar">
              <input
                type="text"
                placeholder="Search by technology..."
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
                  {visibleProjects.map((project) => (
                    <Card key={project.id} className="project-card" onClick={() => window.open(project.url, "_blank")}>
                      <div className="project-card-image">
                        <img src={project.imageSrc} alt={project.title} />
                      </div>
                      <div className="project-card-body">
                        <h5>{project.title}</h5>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <img src="github.png" alt="GitHub" />
                        </a>
                      </div>
                    </Card>
                  ))}
                </CardGroup>
                {filteredProjects.length > 4 && (
                  <div>
                    <p>More projects available. Refine your search to see additional projects.</p>
                  </div>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
