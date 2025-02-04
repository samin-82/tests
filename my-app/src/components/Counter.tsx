import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { amountIncrement, decrement, increment } from "../redux/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>{count}</div>;
      <button onClick={() => dispatch(amountIncrement(10))}>increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

export default Counter;
