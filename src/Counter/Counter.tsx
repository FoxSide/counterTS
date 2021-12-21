import React from "react";
import s from './Counter.module.css';
import {Button} from "./Button/Button";


type PropsType = {
  maxValue: number
  minValue: number
  count: number
  callBackAdd: () => void
  callBackReset: () => void
}

export const Counter = ({count, callBackAdd, callBackReset, maxValue, minValue}: PropsType) => {

  return (
    <>
      <div className={s.screen}>
        <div className={count === maxValue ? s.red : s.count}>{count}</div>
      </div>
      <div className={s.buttons}>
        <Button title={'inc'} callBack={callBackAdd} value={count === maxValue}/>
        <Button title={'reset'} callBack={callBackReset} value={count === minValue}/>
      </div>
    </>
  );
}