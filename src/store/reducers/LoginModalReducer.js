const loginModalReducer = (state = { login: false }, action) => {
  switch (action.type) {

    case 'TOGGLE_LOGIN_MODAL':
      return {
        ...state,
        login: !state.login
      };

    case 'LOGIN':
      return {
        ...state
      }

    case 'SIGNUP':
      return {
        ...state
      }

    case 'LOGOUT':
      return {
        ...state
      }

    default:
      return state;
  }
}

export default loginModalReducer