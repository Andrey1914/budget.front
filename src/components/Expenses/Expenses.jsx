import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/layouts";
import ExpenseForm from "./ExpenseForm";

import {
  TotalExpensesContainer,
  FormContainer,
  TotalSum,
} from "./ExpensesStyled";

import { Typography } from "@mui/material";
import { theme } from "../../styles/theme";

export default function Expenses() {
  const { getExpenses, totalExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  });
  return (
    <InnerLayout>
      <TotalExpensesContainer
        style={{
          background: "var(--bg-total-container)",
          border: "1px solid #ffffff",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          style={{ textAlign: "center", paddingBottom: theme.spacing(3) }}
        >
          Видатки
        </Typography>

        <Typography component="h2" variant="h4" style={{ textAlign: "center" }}>
          Всього: <TotalSum>PLN {totalExpenses()}</TotalSum>
        </Typography>
      </TotalExpensesContainer>

      <FormContainer>
        <ExpenseForm />
      </FormContainer>
    </InnerLayout>
  );
}
