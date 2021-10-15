import React from "react";
import { Subtitle, Title } from "../../utils/GlobalStyle";
import { ContactContainer, Container, Link } from "./style";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <Container>
        <Subtitle>
          <Link
            href="https://github.com/lucas-andrade94"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ color: "white", fontSize: "3.5rem" }} />
            &nbsp;GitHub
          </Link>
        </Subtitle>
        <Subtitle>
          <Link
            href="https://www.linkedin.com/in/lucas-silva-de-andrade/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon sx={{ color: "#2867b2", fontSize: "4rem" }} />
            &nbsp;LinkedIn
          </Link>
        </Subtitle>
        <Subtitle>
          <Link
            href="mailto:andradelucas94@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EmailOutlinedIcon sx={{ color: "#D44638", fontSize: "4rem" }} />
            &nbsp;Email
          </Link>
        </Subtitle>
      </Container>
    </ContactContainer>
  );
};
