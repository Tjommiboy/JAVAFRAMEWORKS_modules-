import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primary: "blue", // Pink
    secondary: "#FF1493", // Deep Pink
    lightPink: "#F4C2C2", // Baby Pink
    hotPink: "#FF69B4", // Hot Pink
    fuchsia: "#FF00FF", // Fuchsia
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
