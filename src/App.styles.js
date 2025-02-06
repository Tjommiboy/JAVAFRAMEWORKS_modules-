import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

export const BaseButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: 0;
  background-color: ${(props) => props.theme.color.fuchsia};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;
export const PrimaryButton = styled(BaseButton)`
  background-color: blue;
  :hover {
    background-color: green;
  }
`;
export const SeconderyButton = styled(BaseButton)`
  background-color: aqua;
  :hover {
    background-color: yellow;
  }
`;

export const ThemeButton = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.color.primary};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
`;

export const WeirdButton = styled(BaseButton)`
  padding: 10px 20px;
  border-radius: 5px;

  font-weight: 900;
  background-color: ${(props) =>
    props.$weird ? "blue" : props.theme.color.primary};
  :hover {
    background-color: ${(props) => (props.$weird ? "purple" : "blue")};
  }
`;
