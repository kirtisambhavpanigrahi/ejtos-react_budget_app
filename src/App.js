import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

import { AppProvider } from "./context/AppContext";
import CashType from "./components/CashType";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          {/* // Budget component */}
          <div className="col-sm">
            <Budget />
          </div>
          {/* //Remaining component */}
          <div className="col-sm">
            <Remaining />
          </div>
          {/* //ExpenseTotal component */}
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <CashType />
          </div>
          <h3 className='mt-3'>Allcoation</h3>
          {/* //ExpenseList component */}
          <div className="row mt-3">
            <ExpenseList />
          </div>
          <h3 className='mt-3'>change Allocation</h3>
           {/* //AllocationForm component */}
          <div className="row mt-3">
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
