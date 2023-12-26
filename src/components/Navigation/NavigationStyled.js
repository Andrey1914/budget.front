import styled from "styled-components";
import { GoSignOut } from "react-icons/go";

export const NavStyled = styled.nav`
  padding: 1rem;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 2rem 1.5rem;
    width: 374px;
    border-radius: 32px;
    gap: 2rem;
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 10px;
  object-fit: cover;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  padding: 0.2rem;
  box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
`;

export const SignOutIcon = styled(GoSignOut)`
  width: 30px;
  height: 30px;
  padding-right: 8px;
`;
