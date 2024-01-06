import React, { useEffect } from "react";

import { useGlobalContext } from "../../context/globalContext";
import History from "../../history/History";
import { InnerLayout } from "../../styles/layouts";
import { dollar } from "../../utils/icons";
import Chart from "../Chart/Chart";

import { Title, SalaryTitle, SalaryItem, AmountItem } from "./DashboardStyled";

import { Grid, Typography } from "@mui/material";

export default function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncomes,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  });

  return (
    <InnerLayout>
      <Title component="h1" variant="h4">
        Усі транзакції.
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Chart />
          <Grid container spacing={1} my={1}>
            <Grid item xs={6} md={4}>
              <AmountItem>
                <SalaryTitle component="h2" fontSize="12px">
                  Весь прибуток.
                </SalaryTitle>
                <Typography component="p">
                  {dollar} {totalIncomes()}
                </Typography>
              </AmountItem>
            </Grid>
            <Grid item xs={6} md={4}>
              <AmountItem>
                <SalaryTitle component="h2" fontSize="12px">
                  Всі витрати.
                </SalaryTitle>
                <Typography component="p">
                  {dollar} {totalExpenses()}
                </Typography>
              </AmountItem>
            </Grid>
            <Grid item xs={6} md={4}>
              <AmountItem>
                <SalaryTitle component="h2" fontSize="12px">
                  Залишок коштів.
                </SalaryTitle>
                <Typography component="p" color="var(--color-green)">
                  {dollar} {totalBalance()}
                </Typography>
              </AmountItem>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <SalaryTitle component="h2">
            Мін <span>Прибуток</span> Макс
          </SalaryTitle>
          <SalaryItem>
            <Typography component="p">
              PLN {Math.min(...incomes.map((item) => item.amount))}
            </Typography>
            <Typography component="p" textAlign="end">
              PLN {Math.max(...incomes.map((item) => item.amount))}
            </Typography>
          </SalaryItem>
          <SalaryTitle component="h2">
            Мін <span>Видаток</span> Макс
          </SalaryTitle>
          <SalaryItem>
            <Typography component="p">
              PLN {Math.min(...expenses.map((item) => item.amount))}
            </Typography>
            <Typography component="p" textAlign="end">
              PLN {Math.max(...expenses.map((item) => item.amount))}
            </Typography>
          </SalaryItem>
          <History />
        </Grid>
      </Grid>
    </InnerLayout>
  );
}
