export type SetCounterStateType = {
  minValue: number
  maxValue: number
  error: boolean
  showStartText: boolean
  disabledSet: boolean
}
type ActionType = SetMinValueACType | SetMaxValueACType | SetErrorACType | SetShowStartTextACType | ResetValueACType | DisabledSetAC
type SetMinValueACType = {
  type: 'SET-MIN-VALUE',
  minValue: number
}
type SetMaxValueACType = {
  type: 'SET-MAX-VALUE',
  maxValue: number
}
type SetErrorACType = {
  type: 'ERROR'
  change: boolean
}
type SetShowStartTextACType = {
  type: 'SHOW-START-TEXT'
  change: boolean
}
type ResetValueACType = {
  type: 'RESET-VALUE',
  value: number[]
}
type DisabledSetAC = {
  type: 'DISABLED-BUTTON-SET'
  change: boolean
}

let initialState: SetCounterStateType = {
  minValue: 0,
  maxValue: 5,
  error: false,
  showStartText: true,
  disabledSet: false
}

export const setCounterReducer = (state = initialState, action: ActionType): SetCounterStateType => {
  switch (action.type) {
    case 'SET-MIN-VALUE':
      return {...state, minValue: state.minValue = action.minValue}
    case 'SET-MAX-VALUE':
      return {...state, maxValue: state.maxValue = action.maxValue}
    case 'ERROR':
      return {...state, error: state.error = action.change}
    case 'SHOW-START-TEXT':
      return {...state, showStartText: state.showStartText = action.change}
    case 'RESET-VALUE':
      return {...state, minValue: state.minValue = action.value[0], maxValue: state.maxValue = action.value[1]}
    case 'DISABLED-BUTTON-SET':
      return {...state, disabledSet: state.disabledSet = action.change}
  }
  return state
}

export const SetMinValueAC = (minValue: number): SetMinValueACType => {
  return {type: 'SET-MIN-VALUE', minValue}
}
export const SetMaxValueAC = (maxValue: number): SetMaxValueACType => {
  return {type: 'SET-MAX-VALUE', maxValue}
}
export const ErrorAC = (change: boolean): SetErrorACType => {
  return {type: 'ERROR', change}
}
export const ShowStartTextAC = (change: boolean): SetShowStartTextACType => {
  return {type: 'SHOW-START-TEXT', change}
}
export const ResetValueAC = (value: number[]): ResetValueACType => {
  return {type: 'RESET-VALUE', value}
}
export const DisabledButtonSetAC = (change: boolean): DisabledSetAC => {
  return {type: 'DISABLED-BUTTON-SET', change}
}