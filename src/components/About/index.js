import React from "react";

import { Title, Subtitle, Description } from "../../utils/GlobalStyle";
import {
  AboutContainer,
  Content,
  ProfileImage,
  TextContainer,
  SkillsContainer,
  Skills,
  ButtonCV,
} from "./style";
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
import { SiKubernetes } from "@react-icons/all-files/si/SiKubernetes";

export const About = () => {
  return (
    <AboutContainer id="about">
      <Title>About</Title>
      <Content>
        <ProfileImage src={Profile} alt="Profile" />
        <TextContainer>
          <Subtitle>Hello! I'm Lucas.</Subtitle>
          <Description>
            I am a Calgary based Front-End Developer. I had worked as an
            engineer for almost four years, and during my career I developed a
            variety of skills like strong organization, team work, time
            management, and problem solving.
          </Description>
          <Description>
            I discovered my passion for programming when I started to do some
            Front-End courses about HTML, CSS, and JavaScript. After that I
            never stopped, and now I am focused on improving my knowledge in
            React, to boost my projects exploring new technologies.
          </Description>
          <Subtitle>Why hire me?</Subtitle>
          <Description>
            I'm able to work with the following technologies:
          </Description>
          <SkillsContainer>
            <Skills>
              <Description>
                <SiJavascript color={"#f0db4f"} />
                &nbsp;JavaScript
              </Description>
              <Description>
                <FaReact color={"#61dbfb"} />
                &nbsp;React and React Native
              </Description>
              <Description>
                <FaNodeJs color={"#68a063"} />
                &nbsp;NodeJs
              </Description>
              <Description>
                <SiGithub color={"white"} />
                &nbsp;GitHub
              </Description>
              <Description>
                <FaDocker color={"#0db7ed"} />
                &nbsp;Docker
              </Description>
            </Skills>
            <Skills>
              <Description>
                <SiHtml5 color={"#e34c26"} />
                &nbsp;HTML5
              </Description>
              <Description>
                <SiCss3 color={"#264de4"} />
                &nbsp;CSS3
              </Description>
              <Description>
                <DiDatabase color={"#F29111"} />
                &nbsp;MySQL
              </Description>
              <Description>
                <SiGraphql color={"#e535ab"} />
                &nbsp;GraphQL
              </Description>
              <Description>
                <SiKubernetes color={"#3970e4"} />
                &nbsp;Kubernetes
              </Description>
            </Skills>
          </SkillsContainer>
          <Description>
            Main skills that I improved during my career:
          </Description>
          <SkillsContainer>
            <Skills>
              <Description>&#x27A4;&nbsp; Self Learning</Description>
              <Description>&#x27A4;&nbsp; Problem Solving</Description>
              <Description>&#x27A4;&nbsp; Organization</Description>
            </Skills>
            <Skills>
              <Description>&#x27A4;&nbsp; Time Management</Description>
              <Description>&#x27A4;&nbsp; Teamwork</Description>
              <Description>&#x27A4;&nbsp; Leadership</Description>
            </Skills>
          </SkillsContainer>
          <ButtonCV
            href="https://drive.google.com/file/d/1ppSTvGuXBSG6AS8-NDX0_WiWTefrpyPW/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </ButtonCV>
        </TextContainer>
      </Content>
    </AboutContainer>
  );
};
