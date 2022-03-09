import { createSlice } from '@reduxjs/toolkit';

// createSlice를 사용함으로써 createAction, createReducer 등의 사용이 불필요하다.
export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 0
  },
  
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  },

  extraReducers: {}
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;