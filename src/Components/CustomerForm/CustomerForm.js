import React, { useEffect } from "react"
import { Switch, Route, Link } from "react-router-dom"
import { useImmerReducer } from "use-immer"
//CONTEXTS
import FormState from "./FormState"
import FormDispatch from "./FormDispatch"
//components
import Register from "./Register"
import Verification from "./Verification"
import Login from "./Login"
import PersonalInfo from "./PersonalInfo"
import ReadyDocuments from "./ReadyDocuments"
import Address from "./Address"
function CustomerForm() {
  const originalState = {
    uniqueId: "",
    customers: {
      demat_account_type: "1",
      full_name: "",
      email: "",
      mobile: "",
      username: "",
      password: "",
      is_minor: "",
      nominee: "",
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "customerUpdate":
        console.log("this reducer was hit on customer form main")
        console.log(action.value.email, "action.value")
        draft.customers.email = action.value.email
        draft.customers.mobile = action.value.mobile
        draft.uniqueId = action.value.uniqueId
        return
      case "saveUsername":
        draft.customers.username = action.value
        return
      case "savePassword":
        draft.customers.password = action.value
        return
      case "default":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, originalState)
  function handleSubmit() {
    console.log("form can be submitted")
  }
  return (
    <FormState.Provider value={state}>
      <FormDispatch.Provider value={dispatch}>
        <h3>Please fill out the form below to create your demat ac!!!!!</h3>
        <div className="links">
          <Link to="/customers/register">register</Link>
          <Link to="/customers/register/verify">verify</Link>
          <Link to="/customers/register/login">login</Link>
          <Link to="/customers/register/dematForm/personalInfo">login</Link>
          <Link to="/customers/register/dematForm/address">login</Link>
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
            <Route path="/customers/register/readyDocuments">
              <ReadyDocuments />
            </Route>
            <Route path="/customers/register/personalInfo">
              <PersonalInfo />
            </Route>
            <Route path="/customers/register/address">
              <Address />
            </Route>
          </form>
        </Switch>
      </FormDispatch.Provider>
    </FormState.Provider>
  )
}

export default CustomerForm
