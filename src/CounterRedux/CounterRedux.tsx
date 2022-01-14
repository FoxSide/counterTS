import React from "react";
import s from './CounterRedux.module.css';
import {Button} from "../Counter/Button/Button";
import {IncCounterAC, CounterStateType, ResetCounterAC} from "../bll/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {SetCounterStateType} from "../bll/setCounter-reducer";

export const CounterRedux = () => {
  const setCounter = useSelector<AppStateType, SetCounterStateType>((state) => state.setCounter)
  const counter = useSelector<AppStateType, CounterStateType>((state) => state.counter)
  const dispatch = useDispatch()

  const incCounter = () => {
    dispatch(IncCounterAC())
  }
  const subCounter = () => {
    dispatch(ResetCounterAC())
  }

  let screenItem = () => {
    if (setCounter.error) {
      return <div className={s.error}>Incorrect value!</div>
    }
    if (setCounter.showStartText) {

      return <div className={s.text}>Enter values and press 'set'</div>
    } else {
      return <div className={counter.minValue === counter.maxValue ? s.red : s.count}>{counter.minValue}</div>
    }
  }
  const Error = () => setCounter.minValue >= setCounter.maxValue || setCounter.minValue < 0 || setCounter.maxValue < 0

  return (
    <>
      <div className={s.screen}>
        {screenItem()}
      </div>
      <div className={s.buttons}>
        <Button title={'inc'} callBack={incCounter} value={counter.minValue === counter.maxValue || Error() || setCounter.disabledSet}/>
        <Button title={'reset'} callBack={subCounter} value={counter.minValue === 0 || Error()}/>
      </div>
    </>
  );
}