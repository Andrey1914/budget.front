import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/layouts";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

import { IncomeStyled, TotalIncomeContainer } from "./IncomeStyled";

import { Typography } from "@mui/material";

export default function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncomes } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  });
  return (
    <IncomeStyled>
      <InnerLayout>
        <Typography component="h1" variant="h4" style={{ textAlign: "center" }}>
          Надходження
        </Typography>
        <TotalIncomeContainer
          style={{ background: "#fcf6f9", border: "1px solid #ffffff" }}
        >
          <h2>
            Всього: <span>PLN {totalIncomes()}</span>
          </h2>
        </TotalIncomeContainer>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}
