import React, {
  // useMemo,
  lazy,
  Suspense,
} from 'react';
import { Route, Routes } from 'react-router-dom';

// import Orb from './components/Orb/Orb';

import Header from './components/Header/Header';

const Income = lazy(() => import('./pages/Incomes/Incomes'));
const Expenses = lazy(() => import('./pages/Expenses/Expenses'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const AllTransactions = lazy(
  () => import('./pages/AllTransactions/AllTransactions')
);
const Tasks = lazy(() => import('./pages/Tasks/Tasks'));
const TaskForm = lazy(() => import('./pages/TaskForm/TaskForm'));

function App() {
  // const orbMemo = useMemo(() => {
  //   return <Orb />;
  // }, []);

  return (
    <>
      <div>
        {/* {orbMemo} */}
        <Suspense>
          <Header />
          <main>
            {/* {orbMemo} */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/all-transactions" element={<AllTransactions />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/tasks/task-form" element={<TaskForm />} />
            </Routes>
          </main>
        </Suspense>
      </div>
    </>
  );
}

export default App;
