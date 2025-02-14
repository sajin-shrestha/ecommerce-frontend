export const SET_USER = 'SET_USER'
export interface IStoreState {
  user: any | null
}

export interface IAction<T = unknown> {
  type: string
  payload: T
}

export const initialState: IStoreState = {
  user: null,
}

export const reducer = (state: IStoreState, action: IAction): IStoreState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload as any,
      }

    default:
      throw Error('Unknown action')
  }
}
