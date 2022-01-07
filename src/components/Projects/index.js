import React from "react";

import "./style.css";
import { projectsWeb, projectsMobile } from "../../data/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export const Projects = () => {
  const renderProjectsWeb = () => {
    return projectsWeb.map(({ title, image, githubLink, projectLink }) => {
      return (
        <div className="projects-container-portfolio-item">
          <h3 className="subtitle-project text-warning">{title}</h3>
          <img className="image-project-web" src={image} alt={title} />
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <GitHubIcon
                className="text-light project-link"
                sx={{ fontSize: "2rem" }}
              />
            </a>
            <a href={projectLink} target="_blank" rel="noreferrer">
              <LanguageIcon
                className="text-light project-link"
                sx={{ fontSize: "2rem" }}
              />
            </a>
          </div>
        </div>
      );
    });
  };

  const renderProjectsMobile = () => {
    return projectsMobile.map(({ title, image, githubLink }) => {
      return (
        <div className="projects-container-portfolio-item">
          <h3 className="subtitle-project text-warning">{title}</h3>
          <img className="image-project-mobile" src={image} alt={title} />
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <GitHubIcon
                className="text-light project-link"
                sx={{ fontSize: "2rem" }}
              />
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="projects" className="bg-dark text-light">
      <div className="container projects-container">
        <h2 className="text-warning title">Projects</h2>
        <h3 className="text-warning subtitle">Websites</h3>
        <div className="projects-container-portfolio-web">
          {renderProjectsWeb()}
        </div>
        <h3 className="text-warning subtitle">Mobile Applications</h3>
        <div className="projects-container-portfolio-mobile">
          {renderProjectsMobile()}
        </div>
      </div>
    </section>
  );
};
