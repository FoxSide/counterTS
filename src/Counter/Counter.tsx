import React from "react";
import s from './Counter.module.css';
import {Button} from "./Button/Button";


type PropsType = {
  count: number
  callBackAdd: (count: number) => void
  callBackReset: (count: number) => void
}

export const Counter = ({count, callBackAdd, callBackReset}: PropsType) => {

  return (
    <>
      <div className={s.screen}>
        <div className={count === 5 ? s.red : ''}>{count}</div>
      </div>
      <div className={s.buttons}>
        <Button title={'Inc'} count={count} callBack={callBackAdd} value={count === 5}/>
        <Button title={'Set'} count={count} callBack={callBackReset} value={count === 0}/>
      </div>
    </>
  );
}