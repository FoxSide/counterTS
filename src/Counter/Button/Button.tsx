import React from "react";
import s from './Button.module.css';

type PropsType = {
  title: string
  callBack: () => void
  value: boolean
}
export const Button = (props: PropsType) => {

  const onClickHandler = () => props.callBack()

  return (
      <button disabled={props.value} className={s.button} onClick={onClickHandler}>{props.title}</button>
  )
}