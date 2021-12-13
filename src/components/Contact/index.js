import React from "react";

import "./style.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Contact = () => {
  return (
    <section id="contact" className="color text-warning">
      <div className="container contact-container">
        <h2 className="title">Contact</h2>
        <div className="social">
          <h3>
            <a
              className="social-links text-warning"
              href="https://github.com/lucas-andrade94"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: "white", fontSize: "3.5rem" }} />
              &nbsp;GitHub
            </a>
          </h3>
          <h3>
            <a
              className="social-links text-warning"
              href="https://www.linkedin.com/in/lucas-silva-de-andrade/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ color: "#2867b2", fontSize: "4rem" }} />
              &nbsp;LinkedIn
            </a>
          </h3>
          <h3>
            <a
              className="social-links text-warning"
              href="mailto:andradelucas94@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailOutlinedIcon sx={{ color: "#D44638", fontSize: "4rem" }} />
              &nbsp;Email
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
};
