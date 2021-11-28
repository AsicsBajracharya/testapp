import React, { useContext, useState } from "react"
import { withRouter } from "react-router"
import axios from "axios"
import DispatchContext from "../DispatchContext"

function AdminLoggedOut(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const appDispatch = useContext(DispatchContext)

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:8000/api/login`, { email, password })
      console.log(response.data)
      appDispatch({ type: "adminLogin", data: response.data })
      props.history.push("/admin/dashboard")
    } catch (e) {
      console.log(e, "there was an error")
    }
  }
  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler} action="">
          <div className="card">
            <div className="card-header">
              <h3>Admin Login</h3>
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

export default withRouter(AdminLoggedOut)
