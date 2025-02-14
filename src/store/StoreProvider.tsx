import { ReactNode, useReducer } from 'react'
import { StoreContext, DispatchContext } from './context'
import { IStoreState, IAction, reducer, initialState } from './reducer'

interface StoreProviderProps {
  children: ReactNode
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<IStoreState, IAction<any>>(
    reducer,
    initialState,
  )

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  )
}

export default StoreProvider
