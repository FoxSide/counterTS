import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./Counter/Counter";
import {SetValue} from "./Counter/SetValue/SetValue";

function App() {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setmaxValue] = useState(5)
  const [count, setCount] = useState(minValue)
  const [changeScreen, setChangeScreen] = useState(true)
  const [error, setError] = useState(false)



  useEffect(() => {
    let MinValueAsStr = localStorage.getItem('minValue')
    let MaxValueAsStr = localStorage.getItem('maxValue')
    if (MinValueAsStr) {
      let newMinValue = JSON.parse(MinValueAsStr)
      setMinValue(newMinValue)
    }
    if (MaxValueAsStr) {
      let newMaxValue = JSON.parse(MaxValueAsStr)
      setmaxValue(newMaxValue)
    }
    setCount(minValue)
  }, [minValue])

  const addCount = () => {
    if (minValue < maxValue) {
      setCount(count + 1)
    }
  }
  const resetCount = () => {
    setCount(minValue)
  }

  const newValue = (minValue: number, maxValue: number) => {
    setMinValue(minValue)
    setmaxValue(maxValue)
    setCount(minValue)
    setChangeScreen(false)
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }
const callbackChangeScreen = () => {
  setChangeScreen(true)
}
const callbackError = (change: boolean) => {
    setError(change)
}


  return (
    <div className={s.appWrapp}>
      <div className={s.body}>
        <SetValue callbackError={callbackError} callbackChangeScreen={callbackChangeScreen} newValue={newValue}/>
      </div>
      <div className={s.body}>
        <Counter error={error} changeScreen={changeScreen} minValue={minValue} maxValue={maxValue} count={count} callBackAdd={addCount} callBackReset={resetCount}/>
      </div>
    </div>
  );
}

export default App;
