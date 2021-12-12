import React, { useEffect } from "react"
import { Switch, Route, Link } from "react-router-dom"
import { useImmerReducer } from "use-immer"
import axios from "axios"
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
import Occupation from "./Occupation"
import Documents from "./Documents-backup"
import Account from "./Account"
import Agreement from "./agreement"
function CustomerForm() {
  const originalState = {
    uniqueId: "",
    saveCount: 0,
    formData: {
      customers: {
        demat_account_type: "1",
        full_name: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
        is_minor: "1",
        nominee: "1",
      },
      personal_informations: {
        dob: "",
        gender: "",
        marital_status: "",
        nationality: "",
        pan_number: null,
        identity_card_type: "",
        identity_card_number: "",
        identity_card_issue_district: "",
        identity_card_issue_date: "",
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
      occupations: {
        title: "",
        type: "",
        organization_name: "",
        address: "",
        designation: "",
        financial_details: "",
      },
      accounts: {
        bank_name: "",
        bank_code: "",
        branch_name: "",
        number: "",
        type: "",
      },
      documents: {
        photo: "",
        gov_issued_id_front: "",
        gov_issued_id_back: "",
        thumb_left: "",
        thumb_right: "",
        signature: "",
        lat: "27.6915196",
        long: "85.3420486",
      },
    },
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "customerUpdate":
        console.log("this reducer was hit on customer form main")
        console.log(action.value.email, "action.value")
        draft.formData.customers.email = action.value.email
        draft.formData.customers.mobile = action.value.mobile
        draft.uniqueId = action.value.uniqueId
        return
      case "saveUsername":
        draft.formData.customers.username = action.value
        return
      case "savePassword":
        draft.formData.customers.password = action.value
        return
      case "savePersonalInfo":
        draft.formData.personal_informations = action.value
        return
      case "saveFullName":
        draft.formData.customers.full_name = action.value
        return
      case "saveAddress":
        draft.formData.addresses = action.value
        return
      case "saveFamily":
        draft.formData.families = action.value
        return
      case "saveOccupation":
        draft.formData.occupations = action.value
        return
      case "saveAccount":
        draft.formData.accounts = action.value
        return
      case "saveDocuments":
        draft.formData.documents = action.value
        return
      case "saveForm":
        draft.saveCount++
      case "default":
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, originalState)
  function handleSubmit() {
    console.log("form can be submitted")
  }

  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    if (state.saveCount) {
      console.log("send axios request here")
      async function register() {
        try {
          const response = await axios.post("http://localhost:8000/api/register_customer", state.formData, { cancelToken: ourRequest.token })
          console.log("registration form submitted")
          console.log(response)
          console.log(response.data)
          if (response.data.success) {
            //REDIRECT TO CUSTOMER PORTAL
            //RETURN
          }
        } catch (e) {
          console.log(e, "there was an error")
        }
      }
      register()
    }
    return () => ourRequest.cancel()
  }, [state.saveCount])

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
            <Route path="/customers/register/occupation">
              <Occupation />
            </Route>
            <Route path="/customers/register/account">
              <Account />
            </Route>
            <Route path="/customers/register/documents">
              <Documents />
            </Route>
            <Route path="/customers/register/agreement">
              <Agreement />
            </Route>
          </form>
        </Switch>
      </FormDispatch.Provider>
    </FormState.Provider>
  )
}

export default CustomerForm
