import React from "react";
import s from './Counter.module.css';
import {Button} from "./Button/Button";


type PropsType = {
  maxValue: number
  minValue: number
  count: number
  callBackAdd: () => void
  callBackReset: () => void
  changeScreen: boolean
  error: boolean
}

export const Counter = ({count, callBackAdd, callBackReset, maxValue, minValue, changeScreen, error}: PropsType) => {

  let screenItem = () => {
    if (error) {
      return <div className={s.error}>Incorrect value!</div>
    }
    if (changeScreen) {
      return <div className={s.text}>Enter values and press 'set'</div>
    } else {
      return <div className={count === maxValue ? s.red : s.count}>{count}</div>
    }
  }

  return (
    <>
      <div className={s.screen}>
        {screenItem()}
      </div>
      <div className={s.buttons}>
        <Button title={'inc'} callBack={callBackAdd} value={count === maxValue || changeScreen}/>
        <Button title={'reset'} callBack={callBackReset} value={count === minValue || changeScreen}/>
      </div>
    </>
  );
}