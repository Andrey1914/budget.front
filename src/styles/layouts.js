import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1.5rem;
    height: 100%;
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const InnerLayout = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 2rem 1.5rem;
  }
`;
