import styled from "styled-components";
import { Paper } from "@mui/material";

export const HistoryStyled = styled("div", {
  name: "Container",
  slot: "wrapper",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  padding: theme.spacing(3, 0),
}));

export const HistoryItem = styled(Paper, {
  name: "Paper",
  slot: "paper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));
