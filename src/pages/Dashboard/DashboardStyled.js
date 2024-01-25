import styled from "styled-components";
import { Typography, Paper } from "@mui/material";

export const DashboardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    flexDirection: "row",
    gap: theme.spacing(4),
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

export const SalaryTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
  },
}));

export const SalaryItem = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
}));

export const AmountItem = styled(SalaryItem)(({ theme }) => ({
  margin: theme.spacing(0),
  flexDirection: "column",
}));
