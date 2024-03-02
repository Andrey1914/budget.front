import React, { useEffect } from 'react';

import { useGlobalContext } from 'context/globalContext';

import ExpenseForm from 'components/Forms/ExpenseForm';

import {
  TotalExpensesContainer,
  FormContainer,
  TotalSum,
} from 'pages/Expenses/ExpensesStyled';

import { InnerLayout } from 'styles/layouts';

import { theme } from 'styles/theme';

import { Container, Typography } from '@mui/material';

export default function Expenses() {
  const { getExpenses, totalExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  return (
    <InnerLayout>
      <Container maxWidth="sm">
        <TotalExpensesContainer
          style={{
            background: 'var(--bg-box)',
            border: '1px solid #fff',
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            style={{ textAlign: 'center', paddingBottom: theme.spacing(3) }}
          >
            Видатки
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            style={{ textAlign: 'center' }}
          >
            Всього: <TotalSum>PLN {totalExpenses()}</TotalSum>
          </Typography>
        </TotalExpensesContainer>
      </Container>

      <FormContainer>
        <ExpenseForm />
      </FormContainer>
    </InnerLayout>
  );
}
