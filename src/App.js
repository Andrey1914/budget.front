import React, {
  // useMemo,
  lazy,
  Suspense,
} from "react";
import { Route, Routes } from "react-router-dom";

// import Orb from "./components/Orb/Orb";

import Header from "./components/Header/Header";

const Income = lazy(() => import("./components/Income/Income"));
const Expenses = lazy(() => import("./components/Expenses/Expenses"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const AllTransactions = lazy(() =>
  import("./components/AllTransactions/AllTransactions")
);

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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/all-transactions" element={<AllTransactions />} />
            </Routes>
          </main>
        </Suspense>
      </div>
    </>
  );
}

export default App;
