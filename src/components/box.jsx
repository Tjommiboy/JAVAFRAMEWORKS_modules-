import React from "react";
import styled from "styled-components";

import { useState } from "react";

function Nav({ isActive, onClick, children }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px",
        margin: "10px",
        backgroundColor: isActive ? "#6a0572" : "#f4a261",
        color: "white",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
}

export default Nav;
