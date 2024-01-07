import styled from "styled-components";
import { Typography } from "@mui/material";

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

export const SalaryItem = styled("div", {
  name: "Box",
  slot: "box",
})(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "#fcf6f9",
  border: "1px solid #ffffff",
  boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.06)",
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  borderRadius: theme.spacing(1),
}));

export const AmountItem = styled(SalaryItem, {
  name: "Box",
  slot: "box",
})(({ theme }) => ({
  margin: theme.spacing(0),
  flexDirection: "column",
}));
