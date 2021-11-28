import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import DispatchContext from "../../DispatchContext"

import axios from "axios"
function Register(props) {
  const appDispatch = useContext(DispatchContext)

  const originalState = {
    email: {
      value: "",
      hasErrors: false,
      message: "",
    },
    mobile: {
      value: "",
      hasErrors: false,
      message: "",
    },
    sendCount: 0,
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "emailChange":
        draft.email.value = action.value
        draft.email.hasErrors = false
        return
      case "mobileChange":
        draft.mobile.value = action.value
        draft.mobile.hasErrors = false
        return
      case "emailRules":
        if (action.value.trim() != "") {
          draft.email.value = action.value
        } else {
          draft.email.hasErrors = true
          draft.email.message = "This field cannot be blank"
        }

        return
      case "mobileRules":
        if (action.value.trim() == "") {
          draft.mobile.hasErrors = true
          draft.mobile.message = "This field cannot be blank"
        } else if (action.value.trim().length != 10) {
          // draft.mobile.hasErrors = true
          // draft.mobile.message = "Mobile number must be 10 digits"
        }

        return
      case "submitForm":
        if (!draft.email.hasErrors && !draft.mobile.hasErrors && draft.email.value != "" && draft.mobile.value != "") draft.sendCount++
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, originalState)

  useEffect(() => {
    console.log(state.sendCount)
    const ourRequest = axios.CancelToken.source()
    if (state.sendCount) {
      async function register() {
        try {
          const response = await axios.post("http://localhost:8000/api/generateOTP", { email: state.email.value, password: state.mobile.value }, { cancelToken: ourRequest.token })
          console.log("registration form submitted")
          console.log(response.data.data.uniqueId)
          console.log(response.data)
          appDispatch({ type: "otpSend", value: response.data.data.uniqueId })
          props.history.push("/customers/register/verify")
        } catch (e) {
          console.log(e, "there was an error")
        }
      }
      register()
    }

    return () => ourRequest.cancel()
  }, [state.sendCount])

  function submitHandler(e) {
    e.preventDefault()
    dispatch({ type: "emailRules", value: state.email.value })
    dispatch({ type: "mobileRules", value: state.mobile.value })

    //if successful the push to the other page
    dispatch({ type: "submitForm" })
  }
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Register you Account</h3>
          </div>
          <div className="card-body">
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input onBlur={(e) => dispatch({ type: "emailRules", value: e.target.value })} onChange={(e) => dispatch({ type: "emailChange", value: e.target.value })} type="text" className="form-control" id="email" placeholder="Email" />
              </div>
              {state.email.hasErrors && <p className="text-danger">{state.email.message}</p>}
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">+977</div>
                </div>
                <input onBlur={(e) => dispatch({ type: "mobileRules", value: e.target.value })} onChange={(e) => dispatch({ type: "mobileChange", value: e.target.value })} type="number" className="form-control" id="password" placeholder="Mobile Number" />
                <div className="input-group-append">
                  <div className="input-group-text">@</div>
                </div>
              </div>
              {state.mobile.hasErrors && <p className="text-danger">{state.mobile.message}</p>}
            </div>
            <button onClick={submitHandler} disabled={state.email.hasErrors && state.mobile.hasErrors && state.email.value == "" && state.mobile.value == ""} className="btn btn-primary mt-3">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Register)
