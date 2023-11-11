import React from "react";
import { ButtonStyled } from "./ButtonStyled";

export default function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {/* <Trash /> */}
      {icon}
      {name}
    </ButtonStyled>
  );
}
