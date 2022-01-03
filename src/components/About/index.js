import React from "react";

import "./style.css";
import Profile from "../../assets/Profile_Image.webp";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { DiDatabase } from "@react-icons/all-files/di/DiDatabase";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { FaDocker } from "@react-icons/all-files/fa/FaDocker";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";

export const About = () => {
  return (
    <section id="about" className="color text-light">
      <div className="container about-container">
        <h2 className="text-warning title">About</h2>
        <div className="content-container">
          <div className="image-container">
            <img src={Profile} className="rounded-circle image" alt="Profile" />
          </div>
          <div className="text-container">
            <h3 className="text-warning subtitle">Hello! I'm Lucas.</h3>
            <p className="description-start">
              I am a Calgary-based Front-End Developer. I had worked as an
              engineer for almost four years. During my career, I developed
              various skills like strong organization, teamwork, time
              management, and problem-solving.
            </p>
            <p className="description-start">
              I discovered my passion for programming when I started to do some
              Front-End courses about HTML, CSS, and JavaScript. After that, I
              never stopped. Now I am focused on improving my knowledge in React
              to boost my projects exploring new technologies.
            </p>
            <h3 className="text-warning subtitle">Why hire me?</h3>
            <p className="description-center">
              I'm able to work with the following technologies:
            </p>
            <div className="skills-container">
              <div className="skills-column-container">
                <p>
                  <SiJavascript color={"#f0db4f"} />
                  &nbsp;JavaScript
                </p>
                <p>
                  <FaReact color={"#61dbfb"} />
                  &nbsp;React and React Native
                </p>
                <p>
                  <FaNodeJs color={"#68a063"} />
                  &nbsp;NodeJs
                </p>
                <p>
                  <SiNextDotJs color={"#ffffff"} />
                  &nbsp;Next.js
                </p>
                <p>
                  <SiGithub color={"white"} />
                  &nbsp;GitHub
                </p>
                <p>
                  <FaDocker color={"#0db7ed"} />
                  &nbsp;Docker
                </p>
              </div>
              <div className="skills-column-container">
                <p>
                  <SiHtml5 color={"#e34c26"} />
                  &nbsp;HTML5
                </p>
                <p>
                  <SiCss3 color={"#264de4"} />
                  &nbsp;CSS3
                </p>
                <p>
                  <SiBootstrap color={"#44048c"} />
                  &nbsp;Bootstrap
                </p>
                <p>
                  <SiTailwindcss color={"#3490dc"} />
                  &nbsp;Tailwind CSS
                </p>
                <p>
                  <DiDatabase color={"#F29111"} />
                  &nbsp;MySQL
                </p>
                <p>
                  <SiGraphql color={"#e535ab"} />
                  &nbsp;GraphQL
                </p>
              </div>
            </div>
            <p className="description-center">
              Main skills that I improved during my career:
            </p>
            <div className="skills-container">
              <div className="skills-column-container">
                <p>&#x27A4;&nbsp; Self Learning</p>
                <p>&#x27A4;&nbsp; Problem Solving</p>
                <p>&#x27A4;&nbsp; Organization</p>
              </div>
              <div className="skills-column-container">
                <p>&#x27A4;&nbsp; Time Management</p>
                <p>&#x27A4;&nbsp; Teamwork</p>
                <p>&#x27A4;&nbsp; Leadership</p>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1ppSTvGuXBSG6AS8-NDX0_WiWTefrpyPW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark button-resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
