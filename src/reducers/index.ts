export interface IInitialState {
  theme: 'light' | 'dark'
}

const initialState: IInitialState = {
  theme: 'light',
}

const reducer = (state = initialState, action: any) => {
  console.log(action.type)
  console.log(action.payload)
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      }

    default:
      return state
  }
}

export default reducer
