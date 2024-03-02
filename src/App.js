import React, {
  // useMemo,
  lazy,
  // Suspense,
  useEffect,
} from 'react';

import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

// import { PrivateRoute } from 'PrivateRoute';

// import { RestrictedRoute } from 'RestrictedRoute';

import Layout from 'Layout';

import { refreshUser } from './redux/auth/operations';

import { useAuth } from 'hooks/useAuth';
// import Orb from './components/Orb/Orb';

// import Header from './components/Header/Header';

const Income = lazy(() => import('./pages/Incomes/Incomes'));
const Expenses = lazy(() => import('./pages/Expenses/Expenses'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const AllTransactions = lazy(
  () => import('./pages/AllTransactions/AllTransactions')
);
const Tasks = lazy(() => import('./pages/Tasks/Tasks'));
const TaskForm = lazy(() => import('./pages/TaskForm/TaskForm'));

const RegisterPage = lazy(() => import('./pages/Register/Register'));
const LoginPage = lazy(() => import('./pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // const orbMemo = useMemo(() => {
  //   return <Orb />;
  // }, []);

  // return (
  //   <>
  //     <div>
  //       {orbMemo}
  //       <Suspense>
  //         <Header />
  //         <main>
  //           {orbMemo}
  //           <Routes>
  //             <Route path="/" element={<Dashboard />} />
  //             <Route path="/income" element={<Income />} />
  //             <Route path="/expenses" element={<Expenses />} />
  //             <Route path="/all-transactions" element={<AllTransactions />} />
  //             <Route path="/tasks" element={<Tasks />} />
  //             <Route path="/tasks/task-form" element={<TaskForm />} />
  //           </Routes>
  //         </main>
  //       </Suspense>
  //     </div>
  //   </>
  // );
  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Dashboard />} />

            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/all-transactions" element={<AllTransactions />} />
            <Route path="/tasks" element={<Tasks />} />

            <Route path="/task-form" element={<TaskForm />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
