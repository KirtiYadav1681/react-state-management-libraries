import React from 'react';
import useCounterStore from './zustand/countStore';

const Counter = () => {
    const {count, increaseCount, resetCount, decreaseCount} = useCounterStore((state) => ({
        count: state.count,
        increaseCount: state.increaseCount,
        resetCount: state.resetCount,
        decreaseCount: state.decreaseCount
    }));

  return (
    <div>
        <h1> Count: {count} </h1>
        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={resetCount}>Reset Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  )
}

export default Counter