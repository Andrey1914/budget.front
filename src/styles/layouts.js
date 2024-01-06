import styled from "styled-components";

export const InnerLayout = styled("div", {
  name: "Container",
  slot: "wrapper",
})(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(6, 2),
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(6, 3),
  },
}));
