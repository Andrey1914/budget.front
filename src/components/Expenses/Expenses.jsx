import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/layouts";
import ExpensesForm from "./ExpenseForm";

import { TotalExpensesContainer, FormContainer } from "./ExpensesStyled";

import { Typography } from "@mui/material";

export default function Expenses() {
  const { getExpenses, totalExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  });
  return (
    <InnerLayout>
      <Typography component="h1" variant="h4" style={{ textAlign: "center" }}>
        Видатки
      </Typography>

      <TotalExpensesContainer
        style={{ background: "#fcf6f9", border: "1px solid #ffffff" }}
      >
        <h2>
          Всього: <span>PLN {totalExpenses()}</span>
        </h2>
      </TotalExpensesContainer>

      <FormContainer>
        <ExpensesForm />
      </FormContainer>
    </InnerLayout>
  );
}
