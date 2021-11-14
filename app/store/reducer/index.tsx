const ALL_STATE = {
  isRegister: false,
  isSigned: false,
  isLogin: false,
  loginError: false,
};
function reducer(state = ALL_STATE, action:any) {
  switch (action.type) {
    case "signupSucess":
      return { ...state };
      break;
    case "showLoginError":
      state.loginError = action.loginMessage;
      return {
        ...state,
        loginError: state.loginError,
      };
      break;

    default: {
      return state;
    }
  }
}

export default reducer;
