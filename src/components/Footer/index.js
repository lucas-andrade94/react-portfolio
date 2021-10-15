import React from "react";

import { FooterContainer } from "./style";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export const Footer = () => {
  return (
    <FooterContainer>
      Developed by me&nbsp;
      <EmojiEmotionsIcon sx={{ color: "#ffcc33" }} />
    </FooterContainer>
  );
};
