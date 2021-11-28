import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router"
import axios from "axios"
import StateContext from "../../StateContext"
function Verification(props) {
  const appState = useContext(StateContext)
  const [otp, setOtp] = useState(0)
  const [checkCount, setCheckCount] = useState(0)
  const [error, setError] = useState("")

  function submitHandler(e) {
    e.preventDefault()
    //check if the otp is 6 digits
    console.log()
    if (otp.toString().length === 6) {
      //increase checkcount
      setCheckCount(checkCount + 1)
    }
  }

  useEffect(() => {
    console.log(checkCount, "from the useEffect")
    const ourRequest = axios.CancelToken.source()
    if (checkCount >= 1) {
      async function register() {
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/validateOTP", { uniqueId: appState.user.uniqueId, otp: 123456 }, { cancelToken: ourRequest.token })
          console.log("registration form submitted")
          console.log(response.data.data.uniqueId)
          console.log(response.data)
          // appDispatch({ type: "otpSend", value: response.data.data.uniqueId })
          props.history.push("/customers/register/login")
        } catch (e) {
          console.log(e, "there was an error")
          setError("Invalid Otp")
        }
      }
      register()
    }

    return () => ourRequest.cancel()
  }, [checkCount])

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3> Enter Verification Code</h3>
          <p>A message with verification code has been sent to your email address and phone number given below</p>
        </div>
        <div className="card-body">
          <div className="mobile-number">
            <h4>Example number 98019247439</h4>
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <input onChange={(e) => setOtp(e.target.value)} type="text" className="form-input" maxLength="6" />
            </div>
            {error && <p className="text-danger">Invalid OTP</p>}
          </div>
          <button className="btn btn-secondary">Clear</button>
          <button className="btn btn-primary mt-3" onClick={submitHandler}>
            verify
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Verification)
