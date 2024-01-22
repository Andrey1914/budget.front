import React, { useEffect } from "react";

import { useGlobalContext } from "../../context/globalContext";

import TransactionItem from "../TransactionItem/TransactionItem.jsx";

import { ContainerStyled } from "./AllTransactionsStyled.js";

import { Container, Typography } from "@mui/material";
import { theme } from "../../styles/theme.js";

export default function AllTransactions() {
  const {
    incomes,
    getIncomes,
    deleteIncome,
    expenses,
    getExpenses,
    deleteExpense,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  });

  return (
    <ContainerStyled>
      <Container maxWidth="sm" style={{ paddingTop: theme.spacing(5) }}>
        <Typography
          component="h2"
          variant="p"
          style={{ padding: theme.spacing(3, 0), textAlign: "center" }}
        >
          Надходження
        </Typography>
        {incomes.map((income) => {
          const { _id, title, amount, date, category, description, type } =
            income;
          return (
            <TransactionItem
              key={_id}
              id={_id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              type={type}
              category={category}
              indicatorColor="var(--green)"
              deleteItem={deleteIncome}
            />
          );
        })}
      </Container>

      <Container maxWidth="sm" style={{ paddingTop: theme.spacing(5) }}>
        <Typography
          component="h2"
          variant="p"
          style={{ padding: theme.spacing(3, 0), textAlign: "center" }}
        >
          Видатки
        </Typography>

        {expenses.map((expense) => {
          const { _id, title, amount, date, category, description, type } =
            expense;
          return (
            <TransactionItem
              key={_id}
              id={_id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              type={type}
              category={category}
              indicatorColor="var(--red)"
              deleteItem={deleteExpense}
            />
          );
        })}
      </Container>
    </ContainerStyled>
  );
}
