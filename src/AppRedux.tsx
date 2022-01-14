import React from 'react';
import s from './AppRedux.module.css';
import {CounterRedux} from "./CounterRedux/CounterRedux"
import {SetCounterRedux} from "./CounterRedux/SetCounterRedux";

function AppRedux() {
  return (
    <div className={s.appWrapp}>
      <div className={s.body}>
        <SetCounterRedux/>
      </div>
      <div className={s.body}>
        <CounterRedux/>
      </div>
    </div>
  );
}

export default AppRedux;
