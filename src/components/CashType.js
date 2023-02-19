import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CashType = (props) => {
  const { dispatch } = useContext(AppContext);

  const setCurrency = (value) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: value,
    });
  };
  return (
    <select
      className="alert alert-success"
      id="inputGroupSelect01"
      onChange={(event) => setCurrency(event.target.value)}
    >
      <option value="$" name="Dollar">
        $ Dollar
      </option>
      <option value="£" name="pound" selected>
        £ Pound
      </option>
      <option value="€" name="euro">
        € Euro
      </option>
      <option value="₹" name="rupee">
      ₹ Rupee
      </option>
    </select>
  );
};

export default CashType;
