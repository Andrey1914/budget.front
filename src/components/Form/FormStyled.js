import styled from "styled-components";

export const FormStyled = styled("form", {
  name: "Form",
  slot: "form",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  width: theme.spacing(8),
}));
