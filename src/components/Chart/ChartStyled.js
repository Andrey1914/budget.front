import styled from "styled-components";
import { SalaryItem } from "../Dashboard/DashboardStyled";

export const ChartStyled = styled(SalaryItem, {
  name: "Box",
  slot: "box",
})(({ theme }) => ({
  display: "block",
  margin: theme.spacing(0),
}));
