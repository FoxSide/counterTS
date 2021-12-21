import React, {ChangeEvent, useEffect, useState} from "react";
import s from './SetValue.module.css'
import {Button} from "../Button/Button";

type PropsType = {
  newValue: (minValue: number, maxValue: number) => void
}

export const SetValue = (props: PropsType) => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setmaxValue] = useState(5)

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
  }, [])

  const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(+e.currentTarget.value)
  }
  const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setmaxValue(+e.currentTarget.value)
  }
  const callBackHandler = () => {
    props.newValue(minValue, maxValue)
  }

  const Error =  minValue >= maxValue || minValue < 0 || maxValue < 0

  return (
    <div>
      <div className={s.inpScreen}>
        <div className={s.item}>Start Value :<input onChange={onChangeMinHandler} className={minValue < 0 || minValue > maxValue ? s.errorInp : s.inp} type="number" value={minValue}/></div>
        <div className={s.item}>Max Value :<input onChange={onChangeMaxHandler} className={maxValue < 0 ? s.errorInp : s.inp} type="number" value={maxValue}/></div>
      </div>
      <div className={s.buttonBody}>
        <Button title={'set'} callBack={callBackHandler} value={Error}/>
      </div>
    </div>
  )
}