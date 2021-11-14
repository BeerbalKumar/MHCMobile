function LoginFunc(data: any) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(data.email)) {
    return (dispatch: any) => {
      dispatch({ type: "showLoginError", loginMessage: "invalidEmail" });
    };
  } else if (data.password !== "123456") {
    return (dispatch: any) => {
      dispatch({
        type: "showLoginError",
        loginMessage: "incorrectPassword",
      });
    };
  } else if (data.email !== "info@gmail.com") {
    return (dispatch: any) => {
      dispatch({
        type: "showLoginError",
        loginMessage: "userNotFound",
      });
    };
  } else {
    return (dispatch: any) => {
      dispatch({ type: "showLoginError", loginMessage: "login successfully" });
    };
  }
}

export { LoginFunc };
