import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/layouts";
import IncomeForm from "./IncomeForm";

import { TotalIncomesContainer, FormContainer } from "./IncomeStyled";

import { Typography } from "@mui/material";

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
      <Typography component="h1" variant="h4" style={{ textAlign: "center" }}>
        Надходження
      </Typography>

      <TotalIncomesContainer
        style={{ background: "#fcf6f9", border: "1px solid #ffffff" }}
      >
        <h2>
          Всього: <span>PLN {totalIncomes()}</span>
        </h2>
      </TotalIncomesContainer>

      <FormContainer>
        <IncomeForm />
      </FormContainer>
    </InnerLayout>
  );
}
