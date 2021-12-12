import React, { useContext, useEffect, useState } from "react"
import { withRouter } from "react-router"
import axios from "axios"
//CONTEXTS
import FormState from "./FormState"
import FormDispatch from "./FormDispatch"
function Verification(props) {
  const formState = useContext(FormState)
  const formDispatch = useContext(FormDispatch)

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
    console.log("uniqueid", formState.uniqueId)
    console.log(checkCount, "from the useEffect")
    const ourRequest = axios.CancelToken.source()
    if (checkCount >= 1) {
      console.log("verify otp")
      console.log(formState.uniqueId)
      async function register() {
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/validateOTP", { uniqueId: formState.uniqueId, otp: otp }, { cancelToken: ourRequest.token })
          console.log(response)
          if (response.data.success) {
            props.history.push("/customers/register/login")
            return
          }
          setError("Invalid Otp")
        } catch (e) {
          console.log(e.response, "there was an error")
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
            <h4>
              Otp has been sent to {formState.formData.customers.mobile} and {formState.formData.customers.email}
            </h4>
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
