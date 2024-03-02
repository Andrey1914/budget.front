import React from // { useEffect }
'react';

import { useGlobalContext } from 'context/globalContext';

import IncomeForm from 'components/Forms/IncomeForm';

import {
  TotalIncomesContainer,
  TotalSum,
  FormContainer,
} from 'pages/Incomes/IncomesStyled';

import { InnerLayout } from 'styles/layouts';

import { theme } from 'styles/theme';

import { Container, Typography } from '@mui/material';

export default function Income() {
  const {
    // getIncomes,

    totalIncomes,
  } = useGlobalContext();

  // useEffect(() => {
  //   getIncomes();
  // });
  return (
    <InnerLayout>
      <Container maxWidth="sm">
        <TotalIncomesContainer
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
            Надходження
          </Typography>

          <Typography
            component="h2"
            variant="h4"
            style={{ textAlign: 'center' }}
          >
            Всього: <TotalSum>PLN {totalIncomes()}</TotalSum>
          </Typography>
        </TotalIncomesContainer>
      </Container>

      <FormContainer>
        <IncomeForm />
      </FormContainer>
    </InnerLayout>
  );
}
