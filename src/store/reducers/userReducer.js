const initialState = {
  user: {
    email: '',
    password: ''
  }
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: { email: action.payload.email, password: action.payload.password } }
    default:
      return state
  }
}
export default userReducers