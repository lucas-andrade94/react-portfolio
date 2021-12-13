import React from "react";
import Typed from "react-typed";

import "./style.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const moment = require("moment");

const greetingTime = (timeNow) => {
  if (timeNow >= 5 && timeNow < 12) {
    return "MORNING";
  }

  if (timeNow >= 12 && timeNow < 17) {
    return "AFTERNOON";
  }

  if (timeNow >= 17 && timeNow < 19) {
    return "EVENING";
  }

  if (timeNow >= 19 || timeNow < 5) {
    return "NIGHT";
  }
};

export const Home = () => {
  let now = moment().format("HH");
  let nowNumber = parseInt(now);
  let greeting = greetingTime(nowNumber);

  return (
    <section id="home" className="bg-dark text-light">
      <div className="container home-container">
        <div>
          <div className="phrases-container">
            <span className="content">GOOD {greeting}! I'M</span>
            <span className="text-warning name">LUCAS ANDRADE</span>
            <span className="content">
              A{" "}
              <Typed
                strings={[
                  "SOFTWARE",
                  "FRONT-END",
                  "JAVASCRIPT",
                  "REACT",
                  "NODE",
                ]}
                typeSpeed={75}
                backSpeed={50}
                loop
              />{" "}
              DEVELOPER
            </span>
          </div>
          <div className="icones-container">
            <a
              href="https://github.com/lucas-andrade94"
              target="_blank"
              rel="noreferrer"
              className="icones"
            >
              <GitHubIcon className="text-light" sx={{ fontSize: "2.50rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-silva-de-andrade/"
              target="_blank"
              rel="noreferrer"
              className="icones"
            >
              <LinkedInIcon className="text-light" sx={{ fontSize: "3rem" }} />
            </a>
            <a
              href="mailto:andradelucas94@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icones"
            >
              <EmailOutlinedIcon
                className="text-light"
                sx={{ fontSize: "3.25rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
