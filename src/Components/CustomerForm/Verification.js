import React, { useContext, useEffect, useState } from "react"
import { useImmerReducer } from "use-immer"
import axios from "axios"
import StateContext from "../../StateContext"
function Verification() {
  const appState = useContext(StateContext)
  const [checkCount, setCheckCount] = useState(0)

  function submitHandler(e) {
    e.preventDefault()
    console.log("button Clicked")
    async function sendOtp() {
      try {
        const response = await axios.post("http://localhost:8000/api/validateOTP", { uniqueId: "0e3e5642a57711dc80a258f0a6c38d6c", otp: "123456" })
      } catch (e) {
        console.log(e, "there was an error")
      }
    }

    sendOtp()
    setCheckCount(checkCount + 1)
    console.log(checkCount)
  }

  useEffect(() => {
    if (checkCount) {
      console.log("this function ran")
      async function sendOtp() {
        try {
          const response = await axios.post("http://localhost:8000/api/validateOTP", { uniqueId: "0e3e5642a57711dc80a258f0a6c38d6c", otp: "123456" })
        } catch (e) {
          console.log(e, "there was an error")
        }
      }

      sendOtp()
    }
  }, checkCount)

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
              <input type="text" className="form-input" />
            </div>
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

export default Verification
