const loginModalReducer = (state = { login: false }, action) => {
  switch (action.type) {

    case 'TOGGLE_LOGIN_MODAL':
      return {
        ...state,
        login: !state.login
      };

    default:
      return state;
  }
}

export default loginModalReducer