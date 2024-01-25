import React from "react";

import { ButtonStyled } from "components/Button/ButtonStyled";

export default function Button({ name, icon, onClick, bPad }) {
  return (
    <ButtonStyled
      style={{
        padding: bPad,
      }}
      onClick={onClick}
      variant="outlined"
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}
