import React from "react";

import "./style.css";

export const Footer = () => {
  return (
    <section className="color text-light">
      <div className="container footer-container">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/lucas-silva-de-andrade/"
          target="_blank"
          rel="noreferrer"
          className="link-name text-warning"
        >
          Lucas Andrade
        </a>
      </div>
    </section>
  );
};
