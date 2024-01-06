import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 1200px;
    flex-direction: row;
    padding-top: 7rem;
  }
`;
