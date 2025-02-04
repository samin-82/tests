import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}
const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    amountIncrement : (state,action)=>{
        state.value +=action.payload;
    }
  },
});
export const { increment, decrement,amountIncrement } = counterSlice.actions;
export default counterSlice.reducer;
