import React, { useContext, useState } from 'react';

import axios from 'axios';

const { REACT_APP_LOCALHOST, REACT_APP_HOST } = process.env;

const BASE_URL = REACT_APP_LOCALHOST || REACT_APP_HOST;

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const [tasks, setTasks] = useState([]);
  // const [currentTask, setCurrentTask] = useState('');

  const options = {
    headers: {
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': REACT_APP_LOCALHOST || REACT_APP_HOST,
      'Content-Type': 'application/json',
      ' Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  };

  //Tasks
  const getTasks = async () => {
    if (tasks && tasks.length > 0) {
      return;
    }
    try {
      const response = await axios.get(`${BASE_URL}/get-tasks`, options);

      if (response && response.data && Array.isArray(response.data.tasks)) {
        setTasks(response.data.tasks);
      } else {
        console.error('Ответ сервера не содержит массив задач:', response.data);
      }
    } catch (error) {
      console.error('Помилка отримання списку задач:', error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-task`, task, options);

      console.log('Задачу успішно додано:', response.data);

      getTasks();
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-task/${id}`, options);

      await getTasks();

      console.log('Запис успішно видалено!');
    } catch (err) {
      console.log('Помилка видалення запису:', err);
    }
  };
  //Incomes
  const addIncome = async (income) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/add-income`,
        income,
        options
      );

      console.log('Дохід успішно додано:', response.data);

      await getIncomes();
    } catch (error) {
      setError(error.response.data.message);
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
      console.log('Помилка отримання списку доходів:', error);
    }
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-income/${id}`, options);
      await getIncomes();
      console.log('Запис про дохід успішно видалено!');
    } catch (err) {
      console.log('Помилка видалення надходження:', err);
    }
  };

  const totalIncomes = () => {
    if (!Array.isArray(incomes)) {
      console.log('Помилка: `incomes` має бути масивом');
      return;
    }

    return incomes.reduce((total, income) => {
      if (!income.amount) {
        console.log('Помилка: надходження повинні мати властивість `amount`');
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

      console.log('Видаток успішно додано:', response.data);

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
      console.log('Помилка отримання списку видатків:', err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/delete-expense/${id}`, options);
      await getExpenses();
      console.log('Запис про росхід успішно видалено!');
    } catch (err) {
      console.log('Помилка видалення видатку:', err);
    }
  };

  const totalExpenses = () => {
    if (!Array.isArray(expenses)) {
      console.log('Помилка: `expenses` має бути масивом');
      return;
    }

    return expenses.reduce((total, expense) => {
      if (!expense.amount) {
        console.log('Помилка: видатки повинні мати властивість `amount`');
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
        getTasks,
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
