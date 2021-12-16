import React, {ChangeEvent, useState} from "react";
import s from './SetValue.module.css'
import {Button} from "../Button/Button";

type PropsType = {
  newValue: (minValue: number, maxValue: number) => void
}

export const SetValue = (props: PropsType) => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setmaxValue] = useState(5)

  const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => setMinValue(+e.currentTarget.value)
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => setmaxValue(+e.currentTarget.value)
  const callBackHandler = () => props.newValue(minValue, maxValue)

  const Error =  minValue >= maxValue || minValue < 0 || maxValue < 0

  return (
    <div>
      <div className={s.inpScreen}>
        <div className={s.item}>Start Value :<input onChange={onChangeMinHandler} className={minValue >= maxValue || minValue < 0 ? s.errorInp : s.inp} type="number"/></div>
        <div className={s.item}>Max Value :<input onChange={onChangeMaxHandler} className={maxValue < 0 ? s.errorInp : s.inp} type="number"/></div>
      </div>
      <div className={s.buttonBody}>
        <Button title={'set'} callBack={callBackHandler} value={Error}/>
      </div>
    </div>
  )
}