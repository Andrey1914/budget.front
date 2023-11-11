import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../history/History";
import { InnerLayout } from "../../styles/layouts";
import { dollar } from "../../utils/icons";
import Chart from "../Chart/Chart";

import { DashboardStyled } from "./DashboardStyled";

export default function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncomes,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  });

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Усі транзакції</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Всього надходжень</h2>
                <p>
                  {dollar} {totalIncomes()}
                </p>
              </div>
              <div className="expense">
                <h2>Всього витрат</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Залишок</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <h2 className="salary-title">
              Мін <span>Надходження</span>Макс
            </h2>
            <div className="salary-item">
              <p>PLN {Math.min(...incomes.map((item) => item.amount))}</p>
              <p>PLN {Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Мін <span>Витрати</span>Макс
            </h2>
            <div className="salary-item">
              <p>PLN {Math.min(...expenses.map((item) => item.amount))}</p>
              <p>PLN {Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
            <History />
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}
