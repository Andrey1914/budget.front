import styled from "styled-components";

export const ContainerStyled = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, "auto"),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.up("lg")]: {
    width: "1200px",
    flexDirection: "row",
    paddingTop: theme.spacing(6),
  },
}));
