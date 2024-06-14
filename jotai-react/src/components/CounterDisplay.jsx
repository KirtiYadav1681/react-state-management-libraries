import React from 'react';
import { atom, useAtom } from "jotai";

export const countAtom = atom(0);

const CounterDisplay = () => {
    const [count] = useAtom(countAtom);

  return (
    <div>
        <h1>Counter : {count} </h1>
    </div>
  )
}

export default CounterDisplay