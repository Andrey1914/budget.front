import styled from "styled-components";
import { Card } from "@mui/material";

export const TotalExpensesContainer = styled(Card, {
  name: "Container",
  slot: "wrapper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(3),
  margin: theme.spacing(3, 0),
  gap: theme.spacing(2),
}));

export const TotalSum = styled("span", {
  name: "Span",
  slot: "sum",
})(({ theme }) => ({
  color: "var(--color-green)",
}));

export const FormContainer = styled("div", {
  name: "Container",
  slot: "wrapper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
