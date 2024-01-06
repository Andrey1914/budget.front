import styled from "styled-components";
import { Card } from "@mui/material";

export const TotalExpensesContainer = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  gap: 0.5rem;

  span {
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-green);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
