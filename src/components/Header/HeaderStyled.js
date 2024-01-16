import { NavLink } from "react-router-dom";
import { Typography, List, ListItem, styled } from "@mui/material";

export const NavigationList = styled(List, {
  name: "List",
  slot: "list",
})(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: theme.spacing(3),
  },

  [theme.breakpoints.up("md")]: {
    flexDirection: "row-reverse",
    gap: theme.spacing(4),
  },
}));

// export const NavigationLink = styled(NavLink)`
//   font-size: 1rem;
//   font-family: "Montserrat";
//   font-weight: 700;
//   color: var(--text);
//   text-decoration: none;
//   transition: opacity 250ms ease-in-out;
//   position: relative;
//   &::after {
//     content: "";
//     position: absolute;
//     bottom: -0.3rem;
//     right: 0;
//     left: 0;
//     width: 0;
//     transform: scaleX(1);
//     height: 0.15rem;
//     border-radius: 0.075rem;
//     background: var(--text);
//     transition: 0.3s ease-in-out;
//   }
//   &:hover::after {
//     width: 100%;
//     color: var(--text);
//   }
//   @media (max-width: 567px) {
//     font-size: 14px;
//     font-weight: 400;
//   }
// `;

export const NavigationLink = styled(NavLink, {
  name: "NavLink",
  slot: "navigation",
})(({ theme }) => ({
  fontFamily: "inherit",
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  color: "var(--text)",
  textDecoration: "none",
  transition: theme.transitions.opacity,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-0.3rem",
    right: 0,
    left: 0,
    width: 0,
    transform: "scaleX(1)",
    height: "0.15rem",
    borderRadius: "0.075rem",
    background: "var(--text)",
    // transition: theme.transitions.easing.easeInOut,
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
    color: "var(--text)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const DrowerItem = styled(ListItem, {
  name: "List",
  slot: "listItem",
})(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  justifyContent: "center",
  fontFamily: "inherit",
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(1, 0),
  color: "var(--text)",
}));

export const Title = styled(Typography, {
  name: "Title",
  slot: "title",
})(({ theme }) => ({
  fontFamily: "inherit",
  fontSize: theme.spacing(3),
  fontWeight: theme.typography.fontWeightBold,
  color: "var(--text)",
}));
