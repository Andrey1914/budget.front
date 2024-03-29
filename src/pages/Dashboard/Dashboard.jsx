import React, { useEffect } from 'react';

import { useGlobalContext } from 'context/globalContext';

import History from 'history/History';

import { dollar } from 'utils/icons';

import Chart from 'components/Chart/Chart';

import {
  DashboardContainer,
  Title,
  SalaryTitle,
  SalaryItem,
  AmountItem,
} from 'pages/Dashboard/DashboardStyled';

import { InnerLayout } from 'styles/layouts';

import { Grid, Typography } from '@mui/material';

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
  }, [getIncomes, getExpenses]);

  return (
    <InnerLayout>
      <Title component="h1" variant="h3">
        Усі транзакції.
      </Title>
      <DashboardContainer>
        <Grid item xs={6} md={6}>
          <Chart />
          <Grid container spacing={1} my={1}>
            <Grid item xs={6} md={4}>
              <AmountItem style={{ background: 'var(--bg-box)' }}>
                <SalaryTitle component="h2">Весь прибуток.</SalaryTitle>
                <Typography component="p" color="var(--green)">
                  {dollar} {totalIncomes()}
                </Typography>
              </AmountItem>
            </Grid>
            <Grid item xs={6} md={4}>
              <AmountItem style={{ background: 'var(--bg-box)' }}>
                <SalaryTitle component="h2">Всі витрати.</SalaryTitle>
                <Typography component="p" color="var(--red)">
                  {dollar} {totalExpenses()}
                </Typography>
              </AmountItem>
            </Grid>
            <Grid item xs={6} md={4}>
              <AmountItem style={{ background: 'var(--bg-box)' }}>
                <SalaryTitle component="h2">Залишок коштів.</SalaryTitle>
                <Typography component="p" color="var(--green)">
                  {dollar} {totalBalance()}
                </Typography>
              </AmountItem>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6}>
          <SalaryTitle component="h2">
            Мін <span>Прибуток</span> Макс
          </SalaryTitle>
          <SalaryItem style={{ background: 'var(--bg-box)' }}>
            <Typography component="p" color="var(--green)">
              PLN {Math.min(...incomes.map((item) => item.amount))}
            </Typography>
            <Typography component="p" textAlign="end" color="var(--green)">
              PLN {Math.max(...incomes.map((item) => item.amount))}
            </Typography>
          </SalaryItem>

          <SalaryTitle component="h2">
            Мін <span>Видаток</span> Макс
          </SalaryTitle>
          <SalaryItem style={{ background: 'var(--bg-box)' }}>
            <Typography component="p" color="var(--red)">
              PLN {Math.min(...expenses.map((item) => item.amount))}
            </Typography>
            <Typography component="p" textAlign="end" color="var(--red)">
              PLN {Math.max(...expenses.map((item) => item.amount))}
            </Typography>
          </SalaryItem>
          <History />
        </Grid>
      </DashboardContainer>
    </InnerLayout>
  );
}
