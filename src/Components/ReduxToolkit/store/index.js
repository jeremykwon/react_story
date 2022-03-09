import { configureStore } from "@reduxjs/toolkit";
  import counterSlice from "../features/exampleSlice"
  
  export default configureStore({
    reducer: {
      counter: counterSlice
    },
  });
  