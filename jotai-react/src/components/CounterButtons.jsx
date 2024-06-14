import React from 'react';
import Button from './Button';
import { useAtom } from 'jotai';
import { countAtom } from './CounterDisplay';

const CounterButtons = () => {
    const [count, setCount] = useAtom(countAtom);

    function increaseCount(){
        return setCount(count+1);
    }

    function decreaseCount(){
        return setCount(count-1);
    }

    function resetCount(){
        return setCount(0);
    }

  return (
    <>
        <Button onClick={increaseCount} label="Increase Count" />
        <Button onClick={resetCount} label="Reset Count" />
        <Button onClick={decreaseCount} label="Decrease Count" />
    </>
  )
}

export default CounterButtons