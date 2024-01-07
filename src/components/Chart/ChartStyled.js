import styled from "styled-components";
import { Paper } from "@mui/material";

export const ChartStyled = styled(Paper, {
  name: "Paper",
  slot: "paper",
})(({ theme }) => ({
  padding: theme.spacing(3),
}));
