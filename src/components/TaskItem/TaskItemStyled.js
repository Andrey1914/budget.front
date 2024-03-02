import styled from 'styled-components';

import { Card } from '@mui/material';

export const TaskCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));
