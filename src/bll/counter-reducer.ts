export type CounterStateType = {
  minValue: number
  maxValue: number
}
type ActionType = IncCounterACType | ResetCounterACType | SetCounterACType
type IncCounterACType = {
  type: 'INC-COUNTER'
}
type ResetCounterACType = {
  type: 'SUB-COUNTER'
}
type SetCounterACType = {
  type: 'SET-COUNTER',
  minValue: number,
  maxValue: number
}

let initialState: CounterStateType = {
  minValue: 0,
  maxValue: 5
}

export const IncCounterAC = (): IncCounterACType => {
  return {type: 'INC-COUNTER'}
}
export const ResetCounterAC = (): ResetCounterACType => {
  return {type: 'SUB-COUNTER'}
}
export const SetCounterAC = (minValue: number, maxValue: number): SetCounterACType => {
  return {type: 'SET-COUNTER', minValue, maxValue}
}

export const counterReducer = (state = initialState, action: ActionType): CounterStateType => {
  switch (action.type) {
    case 'INC-COUNTER':
      return {...state, minValue: state.minValue < state.maxValue ? state.minValue + 1 : state.minValue}
    case 'SUB-COUNTER':
      return {...state, minValue: state.minValue = 0}
    case 'SET-COUNTER':
      return {...state, minValue: action.minValue, maxValue: action.maxValue}
  }
  return state
}