import React from "react";
import { Carousel } from "react-bootstrap";

import "./style.css";
import { projectsWeb, projectsMobile } from "../../data/projects";

export const Projects = () => {
  const renderProjectsWeb = () => {
    return projectsWeb.map(
      ({
        title,
        image,
        descriptionApp,
        descriptionStacks,
        githubLink,
        projectLink,
      }) => {
        return (
          <Carousel.Item interval={7500} key={title}>
            <img
              className="d-block carousel-item-image"
              src={image}
              alt={title}
            />
            <Carousel.Caption>
              <h3 className="text-dark subtitle-project carousel-background title-mobile">
                {title}
              </h3>
              <p className="text-dark description carousel-background mobile-view">
                {descriptionApp}
              </p>
              <p className="text-dark description carousel-background mobile-view">
                {descriptionStacks}
              </p>
              <div className="container-button">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary button-links"
                >
                  Code
                </a>
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary button-links"
                >
                  Project
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
    );
  };

  const renderProjectsMobile = () => {
    return projectsMobile.map(
      ({ title, image, descriptionApp, descriptionStacks, githubLink }) => {
        return (
          <Carousel.Item interval={7500} key={title}>
            <img
              className="d-block carousel-item-image-mobile"
              src={image}
              alt={title}
            />
            <Carousel.Caption>
              <h3 className="text-dark subtitle-project  carousel-background">
                {title}
              </h3>
              <p className="text-dark description carousel-background mobile-view">
                {descriptionApp}
              </p>
              <p className="text-dark description carousel-background mobile-view">
                {descriptionStacks}
              </p>
              <div className="container-button">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary button-links"
                >
                  Code
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
    );
  };

  return (
    <section id="projects" className="bg-dark text-light">
      <div className="container projects-container">
        <h2 className="text-warning title">Projects</h2>
        <h3 className="text-warning subtitle">Websites</h3>
        <Carousel fade={true} variant="dark" className="carousel-container">
          {renderProjectsWeb()}
        </Carousel>
        <h3 className="text-warning subtitle">Mobile Applications</h3>
        <Carousel
          fade={true}
          variant="dark"
          className="carousel-container-mobile"
        >
          {renderProjectsMobile()}
        </Carousel>
      </div>
    </section>
  );
};
