import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/layouts";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

import { IncomeStyled } from "./IncomeStyled";

export default function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncomes } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  });
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Надходження</h1>
        <h2 className="total-income">
          Всього: <span>PLN {totalIncomes()}</span>
        </h2>
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
