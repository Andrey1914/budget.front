import React, { useContext, useState } from "react";
import axios from "axios";

// const BASE_URL = "http://localhost:10000/api/v1/";
const BASE_URL = "https://budget-server-owpc.onrender.com/api/v1";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":
        // "http://localhost:10000/api/v1/",
        "https://budget-server-owpc.onrender.com/api/v1",
      "Content-Type": "application/json",
      " Access-Control-Allow-Methods": "POST, GET, OPTIONS, HEAD",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  };

  const addIncome = async (income) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/add-income`,
        income,
        options
      );

      console.log("Доход успешно добавлен:", response.data);

      await getIncomes();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const getIncomes = async () => {
    if (incomes && incomes.length > 0) {
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/get-incomes`, options);

      if (response && response.data) {
        setIncomes(response.data);
      }
    } catch (error) {
      console.log("Ошибка при получении доходов:", error);
    }
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-income/${id}`, options);
      await getIncomes();
    } catch (err) {
      console.log("Ошибка при удалении дохода:", err);
    }
  };

  const totalIncomes = () => {
    if (!Array.isArray(incomes)) {
      console.log("Ошибка: incomes должен быть массивом");
      return;
    }

    return incomes.reduce((total, income) => {
      if (!income.amount) {
        console.log("Ошибка: у дохода должно быть свойство amount");
        return total;
      }

      return total + income.amount;
    }, 0);
  };

  const addExpense = async (expense) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/add-expense`,
        expense,
        options
      );

      console.log("Расход успешно добавлен:", response.data);

      await getExpenses();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const getExpenses = async () => {
    if (expenses && expenses.length > 0) {
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/get-expenses`, options);

      if (response && response.data) {
        setExpenses(response.data);
      }
    } catch (err) {
      console.log("Ошибка при получении расходов:", err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-expense/${id}`, options);
      await getExpenses();
    } catch (err) {
      console.log("Ошибка при удалении расхода:", err);
    }
  };

  const totalExpenses = () => {
    if (!Array.isArray(expenses)) {
      console.log("Ошибка: expenses должен быть массивом");
      return;
    }

    return expenses.reduce((total, expense) => {
      if (!expense.amount) {
        console.log("Ошибка: у расхода должно быть свойство amount");
        return total;
      }

      return total + expense.amount;
    }, 0);
  };

  const totalBalance = () => {
    return totalIncomes() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncomes,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
