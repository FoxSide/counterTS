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
}

export const Counter = ({count, callBackAdd, callBackReset, maxValue, minValue, changeScreen}: PropsType) => {

  return (
    <>
      <div className={s.screen}>
        {changeScreen
          ? <div className={s.text}>Enter value and press 'set'</div>
          : <div className={count === maxValue ? s.red : s.count}>{count}</div>}
      </div>
      <div className={s.buttons}>
        <Button title={'inc'} callBack={callBackAdd} value={count === maxValue || changeScreen}/>
        <Button title={'reset'} callBack={callBackReset} value={count === minValue || changeScreen}/>
      </div>
    </>
  );
}

// <div className={s.text}>Enter value and press 'set'</div>
// <div className={count === maxValue ? s.red : s.count}>{count}</div>