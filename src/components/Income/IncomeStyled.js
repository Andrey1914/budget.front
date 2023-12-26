import styled from "styled-components";
import { Card } from "@mui/material";

export const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
  }
  .income-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export const TotalIncomeContainer = styled(Card)`
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
