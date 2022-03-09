import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/counterSlice';


const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{count}</p>
            <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button
                aria-label="Decrement value"
                onClick={() => dispatch(incrementByAmount(10))}
                >
                    incrementByAmount
                </button>
            </div>
        </div>
    )
}

export default Counter;