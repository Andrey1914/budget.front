import styled from "styled-components";
import { Button } from "@mui/material";

export const ButtonStyled = styled(Button)(({ theme }) => ({
  gap: theme.spacing(2),
}));
