import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skill-container">
      <div className="skill-text">
        <h1>Technical Proficiency</h1>
        <p>
          In my journey through the dynamic landscape of front-end development,
          I've honed my skills across various technologies:
        </p>
      </div>
      <div className="skill-icons">
        <div className="tech-icons">
          <ul>
            {/* HTML icon */}
            <li>
              <img src={require("../assets/images/html-icon.png")} alt="HTML" />
            </li>
            {/* CSS icon */}
            <li>
              <img src={require("../assets/images/css-icon.png")} alt="CSS" />
            </li>
            {/* JS icon */}
            <li>
              <img
                src={require("../assets/images/javascript-icon.png")}
                alt="JavaScript"
              />
            </li>
            {/* API icon */}
            <li>
              <img src={require("../assets/images/api-icon.png")} alt="API" />
            </li>
            {/* REACT icon */}
            <li>
              <img
                src={require("../assets/images/react-icon.png")}
                alt="React"
              />
            </li>
            {/* BOOTSTRAP icon */}
            <li>
              <img
                src={require("../assets/images/bootstrap-icon.png")}
                alt="Bootstrap"
              />
            </li>
            {/* TAILWIND icon */}
            <li>
              <img
                src={require("../assets/images/tailwind-css-icon.png")}
                alt="Tailwind-CSS"
              />
            </li>
            {/* NODE.JS icon */}
            <li>
              <img
                src={require("../assets/images/node-js-icon.png")}
                alt="Node.Js"
              />
            </li>
            {/* GIT icon */}
            <li>
              <img src={require("../assets/images/git-icon.png")} alt="Git" />
            </li>
            {/* GITHUB icon */}
            <li>
              <img
                src={require("../assets/images/github-icon.png")}
                alt="GitHub"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
