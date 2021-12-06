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
import FamilyInformation from "./FamilyInformation"
import Documents from "./Documents"
import Account from "./Account"
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
    addresses: [
      {
        type: "",
        block_number: "",
        phone_number: "",
        ward_number: "",
        locality: "",
        municipality: "",
        district: "",
        province: "",
        country: "",
      },
      {
        type: "",
        block_number: "",
        phone_number: "",
        ward_number: "",
        locality: "",
        municipality: "",
        district: "",
        province: "",
        country: "",
      },
    ],
    families: {
      father_name: "",
      grand_father_name: "",
      mother_name: "",
      spouse: "",
      son_name: "",
      daughter_name: "",
      father_in_law_name: "",
      daughter_in_law_name: "",
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
      case "saveAddress":
        draft.addresses = action.value
        return
      case "saveFamily":
        draft.families = action.value
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
          <Link to="/customers/register/address">address</Link>
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
            <Route path="/customers/register/familyInformation">
              <FamilyInformation />
            </Route>
            <Route path="/customers/register/account">
              <Account />
            </Route>
            <Route path="/customers/register/documents">
              <Documents />
            </Route>
          </form>
        </Switch>
      </FormDispatch.Provider>
    </FormState.Provider>
  )
}

export default CustomerForm
