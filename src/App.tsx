import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter/Counter";

function App() {
  const minValue = 0
  const maxValue = 5
  const [count, setCount] = useState<number>(minValue)

  const addCount = () => {
    if (minValue < maxValue) {
      setCount(count + 1)
    }
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className={s.appWrap}>
    <Counter count={count} callBackAdd={addCount} callBackReset={resetCount}/>
    </div>
  );
}

export default App;
