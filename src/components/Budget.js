import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch, expense } = useContext(AppContext);
    const setBudget = (value, expense) => {
        const expenses = {
            budget: value,
            expense: expense
        };
        dispatch({
          type: "SET_BUDGET",
          payload: expenses,
        });
      };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: 
            <strong>{currency}</strong>
            <input
            type='number'
            size='10'
            value={budget}
            style={{marginLeft:'5px'}}
            step='10'
            onChange={(event) => setBudget(event.target.value, expense)}
            ></input>
            </span>
        </div>
    );
};
export default Budget;