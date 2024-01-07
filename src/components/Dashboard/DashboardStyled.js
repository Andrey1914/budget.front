import styled from "styled-components";
import { Typography, Paper } from "@mui/material";

export const DashboardContainer = styled("div", {
  name: "Container",
  slot: "wrapper",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: theme.spacing(4),
  },
}));

export const Title = styled(Typography, {
  name: "Title",
  slot: "typography",
})(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

export const SalaryTitle = styled(Typography, {
  name: "Subtitle",
  slot: "typography",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
  },
}));

export const SalaryItem = styled(Paper, {
  name: "Paper",
  slot: "paper",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "#fcf6f9",
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

export const AmountItem = styled(SalaryItem, {
  name: "Paper",
  slot: "paper",
})(({ theme }) => ({
  margin: theme.spacing(0),
  flexDirection: "column",
}));
