import styled from "styled-components";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button, {
  name: "Button",
  slot: "button",
})(({ theme }) => ({
  gap: theme.spacing(2),
  transition: theme.all,
}));
