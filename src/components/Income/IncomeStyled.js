import styled from "styled-components";
import { Card } from "@mui/material";

export const TotalIncomesContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3, 0),
}));

export const TotalSum = styled("span")({
  color: "var(--color-green)",
});

export const FormContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});
