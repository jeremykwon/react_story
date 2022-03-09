// store

/*
  	configureStore-
		redux의 createStore를 추상화 한것으로 번거로운 기본 설정 과정을 자동화한다.
*/
import { 
	configureStore,
	// ThunkAction,
  	// Action,
  	// getDefaultMiddleware
} from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
// import logger from "redux-logger";

export default configureStore({
	reducer: {
		counter: counterReducer
	},
	// middleware: getDefaultMiddleware().concat(logger),
  	// devTools: process.env.NODE_ENV !== "production"
});