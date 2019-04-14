import { useReducer, ReactComponentElement } from "react"
import * as React  from "react"
import { createAggregate } from 'redux-aggregate'

type State = {
  count: number
}

const initialState = (): State => ({ count: 0 })

const increment = (state: State) => ({...state, ...{count: state.count + 1}})

const decrement = (state: State) => ({...state, ...{count: state.count - 1}})

const { reducerFactory } = createAggregate({
  increment,
  decrement
}, "counter/")

export const Store = React.createContext(null as any)

export const Provider = (children: (props: State) => JSX.Element) => {
  const [state, dispatch] = useReducer(reducerFactory(initialState), initialState)
  return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}
