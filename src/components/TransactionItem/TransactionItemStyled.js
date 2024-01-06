import styled from "styled-components";
import { Card, Typography } from "@mui/material";

export const TransactionItemCard = styled(Card)`
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.5rem;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  i {
    font-size: 2.6rem;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardTitle = styled.h5`
  font-size: 1.3rem;
  padding-left: 2rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;

    background-color: ${(props) => props.indicator};
  }
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  opacity: 0.8;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
`;
