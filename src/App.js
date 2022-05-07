import "./styles.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawAmount } from "./withdrawSlice";

export default function App() {
  const remaningBalance = useSelector((state) => state.withdraw.totalBalance);
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const changeHandle = (event) => {
    setState(event.target.value);
  };
  const clickHandle = () => {
    dispatch(withdrawAmount(state));
  };
  return (
    <div className="App container">
      <div className="col-md-6 offset-2">
        <h3>Bank App in redux </h3>
        <hr></hr>
        <span>Total Balance = 500000 </span>
        <input
          type="text"
          placeholder="Enter withdrawal Amount here"
          onChange={changeHandle}
          className="form-control"
          style={{ marginBottom: "12px" }}
        />
        <button
          onClick={clickHandle}
          style={{ marginBottom: "12px" }}
          className="btn btn-success"
        >
          Withdraw Amount
        </button>

        <h5 style={{ color: "green" }}>
          {" "}
          Remaining Balance = {remaningBalance}
        </h5>
      </div>
    </div>
  );
}
