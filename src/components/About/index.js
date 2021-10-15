import React from "react";

import { Title, Subtitle, Description } from "../../utils/GlobalStyle";
import {
  AboutContainer,
  Content,
  ProfileImage,
  TextContainer,
  SkillsContainer,
  Skills,
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
    <AboutContainer>
      <Title>About</Title>
      <Content>
        <ProfileImage src={Profile} alt="Profile" />
        <TextContainer>
          <Subtitle>Hello! I'm Lucas.</Subtitle>
          <Description>
            I'm a Calgary based Front-End Developer. I had worked as an engineer
            for almost four years, and I'm now during a transition to a
            Developer career, studying and developing new projects every day to
            improve my skills as a developer. Although successful in my engineer
            career, I have realized that I always had more interest in
            programming area since my undergraduate time.
          </Description>
          <Description>
            I discovered my passion when I started to do some Front-End courses,
            by myself, to learn more about HTML, CSS, and JavaScript. After that
            I never stopped, and now I'm focused on improving my knowledge in
            React and React Native, to boost my projects exploring new
            technologies.
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
                &nbsp;Graphql
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
              <Description>• Self Learning</Description>
              <Description>• Problem Solving</Description>
              <Description>• Organization</Description>
            </Skills>
            <Skills>
              <Description>• Time Management</Description>
              <Description>• Teamwork</Description>
              <Description>• Leadership</Description>
            </Skills>
          </SkillsContainer>
        </TextContainer>
      </Content>
    </AboutContainer>
  );
};
