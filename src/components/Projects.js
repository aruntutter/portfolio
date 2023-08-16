import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Project 1",
    imgSrc: require("../assets/images/mountain-img.jpg"),
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project 2",
    imgSrc: require("../assets/images/mountain-img.jpg"),
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project 3",
    imgSrc: require("../assets/images/mountain-img.jpg"),
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project 4",
    imgSrc: require("../assets/images/mountain-img.jpg"),
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project 5",
    imgSrc: require("../assets/images/mountain-img.jpg"),
    demoLink: "#",
    sourceLink: "#",
  },
  {
    title: "Project 6",
    imgSrc: require("../assets/images/mountain-img.jpg"),
    demoLink: "#",
    sourceLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h1>Showcase of My Work</h1>
      </div>
      <div className="list-of-projects">
        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.imgSrc} alt={project.title} />
            <div className="project-overlay">
              <a href={project.demoLink} className="project-link">
                Live Demo
              </a>
              <a href={project.sourceLink} className="project-link">
                Source Code
              </a>
            </div>
            <p className="project-name">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
