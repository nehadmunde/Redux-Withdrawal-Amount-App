import { createSlice } from "@reduxjs/toolkit";

export const withdrawSlice = createSlice({
  name: "total balance",
  initialState: {
    totalBalance: 500000
  },
  reducers: {
    withdrawAmount: (state, action) => {
      state.totalBalance = state.totalBalance - Number(action.payload);
    }
  }
});

export const { withdrawAmount } = withdrawSlice.actions;
export default withdrawSlice.reducer;
