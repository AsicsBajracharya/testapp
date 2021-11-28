import React, { useEffect } from "react"
import { Switch, Route, Link } from "react-router-dom"
//components
import Register from "./CustomerForm/Register"
import Verification from "./CustomerForm/Verification"
import Login from "./CustomerForm/Login"
import PersonalInfo from "./CustomerForm/PersonalInfo"
function CustomerForm() {
  function handleSubmit() {
    console.log("form can be submitted")
  }
  return (
    <div>
      <h3>Please fill out the form below to create your demat ac</h3>
      <div className="links">
        <Link to="/customers/register">register</Link>
        <Link to="/customers/register/verify">verify</Link>
        <Link to="/customers/register/login">login</Link>
      </div>

      <Switch>
        <Route exact path="/customers/register">
          <Register />
        </Route>
        <Route path="/customers/register/verify">
          <Verification />
        </Route>
        <Route path="/customers/register/login">
          <Login />
        </Route>
        <form action="">
          <Route path="/customers/register/personalInfo">
            <PersonalInfo />
          </Route>
        </form>
      </Switch>
    </div>
  )
}

export default CustomerForm
