import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    await axios.post(`${BASE_URL}add-income`, income).catch((err) => {
      setError(err.response.data.message);
    });

    getIncomes();
  };

  const getIncomes = async () => {
    if (incomes && incomes.length > 0) {
      return;
    }

    const response = await axios.get(`${BASE_URL}get-incomes`);

    if (response && response.data) {
      setIncomes(response.data);
    }
  };

  const deleteIncome = async (id) => {
    await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncomes = () => {
    let totalIncomes = 0;
    incomes.forEach((income) => {
      totalIncomes = totalIncomes + income.amount;
    });

    return totalIncomes;
  };

  const addExpense = async (expense) => {
    await axios.post(`${BASE_URL}add-expense`, expense).catch((err) => {
      setError(err.response.data.message);
    });
    getExpenses();
  };

  const getExpenses = async () => {
    if (expenses && expenses.length > 0) {
      return;
    }

    const response = await axios.get(`${BASE_URL}get-expenses`);

    if (response && response.data) {
      setExpenses(response.data);
    }
  };

  const deleteExpense = async (id) => {
    await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount;
    });

    return totalExpenses;
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
