import React, { useEffect, useState } from "react"

function ClientLoggedOut() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  function submitHandler(e) {
    e.preventDefault()
    console.log("form submit handles from here")
  }
  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler} action="">
          <div className="card">
            <div className="card-header">
              <h3>Client Login</h3>
            </div>
            <div className="card-body">
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Password" />
                  <div className="input-group-append">
                    <div className="input-group-text">@</div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary mt-3">Login</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ClientLoggedOut
