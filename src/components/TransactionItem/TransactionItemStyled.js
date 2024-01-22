import styled from "styled-components";
import { Card, Typography } from "@mui/material";

export const TransactionCard = styled(Card)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const IconContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(4),
  height: theme.spacing(4),

  "& i": {
    fontSize: theme.spacing(3),
  },
}));

export const CardContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const CardTitle = styled(Typography)`
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

// export const CardTitle = styled(Typography)(({ theme }) => ({
//   paddingLeft: theme.spacing(4),
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     left: "0",
//     top: "50%",
//     transform: "translateY(-50%)",
//     width: theme.spacing(2),
//     height: theme.spacing(2),
//     borderRadius: "50%",

//     backgroundColor: `${(props) => props.indicator}`,
//   },
// }));

export const InnerContent = styled("div")({});

export const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  color: "var(--text)",
  opacity: 0.8,
}));

export const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "end",
  marginLeft: "auto",
});
