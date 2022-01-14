import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {setCounterReducer} from "./setCounter-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

let preloadedState;
const parsistedTodoString = localStorage.getItem('app-state')
if (parsistedTodoString) {
  preloadedState = JSON.parse(parsistedTodoString)
}

const rootReducer = combineReducers({
  counter: counterReducer,
  setCounter: setCounterReducer
})

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
  localStorage.setItem('app-state', JSON.stringify(store.getState()))
})