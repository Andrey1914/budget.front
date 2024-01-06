import React, {
  // useState,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { Route, Routes } from "react-router-dom";

// import { MainLayout } from "./styles/layouts";

import Orb from "./components/Orb/Orb";
// import Navigation from "./components/Navigation/Navigation";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Income from "./components/Income/Income";
// import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Header/Header";

const Income = lazy(() => import("./components/Income/Income"));
const Expenses = lazy(() => import("./components/Expenses/Expenses"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const AllTransactions = lazy(() =>
  import("./components/AllTransactions/AllTransactions")
);

function App() {
  // const [active, setActive] = useState(1);

  // const displayData = () => {
  //   switch (active) {
  //     case 1:
  //       return <Dashboard />;
  //     case 2:
  //       return <Dashboard />;
  //     case 3:
  //       return <Income />;
  //     case 4:
  //       return <Expenses />;
  //     default:
  //       return <Dashboard />;
  //   }
  // };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <>
      <div>
        {orbMemo}
        <Suspense>
          <Header />
          <main>
            {/* <MainLayout>
              <Navigation active={active} setActive={setActive} />
              {displayData()}
            </MainLayout> */}
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
