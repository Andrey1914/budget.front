import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding: 0.5rem;
  gap: 0.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1.5rem;
    flex-direction: row;
    gap: 1.5rem;
  }
`;

export const InnerLayout = styled("div", {
  name: "Container",
  slot: "wrapper",
})(({ theme }) => ({
  width: "100%",
  padding: "10rem 0.5rem",
  [theme.breakpoints.up("lg")]: {
    padding: "7rem 1.5rem",
  },
}));
