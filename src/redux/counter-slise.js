import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export default counterReducer.reducer;

export const { increment, decrement } = counterReducer.actions;
