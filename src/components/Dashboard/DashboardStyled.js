import styled from "styled-components";
import { Typography } from "@mui/material";

export const Title = styled(Typography)`
  text-align: center;
  padding-bottom: 1rem;
`;

export const SalaryTitle = styled(Typography)`
  display: flex;
  gap: 0.5rem;
`;

export const SalaryItem = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const AmountItem = styled(SalaryItem)`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 0.5rem;
  margin: 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
