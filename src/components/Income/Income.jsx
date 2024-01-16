import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/layouts";
import IncomeForm from "./IncomeForm";

import { TotalIncomesContainer, FormContainer, TotalSum } from "./IncomeStyled";

import { Typography } from "@mui/material";
import { theme } from "../../styles/theme";

export default function Income() {
  const {
    getIncomes,

    totalIncomes,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  });
  return (
    <InnerLayout>
      <TotalIncomesContainer
        style={{
          background: "var(--bg-total-container)",
          border: "1px solid #ffffff",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          style={{ textAlign: "center", paddingBottom: theme.spacing(3) }}
        >
          Надходження
        </Typography>

        <Typography component="h2" variant="h4" style={{ textAlign: "center" }}>
          Всього: <TotalSum>PLN {totalIncomes()}</TotalSum>
        </Typography>
      </TotalIncomesContainer>

      <FormContainer>
        <IncomeForm />
      </FormContainer>
    </InnerLayout>
  );
}
