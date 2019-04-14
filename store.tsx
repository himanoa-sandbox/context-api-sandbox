import { useReducer, Reducer, ReducerAction, Dispatch, ReactComponentElement } from "react"
import * as React  from "react"
import { createAggregate } from 'redux-aggregate'

interface State {
  count: number
}

const initialState = { count: 0 }

const increment = (state: State) => ({...state, ...{count: state.count + 1}})

const decrement = (state: State) => ({...state, ...{count: state.count - 1}})

const { reducerFactory, creators } = createAggregate({
  increment,
  decrement
}, "counter/")

export const actionCreators = creators

export const StoreContext = React.createContext<State>(initialState)
export const DispatchContext = React.createContext<Dispatch<any>>(null as any)

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducerFactory(initialState), initialState)
  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  )
}

export default {}
