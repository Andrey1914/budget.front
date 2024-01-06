import { NavLink } from "react-router-dom";
import { Typography, List, ListItem, styled } from "@mui/material";

export const NavigationList = styled(List)`
  display: flex;
  gap: 1rem;
  @media (max-width: 568px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 2rem;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: 1rem;
  font-family: "Montserrat";
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  transition: opacity 250ms ease-in-out;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    left: 0;
    width: 0;
    transform: scaleX(1);
    height: 0.15rem;
    border-radius: 0.075rem;
    background: var(--text);
    transition: 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
    color: var(--text);
  }
  @media (max-width: 567px) {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const DrowerItem = styled(ListItem)`
  font-size: 1rem;
  justify-content: center;
  font-family: "Montserrat";
  font-weight: 700;
  padding: 0.5rem 0;
  color: var(--text);
`;

export const Title = styled(Typography)`
  font-size: 1.5rem;
  font-family: "Montserrat";
  font-weight: 700;
  color: var(--text);
`;
