import React, {ChangeEvent} from "react";
import s from './SetCounterRedux.module.css'
import {Button} from "../Counter/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {SetCounterAC} from "../bll/counter-reducer";
import {AppStateType} from "../bll/store";
import {
  SetCounterStateType,
  ErrorAC,
  SetMaxValueAC,
  SetMinValueAC,
  ShowStartTextAC, ResetValueAC, DisabledButtonSetAC
} from "../bll/setCounter-reducer";

export const SetCounterRedux = () => {
  const setCounter = useSelector<AppStateType, SetCounterStateType>((state) => state.setCounter)
  const dispatch = useDispatch()

  const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(DisabledButtonSetAC(true))
    dispatch(SetMinValueAC(+e.currentTarget.value))
    dispatch(ShowStartTextAC(true))
    if (Error()) {
      dispatch(ErrorAC(true))
    } else return dispatch(ErrorAC(false))
  }
  const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(DisabledButtonSetAC(true))
    dispatch(SetMaxValueAC(+e.currentTarget.value))
    dispatch(ShowStartTextAC(true))
    if (Error()) {
      dispatch(ErrorAC(true))
    } else return dispatch(ErrorAC(false))
  }
  const setCount = () => {
    dispatch(SetCounterAC(setCounter.minValue, setCounter.maxValue))
    dispatch(ShowStartTextAC(false))
    dispatch(DisabledButtonSetAC(false))
  }
  const resetCount = () => {
    dispatch(ResetValueAC([0,5]))
    dispatch(SetCounterAC(setCounter.minValue, setCounter.maxValue))
  }
  const Error = () => setCounter.minValue >= setCounter.maxValue || setCounter.minValue < 0 || setCounter.maxValue < 0

  return (
    <div>
      <div className={s.inpScreen}>
        <div className={s.item}>Start Value :<input onChange={onChangeHandlerMinValue}
                                                    className={Error() ? s.errorInp : s.inp} type="number"
                                                    value={setCounter.minValue}/></div>
        <div className={s.item}>Max Value :<input onChange={onChangeHandlerMaxValue}
                                                  className={Error() ? s.errorInp : s.inp} type="number"
                                                  value={setCounter.maxValue}/></div>
      </div>
      <div className={s.buttonBody}>
        <Button title={'set'} callBack={setCount} value={Error()}/>
        <Button title={'reset'} callBack={resetCount} value={false}/>
      </div>
    </div>
  )
}