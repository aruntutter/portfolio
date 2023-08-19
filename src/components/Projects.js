import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Project 1",
    imgSrc: require("../assets/images/project-one.png"),
    demoLink: "https://teal-gelato-5c6488.netlify.app/",
    sourceLink: "https://github.com/aruntutter/user-wealth-tracker",
  },
  {
    title: "Project 2",
    imgSrc: require("../assets/images/project-two.png"),
    demoLink: "https://nimble-taffy-71512b.netlify.app/",
    sourceLink: "https://github.com/aruntutter/expense-tracker",
  },
  {
    title: "Project 3",
    imgSrc: require("../assets/images/project-three.png"),
    demoLink: "https://jocular-salamander-3446e6.netlify.app/",
    sourceLink: "https://github.com/aruntutter/calculator",
  },
  {
    title: "Project 4",
    imgSrc: require("../assets/images/project-four.png"),
    demoLink: "https://monumental-mochi-12d503.netlify.app/",
    sourceLink: "https://github.com/aruntutter/backroads",
  },
  {
    title: "Project 5",
    imgSrc: require("../assets/images/project-five.png"),
    demoLink: "https://unrivaled-faloodeh-1e477c.netlify.app/",
    sourceLink: "https://github.com/aruntutter/currency-exchange-calculator",
  },
  {
    title: "Project 6",
    imgSrc: require("../assets/images/project-six.png"),
    demoLink: "https://eclectic-starburst-503a95.netlify.app/",
    sourceLink: "https://github.com/aruntutter/digital-clock",
  },
];

const Projects = () => {
  const goToGitHubRepositories = () => {
    window.location.href = "https://github.com/aruntutter?tab=repositories";
  };

  return (
    <div id="projects" className="projects-container">
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
      <div className="github-repo">
        <button onClick={goToGitHubRepositories}>GitHub Repository</button>
      </div>
    </div>
  );
};

export default Projects;
