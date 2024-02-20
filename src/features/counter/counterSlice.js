import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    calculate: (state, action) => {
      const { firstValue, secondValue, operation } = action.payload;
      let result;
      switch (operation) {
        case 'sum':
          result = firstValue + secondValue;
          break;
        case 'res':
          result = firstValue - secondValue;
          break;
        case 'multiplication':
          result = firstValue * secondValue;
          break;
        case 'division':
          result = firstValue / secondValue;
          break;
        default:
          result = 0;
      }

      state.value = result;
    }
  },
});

export const { calculate } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;