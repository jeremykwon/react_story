import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCount } from '../sampleApi';

const initialState = {
	value: 0,
	status: 'idle',
};

const incrementAsync = createAsyncThunk(
    'counter/fetchCount',	// 액션 이름을 정의해 준다.
    async (amount) => {
		const response = await fetchCount(amount);
		return response.data;
	}
);

const counterSlice = createSlice({
	name: 'counter',
	initialState,

	reducers: {
	  increment: (state) => {
		state.value += 1;
	  },
	  decrement: (state) => {
		state.value -= 1;
	  },
	  incrementByAmount: (state, action) => {
		state.value += action.payload;
	  },
	},
	
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				state.value += action.payload;
			})
			.addCase(incrementAsync.rejected, (state, action) => {
				console.log(action)
				state.status = 'loading';
			});
	},
});

// counter는 store에서 정의된것과 맞춰주면 된다.
const selectCount = (state) => state.counter.value;

const incrementIfOdd = (amount) => (dispatch, getState) => {
	const currentValue = selectCount(getState());
	if (currentValue % 2 === 1) {
		dispatch(incrementByAmount(amount));
	}
};

// counterSlice.actions 안에 reducer들이 들어있다.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export { incrementAsync, incrementIfOdd, selectCount };

// configureStore 에는 reducer를 넣어주어야 한다.
export default counterSlice.reducer;
