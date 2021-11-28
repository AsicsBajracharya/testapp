import React, { useEffect } from "react"
import { useImmerReducer } from "use-immer"

function Login() {
  const initialState = {
    username: {
      value: "",
      hasErrors: false,
      message: "",
    },
    password: {
      value: "",
      hasErrors: false,
      message: "",
    },
    confirmPassword: {
      value: "",
      hasErrors: false,
      message: "",
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "usernameChange":
        draft.username.hasErrors = false
        draft.username.value = action.value
        return
      case "passwordChange":
        draft.password.hasErrors = false
        draft.password.value = action.value
        return
      case "confirmPasswordChange":
        draft.confirmPassword.hasErrors = false
        draft.confirmPassword.value = action.value
        return
      case "usernameRules":
        if (draft.username.value.trim() == "") {
          draft.username.hasErrors = true
          draft.username.message = "You must provide a username"
        }
      case "passwordRules":
        if (draft.password.value.trim() == "") {
          draft.password.hasErrors = true
          draft.password.message = "You must provide a password"
        }
      case "confirmPasswordRules":
        if (draft.confirmPassword.value.trim() == "") {
          draft.confirmPassword.hasErrors = true
          draft.confirmPassword.message = "You must provide a password"
        }
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Please provide your login info</h3>
        </div>
        <div className="card-body">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input onBlur={(e) => dispatch({ type: "usernameRules", value: e.target.value })} onChange={(e) => dispatch({ type: "usernameChange", value: e.target.value })} type="text" className="form-control" id="username" placeholder="username" />
            </div>
            {state.username.hasErrors && <p className="text-danger">{state.username.message}</p>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">password</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input onBlur={(e) => dispatch({ type: "passwordRules", value: e.target.value })} onChange={(e) => dispatch({ type: "passwordChange", value: e.target.value })} type="text" className="form-control" id="password" placeholder="password" />
            </div>
            {state.password.hasErrors && <p className="text-danger">{state.password.message}</p>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">confirmPassword</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input onBlur={(e) => dispatch({ type: "confirmPasswordRules", value: e.target.value })} onChange={(e) => dispatch({ type: "confirmPasswordChange", value: e.target.value })} type="text" className="form-control" id="confirmPassword" placeholder="confirmPassword" />
            </div>
            {state.confirmPassword.hasErrors && <p className="text-danger">{state.confirmPassword.message}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
