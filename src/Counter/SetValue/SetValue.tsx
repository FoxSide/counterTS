import React, {ChangeEvent} from "react";
import s from './SetValue.module.css'
import {Button} from "../Button/Button";

type PropsType = {
  onChangeHandlerMin: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerMax: (e: ChangeEvent<HTMLInputElement>) => void
  newValue: () => void
}

export const SetValue = (props: PropsType) => {

  return (
    <div>
      <div className={s.inpScreen}>
        <div className={s.item}>MinValue :<input onChange={props.onChangeHandlerMin} className={s.inp} type="number"/></div>
        <div className={s.item}>MaxValue :<input onChange={props.onChangeHandlerMax} className={s.inp} type="number"/></div>
      </div>
      <div className={s.buttonBody}>
        <Button title={'set'} callBack={props.newValue} value={false}/>
      </div>
    </div>
  )
}